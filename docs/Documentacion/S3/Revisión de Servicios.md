# Revisión de Controladores y Metodología de Trabajo Backend-Frontend - Sprint 3

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
**Fecha:** 31/03/2025  
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
| Miembro                      | Responsabilidad |
|------------------------------|-----------------|
| Nerea Jiménez Adorna         | Redactora       |
| José María Portela Huerta    | Revisor y Corrector |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios         | Autor                |
|---------|-------------|--------------------------------|----------------------|
| v1.0    | 16/04/2025  | Creación del documento.        | Miguel Gómez Vela |
| v1.1    | 01/05/2025  | Revisión del documento y corrección del índice        | María del Mar Ávila |



## Índice

- [Introducción](#introducción)
- [Análisis de servicios](#análisis-de-servicios)
  - [WorksDoneService](#worksdoneservice)
  - [MilestoneService](#milestoneservice)
  - [StatusKanbanOrderService](#statuskanbanorderservice)
  - [CommisionService](#commisionservice)
  - [SearchService](#searchservice)
  - [StripeConnectService](#stripeconnectservice)
  - [WorkService](#workservice)
  - [AuthService](#authservice)
  - [ReportService](#reportservice)
  - [ArtistRestService](#artistrestservice)
  - [PaymentService](#paymentservice)
  - [CategoryRestService](#categoryrestservice)
  - [ClientRestService](#clientrestservice)
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

### AuthService

---

### ReportService

---
### ArtistRestService

---

### PaymentService

---

### CategoryRestService
---

### ClientRestService
---
Un apunte es que es el controlador de Client pero las urls empiezan con users.

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

Esta metodología asegura que los servicios sean diseñados, implementados y mantenidos de manera coherente y eficiente, con la colaboración constante entre los equipos de **Frontend** y **Backend** para cumplir con los objetivos del negocio.
