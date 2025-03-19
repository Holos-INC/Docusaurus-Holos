# Guía de Buenas Prácticas en Desarrollo Backend - Sprint 2

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
</p>
<p align="center">
  <strong>Universidad de Sevilla</strong> 
</p>
<p align="center">
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong>  
</p>

## **Grado en Ingeniería Informática – Ingeniería del Software**

**Curso:** 2024 – 2025  
**Fecha:** 14/03/2025  
**Versión:** v1.1  

**Grupo de prácticas:** G1  
**Nombre del grupo de prácticas:** ISPP - Grupo 1 - Holos
- María del Mar Ávila Maqueda  
- Joaquín González Ganfornina  
- Nerea Jiménez Adorna  
- Juan del Junco Obregón  
- Miguel Ángel Gómez Vela  
- Juan Antonio Moreno Moguel  
- María del Carmen Barrera Garrancho  
- Daniel Guedes Preciados  
- Julia Virginia Ángeles Burgos  
- Javier Muñoz Romero  
- Juan Núñez Sánchez  
- Nicolás Pérez Gómez  
- Francisco Pérez Lázaro  
- Celia Aguilera Camino  
- Gabriel María Vacaro Goytía  
- Ignacio Warleta Murcia  
- José María Portela Huerta 

**Responsables:**
| Miembro              | Responsabilidad                 |
|----------------------|---------------------------------|
| María del Mar Ávila  |  Redactora                      |
| Juan del Junco       |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios | Autor                 |
|---------|------------|------------------------|------------------------|
| v1.0    | 14/03/2025 | Creación del documento. | María del Mar Ávila   |
| v1.1    | 19/03/2025 | Añadidos @transactional y rollback, bloques try-catch y explicación de @quey | María del Mar Ávila   |

