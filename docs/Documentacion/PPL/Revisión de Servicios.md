# Revisión de Servicios y Metodología de Trabajo  - PPL

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
**Fecha:** 16/04/2025  
**Versión:** v1.0

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
| Miembro                      | Responsabilidad |
|------------------------------|-----------------|
| Miguel Gómez Vela        | Redactor       |
| José María Portela Huerta    | Revisor y Corrector |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios         | Autor                |
|---------|-------------|--------------------------------|----------------------|
| v1.0    | 16/04/2025  | Creación y redaccion del documento.        | Miguel Gómez Vela |


## Índice

- [Introducción](#introducción)
- [Análisis de endpoints](#análisis-de-endpoints)
  - [WorksDoneService](#worksdonecontroller)
  - [MilestoneService](#milestonecontroller)
  - [StatusKanbanOrderService](#statuskanbanordercontroller)
  - [CommisionService](#commisioncontroller)
  - [SearchServicios](#searchcontroller)
  - [StripeConnectService](#stripeconnectcontroller)
  - [WorkService](#workcontroller)
  - [AuthService](#authcontroller)
  - [ReportService](#reportcontroller)
  - [ArtistRestService](#artistrestcontroller)
  - [PaymentService](#paymentcontroller)
  - [CategoryRestService](#categoryrestcontroller)
  - [ClientRestService](#clientrestcontroller)
- [Metodología de trabajo](#metodología-de-trabajo)

---
## Introducción

En este apartado se documentarán todos los servicios actuales organizados por clases. Para cada servicio se debe incluir:

- **Nombre del Servicio / Clase y su Ruta**  
  Indicar el nombre de la clase y la ruta asociada a los métodos implementados en dicha clase.

- **Descripción:**  
  Breve descripción del servicio y su función general dentro de la aplicación.

- **Métodos Implementados:**  
  Listado de los métodos implementados en la clase con detalles sobre el tipo de operación que realizan (GET, POST, PUT, DELETE), además de indicar si se exponen a la API o son solo funciones internas.

- **Categoría de la llamada:**  
  Clasificación del servicio según su implementación actual:  
  - **Bien hecha:** El servicio está completamente implementado y funcionando como se esperaba.  
  - **A eliminar:** El servicio no es útil o está obsoleto.  
  - **A corregir:** El servicio tiene errores, necesita mejoras o no está alineado con los estándares de la arquitectura actual.  
  - **No usado:** El servicio no se usa actualmente, pero se espera que sea utilizado en el futuro.

- **Datos que reciben:**  
  Descripción de los datos que el servicio espera recibir. Si hay algún parámetro innecesario o datos no requeridos (como el ID de usuario si se puede obtener mediante autenticación), debe ser indicado. Esto incluiría detalles sobre los DTOs que se pasan al servicio.

- **Datos que devuelven:**  
  Especificar qué tipo de datos el servicio devuelve, como JSON, objetos o listas de objetos. También se deben proporcionar ejemplos de las respuestas y detalles sobre los DTOs involucrados.

- **Errores y Excepciones:**  
  Explicar cómo se manejan los errores en el servicio, como las excepciones que se lanzan cuando los datos de entrada son incorrectos o faltan.

- **Dependencias:**  
  Mencionar si el servicio depende de otras clases o servicios y cómo interactúan entre sí (por ejemplo, repositorios, otros servicios).

Este documento se actualizará conforme a las necesidades y cambios del equipo.


---

## Análisis de servicios

### WorksDoneService

---
### MilestoneService

Todo en esta categoría está aún sin usar, por lo que no se saben las necesidades de front aún.

---

### StatusKanbanOrderService

---


### CommisionService

Antes de entrar en esta parte, comentar cómo se gestionarán los distintos estados en los que se encontrará una comisión, con un diagrama de estados:

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Estados_pedido_comision.png" alt="Estados de una comisión" width="750"/>
</p>
### CommisionService

#### Descripción General del Servicio:

El `CommisionService` gestiona las operaciones relacionadas con las comisiones, incluyendo la creación, modificación, cancelación, aceptación y rechazo de comisiones, así como la gestión de su estado a lo largo del proceso. También gestiona el historial de comisiones de clientes y artistas, y la lógica asociada al cambio de estado de las comisiones, como su aceptación, rechazo o cancelación.

#### Métodos Implementados:

### **Método 1: `getAllCommisions`**

#### **Descripción:**  
Este método recupera todas las comisiones almacenadas en el sistema.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/commisions`

#### **Categoría de la llamada:**  
- **Bien hecha**: El servicio está completamente implementado y funciona como se espera.

#### **Datos que reciben:**
- No requiere parámetros.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Lista de todas las comisiones.
    _Ejemplo:_  
    ```json
    [
      {
        "id": 1,
        "name": "Comisión de retrato",
        "description": "Descripción del retrato encargado",
        "price": 100.0,
        "status": "REQUESTED"
      }
    ]
    ```

---

### **Método 2: `createCommision`**

#### **Descripción:**  
Este método crea una nueva comisión para un artista específico.

#### **Tipo:** POST  
#### **Ruta:** `/api/v1/commisions/{artistId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `artistId` (Long): Identificador del artista al que se asignará la comisión.
- **Request Body:**  
  - `commisionDTO` (Objeto *CommisionRequestDTO*): Información necesaria para crear la comisión.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *CommissionDTO* con los datos de la comisión creada.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "name": "Retrato de familia",
      "description": "Retrato en óleo de la familia",
      "price": 150.0,
      "status": "REQUESTED",
      "artistUsername": "artist1"
    }
    ```

---

### **Método 3: `requestChangesCommision`**

#### **Descripción:**  
Solicita cambios en una comisión existente.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/requestChanges`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a modificar.
- **Request Body:**  
  - `commisionDTO` (Objeto *CommissionDTO*): Datos actualizados de la comisión.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *Commision* actualizado con los cambios solicitados.

---

### **Método 4: `getCommisionById`**

#### **Descripción:**  
Recupera una comisión específica identificada por su ID.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/commisions/{commisionId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a recuperar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *CommisionDTO* con la información de la comisión.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "name": "Retrato a lápiz",
      "description": "Retrato detallado en lápiz de un paisaje",
      "price": 80.0,
      "status": "REQUESTED",
      "artistUsername": "artist2",
      "clientUsername": "client1"
    }
    ```

---

### **Método 5: `updateCommisionStatus`**

#### **Descripción:**  
Actualiza el estado de una comisión, dependiendo de si ha sido aceptada o rechazada.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/accept`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a actualizar.
- **Request Parameter:**  
  - `accept` (boolean): Indicador de si la comisión ha sido aceptada (`true`) o rechazada (`false`).

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "status": "ACCEPTED"
    }
    ```

---

### **Método 6: `waitingCommission`**

#### **Descripción:**  
Pone una comisión en espera para confirmación del precio.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/waiting`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a poner en espera.
- **Request Body:**  
  - `priceChanged` (Objeto *CommissionDTO*): Datos de la comisión con el precio actualizado.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje indicando que la comisión está en espera de confirmación del precio.
    _Ejemplo:_  
    ```json
    "Waiting for price confirmation."
    ```

---

### **Método 7: `toPayCommission`**

#### **Descripción:**  
Actualiza el estado de la comisión a "para pagar" después de la confirmación del precio.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/toPay`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a actualizar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje indicando que la comisión fue aceptada correctamente.
    _Ejemplo:_  
    ```json
    "Price confirmed successfully."
    ```

---

### **Método 8: `rejectCommission`**

#### **Descripción:**  
Rechaza una comisión, actualizando su estado.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/reject`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a rechazar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje indicando que la comisión fue rechazada correctamente.
    _Ejemplo:_  
    ```json
    "Commission rejected successfully."
    ```

---

### **Método 9: `acceptCommission`**

#### **Descripción:**  
Acepta una comisión, actualizando su estado.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/accept`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a aceptar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje indicando que la comisión fue aceptada correctamente.
    _Ejemplo:_  
    ```json
    "Commission accepted successfully."
    ```

---

### **Método 10: `cancelCommission`**

#### **Descripción:**  
Cancela una comisión, verificando que el estado lo permita.

#### **Tipo:** PUT  
#### **Ruta:** `/api/v1/commisions/{commisionId}/cancel`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- **Path Variable:**  
  - `commisionId` (Long): Identificador de la comisión a cancelar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje indicando que la comisión fue cancelada correctamente.
    _Ejemplo:_  
    ```json
    "Commission canceled successfully."
    ```

---

#### Resumen de uso de métodos del `CommisionService` en `CommisionController`

| Método del Servicio                       | Endpoint en el Controlador                                    | Descripción breve                                             |
|-------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| `getAllCommisions()`                      | `GET /api/v1/commisions`                                      | Recupera todas las comisiones.                                |
| `createCommision(commisionDTO, artistId)` | `POST /api/v1/commisions/{artistId}`                           | Crea una nueva comisión para un artista específico.           |
| `requestChangesCommision(commisionDTO, commisionId)` | `PUT /api/v1/commisions/{commisionId}/requestChanges`   | Solicita cambios en una comisión existente.                   |
| `getCommisionById(commisionId)`           | `GET /api/v1/commisions/{commisionId}`                        | Recupera una comisión específica por su ID.                   |
| `updateCommisionStatus(commisionId, accept)` | `PUT /api/v1/commisions/{commisionId}/accept`              | Actualiza el estado de una comisión según aceptación o rechazo. |
| `waitingCommission(priceChanged, commisionId)` | `PUT /api/v1/commisions/{commisionId}/waiting`          | Pone una comisión en espera para confirmación del precio.     |
| `toPayCommission(commisionId)`            | `PUT /api/v1/commisions/{commisionId}/toPay`                  | Cambia el estado de la comisión a "para pagar".               |
| `rejectCommission(commisionId)`           | `PUT /api/v1/commisions/{commisionId}/reject`                 | Rechaza una comisión.                                         |
| `acceptCommission(commisionId)`           | `PUT /api/v1/commisions/{commisionId}/accept`                 | Acepta una comisión.                                          |
| `cancelCommission(commisionId)`           | `PUT /api/v1/commisions/{commisionId}/cancel`                 | Cancela una comisión.                                         |

---

Esta es la documentación para el servicio `CommisionService`.

---

### SearchService

#### Descripción General del Servicio:

El `SearchService` proporciona funcionalidades de búsqueda para obras de arte y artistas dentro de la aplicación. Permite realizar búsquedas específicas basadas en texto, precio, y otros filtros, como el número mínimo de obras realizadas por los artistas. Además, ofrece la capacidad de realizar búsquedas combinadas de obras y artistas en un único resultado paginado.

#### Métodos Implementados:

### **Método 1: `searchWorks`**

#### **Descripción:**  
Este método se encarga de buscar obras de arte utilizando parámetros de texto (`query`), rango de precios (`minPrice`, `maxPrice`), y paginación (`page`, `size`).

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/search/works`

#### **Categoría de la llamada:**  
- **Bien hecha**: Este servicio está completamente implementado y funcionando como se esperaba.

#### **Datos que reciben:**
- `query` (String, opcional): Texto para buscar en los títulos y descripciones de las obras.
- `minPrice` (Double, opcional): Precio mínimo para filtrar las obras.
- `maxPrice` (Double, opcional): Precio máximo para filtrar las obras.
- `page` (Integer, opcional, default: 0): Número de página.
- `size` (Integer, opcional, default: 10): Tamaño de la página.

#### **Datos que devuelven:**
Devuelve una página de objetos `SearchWorkDTO`. Cada obra contiene detalles como el `id`, `name`, `description`, `image`, y `artistUsername`.

**Ejemplo de respuesta para `searchWorks`:**
```json
{
  "content": [
    {
      "id": 1,
      "name": "Obra Ejemplo",
      "description": "Descripción de la obra",
      "image": "base64string",
      "artistUsername": "yellow"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 10
  },
  "totalElements": 50,
  "totalPages": 5
}
```
### **Método 2: `searchArtists`**

**Descripción:**  
Permite buscar artistas utilizando nombre, username o email, y/o el número mínimo de obras realizadas.

**Tipo:** GET  
**Ruta:** `/api/v1/search/artists`

**Categoría de la llamada:**  
- **Bien hecha**

**Datos que reciben:**
- `query` (String, opcional): Texto para buscar en nombre, username o email.
- `minWorksDone` (Integer, opcional): Mínimo número de obras realizadas.
- `page` (Integer, opcional, default: 0): Número de página.
- `size` (Integer, opcional, default: 10): Tamaño de la página.

**Datos que devuelven:**  
Página de objetos `Artist`.

**Errores comunes:**
- `minWorksDone < 0`: Lanza `ResourceNotOwnedException`.

**Dependencias:**
- `ArtistRepository`

```json
{
  "content": [
    {
      "id": 12,
      "username": "artistaestrella",
      "name": "Artista Estrella",
      "email": "estrella@arte.com",
      "worksDone": 7,
      "profileImage": "base64string",
      "bio": "Pintora especializada en retratos digitales.",
      "location": "Madrid, España"
    },
    {
      "id": 17,
      "username": "coloresvivos",
      "name": "Colores Vivos",
      "email": "colores@vivos.com",
      "worksDone": 10,
      "profileImage": "base64string",
      "bio": "Ilustrador y diseñador gráfico.",
      "location": "Sevilla, España"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 10
  },
  "totalElements": 2,
  "totalPages": 1,
  "last": true,
  "first": true,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "size": 10,
  "number": 0,
  "empty": false
}
```
### **Método 3: `searchWorksByArtist`**

**Descripción:**  
Devuelve las obras asociadas a un artista específico a partir de su `artistId`.

**Tipo:** GET  
**Ruta:** `/api/v1/search/works/artist/{artistId}`

**Categoría de la llamada:**  
- **Bien hecha**

**Datos que reciben:**
- `artistId` (Integer): ID del artista.
- `page` (Integer, opcional, default: 0): Número de página.
- `size` (Integer, opcional, default: 10): Tamaño de la página.

**Datos que devuelven:**  
Una página de objetos `SearchWorkDTO` con información básica de cada obra: id, nombre, descripción, imagen y nombre de usuario del artista.

**Errores comunes:**
- Si el `artistId` no existe, se devolverá un error controlado desde el repositorio o se lanzará una excepción relacionada.

**Dependencias:**
- `WorkRepository`

**Ejemplo de respuesta:**
```json
{
  "content": [
    {
      "id": 5,
      "name": "Retrato de Invierno",
      "description": "Un retrato digital en tonos fríos.",
      "image": "base64string",
      "artistUsername": "artistaestrella"
    },
    {
      "id": 8,
      "name": "Bosque Encantado",
      "description": "Ilustración fantástica de un bosque mágico.",
      "image": "base64string",
      "artistUsername": "artistaestrella"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 10
  },
  "totalElements": 2,
  "totalPages": 1,
  "last": true,
  "first": true,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "size": 10,
  "number": 0,
  "empty": false
}
```
### **Método 4: `searchAll`**

**Descripción:**  
Realiza una búsqueda combinada de artistas y obras en un único resultado paginado. Permite aplicar filtros opcionales como texto (`query`), número mínimo de obras realizadas (`minWorksDone`) y rango de precios (`minPrice`, `maxPrice`).

**Tipo:** GET  
**Ruta:** `/api/v1/search/all`

**Categoría de la llamada:**  
- **Bien hecha**

**Datos que reciben:**
- `query` (String, opcional): Texto para buscar tanto en obras como artistas.
- `minWorksDone` (Integer, opcional): Mínimo número de obras realizadas por los artistas.
- `minPrice` (Double, opcional): Precio mínimo de las obras.
- `maxPrice` (Double, opcional): Precio máximo de las obras.
- `page` (Integer, opcional, default: 0): Número de página.
- `size` (Integer, opcional, default: 10): Tamaño de la página.

**Datos que devuelven:**  
Página combinada de resultados, que puede incluir tanto artistas como obras. El tipo exacto de cada elemento puede distinguirse por sus propiedades (por ejemplo, `artistUsername` indica una obra; `email` y `worksDone` indican un artista).

**Errores comunes:**
- `minPrice > maxPrice`: Lanza `ResourceNotOwnedException`.
- `minWorksDone < 0`: Lanza `ResourceNotOwnedException`.
- Página negativa: Lanza `ResourceNotOwnedException`.

**Dependencias:**
- `ArtistRepository`
- `WorkRepository`

**Ejemplo de respuesta:**
```json
{
  "content": [
    {
      "id": 2,
      "name": "Aurora Boreal",
      "description": "Paisaje digital de auroras",
      "image": "base64string",
      "artistUsername": "coloresvivos"
    },
    {
      "id": 9,
      "username": "coloresvivos",
      "name": "Colores Vivos",
      "email": "colores@vivos.com",
      "worksDone": 10,
      "profileImage": "base64string",
      "bio": "Ilustrador y diseñador gráfico.",
      "location": "Sevilla, España"
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 10
  },
  "totalElements": 2,
  "totalPages": 1,
  "last": true,
  "first": true,
  "sort": {
    "sorted": false,
    "unsorted": true,
    "empty": true
  },
  "numberOfElements": 2,
  "size": 10,
  "number": 0,
  "empty": false
}
```


## Resumen de uso de métodos del `SearchService` en `SearchController`

| Método del Servicio                        | Endpoint en el Controlador                                | Descripción breve                                       |
|--------------------------------------------|------------------------------------------------------------|----------------------------------------------------------|
| `searchWorks(query, minPrice, maxPrice, page, size)` | `GET /api/v1/search/works`                         | Búsqueda de obras por texto y/o rango de precios.        |
| `searchArtists(query, minWorksDone, page, size)`     | `GET /api/v1/search/artists`                       | Búsqueda de artistas por texto y/o número de obras.      |
| `searchWorksByArtist(artistId, page, size)`          | `GET /api/v1/search/artists/{artistId}/works`      | Obtención de obras de un artista específico.             |
| `searchAll(query, minWorksDone, minPrice, maxPrice, page, size)` | `GET /api/v1/search/all`                 | Búsqueda combinada de artistas y obras con filtros.      |



---
### StripeConnectService

---

### WorkService
---


### AuthoritiesService

## Descripción General del Servicio
El `AuthoritiesService` es responsable de gestionar la creación, actualización y eliminación de usuarios, así como la asignación de roles (`ARTIST`, `CLIENT`, etc.). El servicio también maneja la autenticación de roles y la gestión de la información relacionada con los artistas y clientes, incluyendo sus datos personales y perfiles asociados.

---

## Método 1: `findByAuthority`
### Descripción:
Devuelve una autoridad (rol) por su nombre.

### Tipo: Interno  
### Categoría: Bien hecha

### Datos que recibe:
```json
{
  "authority": "ARTIST"
}
```

#### **Datos que devuelve:**
```json
{
  "id": 1,
  "description": "Nuevo artista",
  "baseUser": {
    "id": 10,
    "username": "nuevoArtista",
    "email": "nuevo@correo.com"
  }
}
```

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si no se encuentra la autoridad con el nombre proporcionado.

#### **Dependencias:**
- `AuthoritiesRepository`

---
## Método 2: `createUser`
### Descripción:
Crea un nuevo usuario, asignando su rol y guardando su información en la base de datos. Si el rol es `ARTIST`, también se crea un registro asociado de artista.

### Tipo: Interno  
### Categoría: Bien hecha

### Datos que recibe:
```json
{
  "username": "clientUser",
  "password": "password",
  "email": "client@example.com",
  "authority": "CLIENT",
  "firstName": "Client",
  "phoneNumber": "987654321"
}
```
#### **Datos que devuelve:**
```json
{
  "id": 10,
  "username": "clientUser",
  "email": "client@example.com"
}
```

#### **Errores y Excepciones:**
- `IllegalArgumentException` si el nombre de usuario o el email ya existen en la base de datos..
- `DataAccessException` si ocurre un error al guardar los datos.

#### **Dependencias:**
- `BaseUserService`
- `ArtistService`
- `ArtistService`
- `AuthoritiesRepository`
---

## Método 3: `updateUser`
### Descripción:
Actualiza los datos de un usuario existente, incluyendo su nombre, correo electrónico, número de teléfono y otros detalles. Si el usuario es un `ARTIST`, también actualiza la información relacionada con el artista.

### Tipo: Interno  
### Categoría: Bien hecha

### Datos que recibe:
```json
{
  "username": "updatedClientUser",
  "firstName": "Updated Client",
  "email": "updated@example.com",
  "phoneNumber": "123456789"
}
```
### Datos que devuelve:
```json
{
  "id": 10,
  "username": "updatedClientUser",
  "email": "updated@example.com"
}
```
#### **Errores y Excepciones:**
- `ResourceNotFoundException` si el usuario no se encuentra en la base de datos.
- `DataAccessException` si ocurre un error al guardar los datos.

#### **Dependencias:**
- `BaseUserService`
- `ArtistService`
---
## Método 4: `deleteUser`
### Descripción:
Elimina un usuario, verificando que no sea un administrador y que sea el propio usuario quien lo elimine. Si el usuario es un `ARTIST`, también se elimina su registro asociado.

### Tipo: Interno  
### Categoría: A corregir

### Datos que recibe:
```json
{
  "id": 10
}
```

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si el usuario no se encuentra en la base de datos.
- `AccessDeniedException` si el usuario no existe o ocurre cualquier otro error.

#### **Dependencias:**
- `BaseUserService`
- `ArtistService`
- `ClientService`
---

## Método 5: `findByBaseUserId`
### Descripción:
Devuelve el artista como `Optional` a partir del ID del `BaseUser`.

### Tipo: Interno  
### Categoría: Bien hecha

### Datos que recibe:
```json
{
  "baseUserId": 10
}
```

### Datos que devuelve:
``` json
{
  "present": true,
  "value": {
    "id": 1,
    "description": "Artista opcional",
    "baseUser": {
      "id": 10,
      "username": "opcional",
      "email": "opcional@correo.com"
    }
  }
}
```

#### **Dependencias:**
- `ArtistService`

---

## Método 6: `deleteArtist`
### Descripción:
Elimina un artista, siempre que no tenga comisiones en estado `ACCEPTED`. También borra su usuario base, estados Kanban y categorías asociadas.

### Tipo: Interno  
### Categoría: A corregir

### Datos que recibe:
```json
{
  "userId": 10
}
```

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si el usuario no se encuentra en la base de datos.
- `AccessDeniedException` si el usuario no existe o ocurre cualquier otro error.

#### **Dependencias:**
- `BaseUserService`
- `CommisionRepository`
- `StatusKanbanOrderService`
- `ArtistCategoryRepository`
- `BaseUserRepository`
---
## Método 7: `findByBaseUserId`
### Descripción:
Devuelve el artista como `Optional` a partir del ID del `BaseUser`.

### Tipo: Interno  
### Categoría: Bien hecha

### Datos que recibe:
```json
{
  "baseUserId": 10
}
```
### Datos que devuelve: 
``` json
{
  "present": true,
  "value": {
    "id": 1,
    "description": "Artista opcional",
    "baseUser": {
      "id": 10,
      "username": "opcional",
      "email": "opcional@correo.com"
    }
  }
}
```

#### **Dependencias:**
- `ArtistService`

```



### ReportService

---
### ArtistService

#### Descripción General del Servicio:
El `ArtistService` es el componente encargado de gestionar la lógica de negocio asociada a los artistas en la plataforma Holos. Incluye operaciones de persistencia, búsquedas personalizadas y eliminación controlada de artistas, asegurando que no existan conflictos con comisiones activas o elementos relacionados.

```
En este documento encuentro metodos que son ciertamente redundates los cuales habria que revisar , son funcionales pero no hay necesidad de hacerlos , por ejemplo saveArtist.

Tambien deberiamos revisar el repositorio , si extiende JPA , habria utilizarlo , sino no extenderlo
```
#### Métodos Implementados:

---

### **Método 1: `saveArtist`**

#### **Descripción:**
Guarda un nuevo artista en la base de datos.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
```json
{
  "id": 1,
  "description": "Nuevo artista",
  "baseUser": {
    "id": 10,
    "username": "nuevoArtista",
    "email": "nuevo@correo.com"
  }
}
```

#### **Datos que devuelve:**
```json
{
  "id": 1,
  "description": "Nuevo artista",
  "baseUser": {
    "id": 10,
    "username": "nuevoArtista",
    "email": "nuevo@correo.com"
  }
}
```

#### **Errores y Excepciones:**
- `DataAccessException` si ocurre un fallo al persistir.

#### **Dependencias:**
- `ArtistRepository`

---

### **Método 2: `findArtist`**

#### **Descripción:**
Devuelve un artista por su ID.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
```json
{
  "artistId": 1
}
```

#### **Datos que devuelve:**
```json
{
  "id": 1,
  "description": "Artista existente",
  "baseUser": {
    "id": 10,
    "username": "existente",
    "email": "existente@correo.com"
  }
}
```

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si no existe el artista.

#### **Dependencias:**
- `ArtistRepository`

---

### **Método 3: `findArtistByUserId`**

#### **Descripción:**
Busca un artista mediante el ID del usuario base asociado.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
```json
{
  "userId": 10
}
```

#### **Datos que devuelve:**
Igual al de `findArtist`

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si no se encuentra el artista.

#### **Dependencias:**
- `ArtistRepository`

---

### **Método 4: `findArtistByUsername`**

#### **Descripción:**
Devuelve un artista usando su nombre de usuario.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
```json
{
  "username": "existente"
}
```

#### **Datos que devuelve:**
Igual al de `findArtist`

#### **Errores y Excepciones:**
- `ResourceNotFoundException` si no se encuentra el artista.

#### **Dependencias:**
- `ArtistRepository`

---

### **Método 5: `isArtist`**

#### **Descripción:**
Comprueba si el usuario dado está registrado como artista.

#### **Tipo:** Interno
#### **Categoría:** A corregir

#### **Datos que recibe:**
```json
{
  "userId": 10
}
```

#### **Datos que devuelve:**
```json
true
```

#### **Errores y Excepciones:**
- Declara `throws Exception` innecesariamente.

#### **Dependencias:**
- `ArtistRepository`

---

### **Método 6: `deleteArtist`**

#### **Descripción:**
Elimina un artista, siempre que no tenga comisiones en estado `ACCEPTED`. También borra su usuario base, estados Kanban y categorías asociadas.

#### **Tipo:** Interno
#### **Categoría:** A corregir

#### **Datos que recibe:**
```json
{
  "userId": 10
}
```

#### **Datos que devuelve:**
(Sin contenido)

#### **Errores y Excepciones:**
- `AccessDeniedException` si tiene comisiones aceptadas.
- `ResourceNotFoundException` si no existe o si ocurre cualquier error.

#### **Dependencias:**
- `ArtistRepository`
- `CommisionRepository`
- `StatusKanbanOrderService`
- `ArtistCategoryRepository`
- `BaseUserRepository`

---

### **Método 7: `findByBaseUserId`**

#### **Descripción:**
Devuelve el artista como `Optional` a partir del ID del `BaseUser`.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
```json
{
  "baseUserId": 10
}
```

#### **Datos que devuelve:**
```json
{
  "present": true,
  "value": {
    "id": 1,
    "description": "Artista opcional",
    "baseUser": {
      "id": 10,
      "username": "opcional",
      "email": "opcional@correo.com"
    }
  }
}
```

#### **Errores y Excepciones:**
- Declara `throws Exception` innecesariamente.

#### **Dependencias:**
- `ArtistRepository`


### **Método 6: `deleteArtist`**

#### **Descripción:**
Elimina un artista, siempre que no tenga comisiones en estado `ACCEPTED`. También borra su usuario base, estados Kanban y categorías asociadas.

#### **Tipo:** Interno
#### **Categoría:** A corregir (el bloque `try/catch` captura cualquier excepción y siempre lanza `ResourceNotFoundException` aunque sea un error lógico)

#### **Datos que recibe:**
- `userId` (Long)

#### **Datos que devuelve:**
- Ninguno (void)

#### **Errores y Excepciones:**
- `AccessDeniedException` si tiene comisiones en estado `ACCEPTED`
- `ResourceNotFoundException` si no existe o si ocurre cualquier error

#### **Dependencias:**
- `ArtistRepository`
- `CommisionRepository`
- `StatusKanbanOrderService`
- `ArtistCategoryRepository`
- `BaseUserRepository`

---

### **Método 7: `findByBaseUserId`**

#### **Descripción:**
Devuelve el artista como `Optional` a partir del ID del `BaseUser`.

#### **Tipo:** Interno
#### **Categoría:** Bien hecha

#### **Datos que recibe:**
- `baseUserId` (Long)

#### **Datos que devuelve:**
- `Optional<Artist>`

#### **Errores y Excepciones:**
- Declara `throws Exception` innecesariamente.

#### **Dependencias:**
- `ArtistRepository`


### PaymentService

---

### CategoryRestService
---

### ClientRestService
---
Un apunte es que es el controlador de Client pero las urls empiezan con users.

---
#### ClientService 


#### Descripción General del Servicio:

El `ClientService` gestiona las operaciones relacionadas con los clientes, incluyendo la creación, búsqueda, actualización y eliminación de clientes en el sistema. Además, maneja validaciones relacionadas con las comisiones activas y los informes relacionados con los clientes.

#### Métodos Implementados:

### **Método 1: `saveClient`**

#### **Descripción:**  
Este método se encarga de guardar un cliente en la base de datos.

#### **Tipo:** POST  
#### **Ruta:** `/api/v1/clients`

#### **Categoría de la llamada:**  
- **Bien hecha**: El servicio está completamente implementado y funciona como se espera.

#### **Datos que reciben:**
- **Request Body:**  
  - `client` (Objeto *Client*): Información del cliente a guardar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *Client* con la información del cliente guardado.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "name": "Juan Pérez",
      "email": "juan@example.com"
    }
    ```

---

### **Método 2: `findClient`**

#### **Descripción:**  
Recupera un cliente específico identificado por su ID.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/clients/{id}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- `id` (Long): Identificador del cliente a recuperar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *Client* con la información del cliente.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "name": "Juan Pérez",
      "email": "juan@example.com"
    }
    ```

---

### **Método 3: `findClientByUserId`**

#### **Descripción:**  
Recupera un cliente basado en el ID de usuario.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/clients/byUser/{userId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- `userId` (Long): ID del usuario asociado al cliente.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *Client* con la información del cliente.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "name": "Juan Pérez",
      "email": "juan@example.com"
    }
    ```

---

### **Método 4: `isClient`**

#### **Descripción:**  
Verifica si un usuario es un cliente en el sistema.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/clients/isClient/{userId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- `userId` (Long): ID del usuario a verificar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Booleano indicando si el usuario es un cliente.
    _Ejemplo:_  
    ```json
    {
      "isClient": true
    }
    ```

---

### **Método 5: `findAll`**

#### **Descripción:**  
Recupera todos los clientes del sistema.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/clients`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- No se requieren parámetros.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Lista de objetos *Client* con la información de todos los clientes.
    _Ejemplo:_  
    ```json
    [
      {
        "id": 1,
        "name": "Juan Pérez",
        "email": "juan@example.com"
      },
      {
        "id": 2,
        "name": "Ana García",
        "email": "ana@example.com"
      }
    ]
    ```

---

### **Método 6: `deleteClient`**

#### **Descripción:**  
Elimina un cliente del sistema, verificando que no tenga comisiones activas y que no tenga registros relacionados.

#### **Tipo:** DELETE  
#### **Ruta:** `/api/v1/clients/administrator/clients/{userId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- `userId` (Long): ID del cliente a eliminar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Mensaje de confirmación si la eliminación es exitosa.
    _Ejemplo:_  
    ```json
    "Cliente eliminado exitosamente"
    ```
  - En caso de error, se devuelve un mensaje de error descriptivo.
    _Ejemplo:_  
    ```json
    "No se puede eliminar el cliente porque tiene registros relacionados en otras partes del sistema."
    ```

---

## Resumen de uso de métodos del `ClientService` en `ClientRestController`

| Método del Servicio                | Endpoint en el Controlador                           | Descripción breve                                              |
|------------------------------------|------------------------------------------------------|-----------------------------------------------------------------|
| `saveClient(client)`               | `POST /api/v1/clients`                               | Guarda un cliente en la base de datos.                          |
| `findClient(id)`                   | `GET /api/v1/clients/{id}`                           | Recupera un cliente por su ID.                                 |
| `findClientByUserId(userId)`       | `GET /api/v1/clients/byUser/{userId}`                | Recupera un cliente por el ID del usuario.                     |
| `isClient(userId)`                 | `GET /api/v1/clients/isClient/{userId}`              | Verifica si un usuario es un cliente.                          |
| `findAll()`                        | `GET /api/v1/clients`                                | Recupera todos los clientes del sistema.                       |
| `deleteClient(userId)`             | `DELETE /api/v1/clients/administrator/clients/{userId}`| Elimina un cliente del sistema.                                |

---

### ChatMessageService

#### Descripción General del Servicio:

El `ChatMessageService` gestiona la lógica de negocio para la creación, eliminación y recuperación de mensajes de chat dentro de la plataforma. Asegura que los mensajes se asocien a las comisiones correspondientes y que se validen las condiciones de acceso antes de permitir la creación o eliminación de los mensajes.

#### Métodos Implementados:

### **Método 1: `createChatMessage`**

#### **Descripción:**  
Este método se encarga de crear un nuevo mensaje de chat asociado a una comisión. Permite añadir texto y, opcionalmente, una imagen (con un límite de tamaño de 5MB).

#### **Tipo:** POST  
#### **Ruta:** `/api/v1/messages`

#### **Categoría de la llamada:**  
- **Bien hecha**: Este servicio está completamente implementado y funcionando como se esperaba.

#### **Datos que reciben:**
- **Request Parts:**
  - `chatMessage` (String): Cadena JSON que representa el objeto *ChatMessage* con los siguientes campos:
    ```json
    {
      "text": "Hello, how are you?"
    }
  - `image` (MultipartFile, opcional): Archivo que contiene la imagen asociada al mensaje.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *ChatMessage* representando el mensaje creado.
    _Ejemplo:_  
    ```json
    {
      "id": 1,
      "text": "Hello, how are you?",
      "creationDate": "2023-04-20T12:34:56",
      "image": null
    }
    ```

---

### **Método 2: `findConversationByCommisionId`**

#### **Descripción:**  
Recupera todos los mensajes de chat asociados a una comisión específica identificada por su ID.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/messages/chat/{commisionId}`

#### **Categoría de la llamada:**  
- **Bien hecha**

#### **Datos que reciben:**
- `commisionId` (Long): Identificador de la comisión a la que pertenecen los mensajes.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Lista de objetos *ChatMessage* asociados a la comisión.
    _Ejemplo:_  
    ```json
    [
      {
        "id": 1,
        "text": "Hello, how are you?",
        "creationDate": "2023-04-20T12:34:56",
        "image": null
      },
      {
        "id": 2,
        "text": "I'm good, thanks!",
        "creationDate": "2023-04-20T12:35:00",
        "image": null
      }
    ]
    ```

---

### **Método 3: `deleteMessage`**

#### **Descripción:**  
Elimina un mensaje de chat identificando por su ID.

#### **Tipo:** DELETE  
#### **Ruta:** `/api/v1/messages/{id}`

#### **Categoría de la llamada:**  
- **No se usa**

#### **Datos que reciben:**
- **Path Variable:**  
  - `id` (Long): Identificador del mensaje a eliminar.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto *MessageResponse* confirmando la eliminación del mensaje.
    _Ejemplo:_  
    ```json
    {
      "message": "Message deleted successfully!"
    }
    ```

---

### **Método 4: `findAllConversations`**

#### **Descripción:**  
Recupera todas las conversaciones de chat en el sistema.

#### **Tipo:** GET  
#### **Ruta:** `/api/v1/messages/admin/chats`

#### **Categoría de la llamada:**  
- **No se usa**

#### **Datos que reciben:**
- No se requieren parámetros.

#### **Datos que devuelven:**  
- **Respuesta JSON:** Objeto que representa todas las conversaciones de chat.
    _Ejemplo:_  
    ```json
    {
      "1": [
        {
          "id": 1,
          "text": "Hello, how are you?",
          "creationDate": "2023-04-20T12:34:56",
          "image": null
        }
      ],
      "2": [
        {
          "id": 2,
          "text": "I'm good, thanks!",
          "creationDate": "2023-04-20T12:35:00",
          "image": null
        }
      ]
    }
    ```

---


## Resumen de uso de métodos del `ChatMessageService` en `ChatMessageController`

| Método del Servicio                         | Endpoint en el Controlador                           | Descripción breve                                       |
|---------------------------------------------|------------------------------------------------------|----------------------------------------------------------|
| `createChatMessage(chatMessage)`            | `POST /api/v1/messages`                              | Crea un nuevo mensaje de chat con opción de incluir imagen. |
| `findConversationByCommisionId(commisionId)` | `GET /api/v1/messages/chat/{commisionId}`            | Recupera todos los mensajes de chat asociados a una comisión. |
| `deleteMessage(id)`                         | `DELETE /api/v1/messages/{id}`                       | Elimina un mensaje de chat por su ID.                   |
| `findAllConversations()`                    | `GET /api/v1/messages/admin/chats`                   | Recupera todas las conversaciones de chat.              |

---


### Metodología de Trabajo para los Servicios:

## 1. Identificación de Requerimientos de Negocio:
El **Frontend** o los **Stakeholders** proporcionan las funcionalidades necesarias, incluyendo las operaciones que el servicio debe manejar, tales como búsquedas de datos, operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y otros requerimientos de la API.

## 2. Diseño de la Lógica del Servicio:
El **Backend** define los métodos que implementarán la lógica necesaria para las operaciones solicitadas. Esto incluye la consulta de bases de datos, manipulación de datos, validaciones de negocio, y el tratamiento de errores. Este diseño también se debe alinear con los principios de diseño de servicios RESTful (si corresponde).

## 3. Definición de los Métodos del Servicio:
El **Backend** estructura los métodos del servicio de acuerdo con la lógica previamente diseñada. Los métodos se documentan, y se definen los parámetros de entrada (como los DTOs) y la salida (como las respuestas JSON). Los servicios pueden ser modificados según los cambios en los requerimientos o en la base de datos.

## 4. Desarrollo e Implementación del Servicio:
El **Backend** implementa el servicio según lo definido en la fase anterior, asegurándose de que cada método esté alineado con los requerimientos. Durante esta etapa, el servicio es probado de manera local por el **Backend** para verificar que las funcionalidades de cada método estén completas y funcionen correctamente.

## 5. Revisión de Datos y Seguridad:
El **Backend** revisa que no se envíen datos innecesarios o sensibles en las respuestas del servicio. También se realiza una validación rigurosa para asegurarse de que no se expongan datos privados. Si es necesario, se realizan ajustes en la configuración de seguridad, como el uso de tokens de autenticación o la validación de permisos.

## 6. Pruebas Unitarias:
El **Backend** desarrolla pruebas unitarias para cada método del servicio, verificando que la lógica implementada esté funcionando correctamente. Se debe comprobar que las respuestas sean las esperadas, y se manejan correctamente los errores y excepciones.

## 7. Pruebas de Integración:
El servicio se integra con otros servicios o con la base de datos, y se realizan pruebas de integración para asegurarse de que el servicio interactúe correctamente con otros sistemas. Esto incluye verificar que las consultas a la base de datos devuelvan los resultados correctos.

## 8. Entrega al Frontend y Ajustes:
Una vez que el servicio ha sido implementado y probado, el **Frontend** recibe el servicio para su integración en la interfaz de usuario. Durante esta fase, el **Frontend** realiza pruebas de integración y proporciona retroalimentación al **Backend** para realizar ajustes en caso de que la implementación no se alinee perfectamente con sus necesidades.

## 9. Documentación y Mantenimiento:
Se genera la documentación final del servicio, describiendo cómo se utiliza cada endpoint, los parámetros que recibe, las respuestas que devuelve y cualquier consideración especial (errores comunes, validaciones, etc.). Además, se establece un proceso de mantenimiento para asegurar que el servicio continúe funcionando correctamente a medida que evolucionen los requerimientos y el sistema.

---