## **Índice** 
1. [Introducción](#introducción)  
2. [Estructura del Código](#1-estructura-del-código)  
3. [Uso de Swagger](#2-uso-de-swagger-para-probar-el-backend)  
4. [Gestión de permisos en SecurityConfig](#3-gestión-de-permisos-en-securityconfig)  
5. [Uso de findCurrentUser](#4-uso-de-findcurrentuser)  
6. [Manejo de excepciones](#5-manejo-de-excepciones) 
7. [Manejo de transacciones](#6-manejo-de-transacciones)  
8. [Evaluación del Código](#7-evaluación-del-código)  
9. [Conclusión](#conclusión)  

## Introducción
El desarrollo de una API backend debe seguir una estructura clara y segura para garantizar **mantenibilidad, escalabilidad y protección de datos**.  
Este documento establece las **buenas prácticas** a seguir en el desarrollo backend, abordando:
-  **Estructura del código** (Controlador, Servicio, Repositorio).  
-  **Uso de Swagger** para probar la API.  
-  **Gestión de permisos en SecurityConfig**.  
-  **Uso de `findCurrentUser()` para restringir accesos**.  
- **Manejo adecuado de excepciones**.  
-  **Criterios de evaluación del código**.  

Siguiendo esta guía, se garantiza que el código sea **seguro, estructurado y fácil de mantener**.

---

##  **1. Estructura del Código**
Es importante no mezclar responsabilidades, por lo que, acontinuación, se explica la funcionalidad de cada elemento estructural.
### **Repositorio (`Repository`)**  
Los repositorios gestionan las consultas a la base de datos sin incluir lógica de negocio.  
**Hacer:**
```java
@Query("SELECT a FROM Artist a WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :query, '%'))")
Page<Artist> searchByName(String query, Pageable pageable);
```
**No hacer:**
```java
@Query("SELECT a FROM Artist a WHERE LOWER(a.name) LIKE LOWER(CONCAT('%', :query, '%'))")
Page<Artist> searchByName(String query, Pageable pageable) {
    if (query.length() < 3) {
        throw new IllegalArgumentException("La consulta debe tener al menos 3 caracteres.");
    }
    return repository.searchByName(query, pageable);
}
```

### **Servicio (`Service`)**  
Contiene la lógica de negocio y validaciones.  
**Hacer:**
```java
public Page<Work> searchWorks(String query, Double minPrice, Double maxPrice, Pageable pageable) {
        try {
            if (minPrice != null && maxPrice != null && minPrice > maxPrice) {
                throw new ResourceNotOwnedException("El precio mínimo no puede ser mayor que el máximo.");
            }
            return workRepository.searchByTitleAndPrice(query, minPrice, maxPrice, pageable);
        } catch (ResourceNotOwnedException e) {
            throw new IllegalArgumentException("Error en los parámetros de búsqueda: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error inesperado al buscar trabajos", e);
        }
}
```
**No hacer:**
```java
public Page<Work> searchWorks(...) {
    return workRepository.searchByTitleAndPrice(query, minPrice, maxPrice, pageable);
}
```
#### Nota sobre el parámetro query en searchWorks:
- query es un parámetro opcional que permite buscar trabajos y/o artistas basándose en palabras clave:
    - En artistas se puede usar para buscar por email, username o name.
    - En trabajos se puede usar para buscar por name.

### **Controlador (`Controller`)**  
Gestiona las peticiones HTTP sin incluir lógica de negocio.  
**Hacer:**
```java
@GetMapping("/works")
public ResponseEntity<?> searchWorks(@RequestParam(required = false) String query,
                                     @RequestParam(required = false) Double minPrice,
                                     @RequestParam(required = false) Double maxPrice,
                                     @RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "10") int size) {
    try {
        Page<Work> results = searchService.searchWorks(query, minPrice, maxPrice, PageRequest.of(page, size));
        return ResponseEntity.ok(results);
    } catch (IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno al buscar trabajos");
    }
}
```
**No hacer:**
```java
@GetMapping("/works")
public ResponseEntity<Page<Work>> searchWorks(...) {
    if (minPrice != null && maxPrice != null && minPrice > maxPrice) {
        throw new IllegalArgumentException("El precio mínimo no puede ser mayor que el máximo.");
    }
    
    Page<Work> results = workRepository.searchByTitleAndPrice(query, minPrice, maxPrice, pageable);
    return ResponseEntity.ok(results);
}
```

---

## **2. Uso de Swagger para probar el backend**

### **¿Qué es Swagger y para qué sirve?**
Swagger permite probar la API sin necesidad de herramientas externas como Postman.  
Proporciona una interfaz para enviar solicitudes y ver respuestas.

### **¿Cómo acceder a Swagger?**
1. **Arranca la aplicación Spring Boot**.  
2. **Abre el navegador y visita:**  
   ```
   http://localhost:8080/swagger-ui/index.html
   ```

### **Cómo probar un endpoint con Swagger**

Ejemplo: Probando el endpoint de búsqueda de trabajos (`/api/v1/search/works`).

1. **Abre Swagger** en `http://localhost:8080/swagger-ui/index.html`.  
2. **Busca el endpoint** `GET /api/v1/search/works`.  
3. **Haz clic en "Try it out"**.  
4. **Introduce los valores** (Según lo requiera la búsqueda a realizar):
    - **query**: `"arte"`
    - **minPrice**: `"50"`
    - **maxPrice**: `"300"`
    - **page**: `"0"`
    - **size**: `"10"`
5. Pulsa **"Execute"**. 
6. Verás la **respuesta JSON** con los resultados.

### **Cómo documentar un endpoint en Swagger**
```java
@Tag(name = "Search Controller", description = "API for searching Works and Artists")
@Operation(summary = "Buscar trabajos", description = "Permite buscar trabajos por título y precio")
@GetMapping("/works")
```

---

## **3. Gestión de permisos en `SecurityConfig`**

`SecurityConfig.java` define qué endpoints son accesibles y cuáles requieren autenticación.

### **Código actual de `SecurityConfig.java`**
```java
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, AuthTokenFilter authTokenFilter) throws Exception {
    http
        .cors(cors -> cors.configurationSource(request -> {
            CorsConfiguration config = new CorsConfiguration();
            config.setAllowedOrigins(List.of("http://localhost:8081"));
            config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
            config.setAllowedHeaders(List.of("*"));
            return config;
        }))        
        .csrf(AbstractHttpConfigurer::disable)        
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))            
        .headers((headers) -> headers.frameOptions((frameOptions) -> frameOptions.disable()))
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()
            .anyRequest().permitAll()
        )
        .addFilterBefore(authTokenFilter, org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter.class); // 🔥 Register Filter

    return http.build();
}
```
Para nuestros endpoints podemos usar:

| **Configuración**      | **Descripción**                                      |
|------------------------|------------------------------------------------------|
| `.permitAll()`        | Permite el acceso sin autenticación.                 |
| `.authenticated()`    | Requiere autenticación para acceder.                 |
| `.hasRole("ADMIN")`   | Solo los usuarios con el rol `ADMIN` pueden acceder. |

### **Ejemplo de cómo influye en un `Service`**  
```java
public void deleteWork(Long workId) {
    BaseUser user = baseUserService.findCurrentUser();
    Work work = workRepository.findById(workId)
        .orElseThrow(() -> new ResourceNotFoundException("Work", "id", workId));

    if (!work.getArtist().getId().equals(user.getId()) && !user.getRoles().contains("ADMIN")) {
        throw new AccessDeniedException("No tienes permisos para eliminar este trabajo.");
    }
    workRepository.delete(work);
}
```
### **4. Uso de `findCurrentUser()`**  
Este método permite obtener el usuario autenticado y restringir accesos.

📌 **Ubicación:** `BaseUserService.java`

```java
@Transactional(readOnly = true)
public BaseUser findCurrentUser() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    if (auth == null)
        throw new ResourceNotFoundException("No estás logeado");

    return baseUserRepository.findUserByUsername(auth.getName())
        .orElseThrow(() -> new ResourceNotFoundException("User", "username", auth.getName()));
}
```
Ejemplo de uso para asegurar que un usuario solo vea sus propios pedidos:

```java
public List<Order> getUserOrders() {
    BaseUser user = findCurrentUser();
    return orderRepository.findByUserId(user.getId());
}
```
---
## **5. Manejo de Excepciones**

### ¿Por qué es importante manejar excepciones?
El manejo de excepciones es esencial para garantizar la estabilidad y seguridad del backend.  
Cuando una API no maneja correctamente los errores:  
✔ Se pueden filtrar mensajes internos sensibles a los clientes.  
✔ Los usuarios pueden acceder a datos no autorizados.  
✔ La API puede dejar de funcionar ante errores inesperados.  

**Las excepciones deben ser manejadas en el `Service`, y nunca en el `Controller`.**  
**El `ExceptionHandlerController.java` centraliza la gestión de errores para devolver respuestas claras.**  

---

### Excepciones implementadas y su función  
**Todas las excepciones están definidas en la carpeta `exceptions/`**  

| Excepción                        | Código HTTP                 | Uso                                                                 |
|----------------------------------|-----------------------------|---------------------------------------------------------------------|
| `AccessDeniedException`          | 403 FORBIDDEN               | Se usa cuando el usuario no tiene el rol o permisos suficientes para realizar una acción|
| `ResourceNotFoundException`      | 404 NOT FOUND               | Se usa cuando un recurso solicitado no existe en la base de datos. |
| `ResourceNotOwnedException`      | 400 BAD REQUEST             | Se lanza cuando un usuario intenta modificar un recurso que no es suyo. |
| `MethodArgumentNotValidException`| 400 BAD REQUEST             | Se lanza cuando un parámetro de entrada no cumple con las validaciones definidas. |
| `Exception (Error genérico)`     | 500 INTERNAL SERVER ERROR   | Captura cualquier error inesperado en la aplicación. |

---

### Ejemplos de uso en el código

#### **`AccessDeniedException`: Bloquear acceso a un recurso ajeno**  
Se usa cuando el usuario no tiene el rol o permisos suficientes para realizar una acción (ejemplo: solo los administradores pueden eliminar cuentas). 

```java
public void updateWork(Long workId, Work updatedWork) {
    BaseUser user = baseUserService.findCurrentUser();
    Work work = workRepository.findById(workId)
        .orElseThrow(() -> new ResourceNotFoundException("Work", "id", workId));

    if (!work.getArtist().getId().equals(user.getId())) {
        throw new AccessDeniedException("No tienes permisos para modificar este trabajo.");
    }

    work.setName(updatedWork.getName());
    workRepository.save(work);
}
```
### **`ResourceNotFoundException`: Manejar recursos inexistentes**  
Si un usuario intenta acceder a un **ID** que no existe en la base de datos, se debe devolver un **404 NOT FOUND**.  

```java
public Work getWorkById(Long workId) {
    return workRepository.findById(workId)
        .orElseThrow(() -> new ResourceNotFoundException("Work", "id", workId));
}
```
### **`ResourceNotOwnedException`: Evitar modificaciones no autorizadas**  
Se usa cuando un usuario intenta modificar un objeto que no le pertenece, pero el sistema no maneja roles estrictos (ejemplo: un usuario intenta editar un pedido de otro usuario).  

```java
public void updateWork(Long workId, Work updatedWork) {
    BaseUser user = baseUserService.findCurrentUser();
     ...

    if (!work.getArtist().getId().equals(user.getId())) {
        throw new ResourceNotOwnedException("No puedes modificar un trabajo que no te pertenece.");
    }

    work.setName(updatedWork.getName());
    workRepository.save(work);
}
}
```
### **`MethodArgumentNotValidException`: Manejar errores de validación de entrada**  
Si un usuario envía un campo inválido en una solicitud, la API debe devolver un error detallado. `MethodArgumentNotValidException` no se lanza manualmente con `throw new MethodArgumentNotValidException(...)`, sino que Spring Boot la lanza automáticamente cuando un parámetro de un método anotado con @Valid no cumple con las validaciones definidas en la entidad.

```java
@PostMapping("/works")
public ResponseEntity<Work> createWork(@Valid @RequestBody Work work) {
    Work savedWork = workRepository.save(work);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedWork);
}

```
**Ejemplo de error JSON devuelto por esta excepción:**
```java
{
  "statusCode": 400,
  "timestamp": "2025-03-06T10:00:00.000Z",
  "message": "{price=El precio debe ser mayor que 0}",
  "description": "uri=/api/v1/works"
}
```
- `@Valid` hace que los datos se validen antes de ejecutar el método. Si price es menor que 1, Spring lanza automáticamente `MethodArgumentNotValidException`, generando el JSON de error.

### Manejo centralizado en `ExceptionHandlerController.java`
**Todas las excepciones se gestionan en `ExceptionHandlerController.java`, para evitar que los controladores manejen errores.**

```java
@ExceptionHandler(ResourceNotFoundException.class)
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public ResponseEntity<ErrorMessage> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
    ErrorMessage message = new ErrorMessage(HttpStatus.NOT_FOUND.value(), new Date(), ex.getMessage(),
            request.getDescription(false));

    return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
}
```

---
## **6. Manejo de Transacciones**

`@Transactional` es una anotación de Spring que gestiona transacciones en la base de datos. Permite garantizar la **atomicidad** de las operaciones, lo que significa que todas las acciones dentro de un método anotado con `@Transactional` se ejecutan como una única unidad de trabajo.

Si alguna de las operaciones dentro del método falla, **todas las modificaciones en la base de datos se revierten automáticamente (rollback)**, asegurando que los datos no queden en un estado inconsistente.

### Comportamiento de `@Transactional`
Por defecto, `@Transactional`:

1. **Hace commit** automáticamente si el método se ejecuta correctamente.
2. **Realiza rollback solo en excepciones no comprobadas** (unchecked exceptions), es decir, `RuntimeException` y `Error`.
3. **No hace rollback en excepciones comprobadas (checked exceptions)** como `IOException` o `SQLException`, a menos que se especifique con `rollbackFor`.

### Ejemplo de uso con `rollback` automático
```java
@Service
public class CommisionService {

    private final CommisionRepository commisionRepository;

    @Autowired
    public CommisionService(CommisionRepository commisionRepository) {
        this.commisionRepository = commisionRepository;
    }

    @Transactional
    public Commision processCommision(Commision commision) {
        commisionRepository.save(commision);
        
        if (commision.getPrice() < 0) {
            throw new IllegalArgumentException("El precio de la comisión no puede ser negativo.");
        }

        return commision;
    }
}
```

### Ejemplo con `rollbackFor` para capturar excepciones comprobadas

Si queremos que **también haga rollback en excepciones comprobadas** (Checked Exceptions), debemos usar rollbackFor = NombreDeLaExcepcion.class:
```java
@Service
public class PaymentService {

    @Transactional(rollbackFor = {SQLException.class, IOException.class})
    public void processPayment(Payment payment) throws SQLException, IOException {
        paymentRepository.save(payment);
        
        if (payment.hasDatabaseError()) {
            throw new SQLException("Error en la base de datos");
        }

        if (payment.hasFileError()) {
            throw new IOException("Error al generar el archivo de pago");
        }
    }
}
```
### `@Transactional(readOnly = true)`

Una de las formas de usar `@Transactional` es añadir `readOnly = true`. Esto indica que el método solo realizará **operaciones de lectura** en la base de datos y **no permitirá modificaciones**. Al habilitar `readOnly = true`, Spring/Hibernate optimiza las consultas de lectura al evitar el seguimiento innecesario de cambios en las entidades, reduciendo el consumo de recursos y mejorando el rendimiento. Sin embargo, si intentamos modificar una entidad dentro de un método marcado como `readOnly = true`, los cambios **no se aplicarán** o podrían generar errores según el motor de base de datos utilizado.


### Diferencias entre `@Transactional` y `@Transactional(readOnly = true)`

| **Tipo de Transacción**          | **Propósito**              | **Características**                                      |
|----------------------------------|---------------------------|----------------------------------------------------------|
| `@Transactional`                | Modificación de datos     | Permite `INSERT`, `UPDATE`, `DELETE` y garantiza rollback en errores. |
| `@Transactional(readOnly = true)` | Solo lectura de datos     | Optimiza consultas porque no bloquea la base de datos ni mantiene caché de entidades. |

### Ejemplo de uso con `@Transactional(readOnly = true)`
```java
@Service
public class WorkService {

    private final WorkRepository workRepository;

    @Autowired
    public WorkService(WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    @Transactional(readOnly = true)
    public List<Work> getAllWorks() {
        return workRepository.findAll();
    }
}
```

### Cuándo usar ´@Transactional´

| **Caso de Uso**                                   | `@Transactional` | `@Transactional(readOnly = true)` |
|--------------------------------------------------|----------------|---------------------------------|
| **Consultar registros**                           | ❌ No necesario | ✅ Recomendado |
| **Modificar registros (`update/delete`)**        | ✅ Obligatorio | ❌ Incorrecto |
| **Insertar nuevos registros**                    | ✅ Obligatorio | ❌ Incorrecto |
| **Ejecutar múltiples consultas SQL en la misma operación** | ✅ Obligatorio | ⚠️ No recomendable |




## **7. Evaluación del Código**
| **Nivel** | **Descripción** |
|-----------|---------------|
| **1 - Deficiente** ❌ | No hay estructura clara, la lógica está desorganizada. No se implementan medidas de seguridad ni validaciones. |
| **2 - Mejorable** ⚠️ | Hay estructura, pero faltan validaciones clave, errores en permisos y problemas de seguridad. |
| **3 - Adecuado con mejoras necesarias** ✅ | El código está bien estructurado, pero hay algunos errores menores. |
| **4 - Óptimo** 🚀 | Código bien estructurado, seguro, documentado con Swagger y validaciones completas. |

---

## **Conclusión**
El manejo adecuado de excepciones, permisos y estructura del código garantiza que la API sea **segura, escalable y mantenible**.  
Siguiendo esta guía, aseguramos:

- **Separación clara entre `Controller`, `Service` y `Repository`.**  
- **Uso de `Swagger` para pruebas eficientes.**  
- **Gestión de permisos en `SecurityConfig`.**  
- **Restricción de accesos con `findCurrentUser()`.**  
- **Manejo de excepciones.**  

**El objetivo es alcanzar el nivel 4 en la evaluación del código para garantizar calidad y seguridad en el backend.**
