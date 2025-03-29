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
**Fecha:** 29/03/2025  
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
| Nerea Jiménez Adorna         | Redactora       |
| José María Portela Huerta    | Revisora        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios         | Autor                |
|---------|-------------|--------------------------------|----------------------|
| v1.0    | 29/03/2025  | Creación del documento.        | Nerea Jiménez Adorna |

## Índice

- [Introducción](#introducción)
- [Análisis de endpoints](#análisis-de-endpoints)
- [Metodología de trabajo](#metodología-de-trabajo)

---

## Introducción

En este apartado se documentarán todos los controladores actuales organizados por clases. Para cada controlador se debe incluir:

- **Nombre del controlador / Clase y su ruta**
- **Descripción:** 
- **Métodos implementados:** GET, POST, PUT, DELETE.
- **Categoría de la llamada:**  
  - **Bien hecha**  
  - **A eliminar**  
  - **A corregir**
- **Datos que reciben:**  
  - Si es necesario usar un DTO, se mostrará un JSON con los datos necesarios.
- **Datos que devuelven:**

---

## Análisis de endpoints

### WorksDoneController

#### POST (/api/v1/worksdone)
- **Descripción:**  
  Crea un nuevo registro de *WorksDone*.
- **Categoría:**  
  No usado/Usar a futuro
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *WorksDone* con los campos necesarios para la creación.  
  - **DTO a discutir con frontend.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *WorksDone* creado, incluyendo el identificador generado y los datos enviados. 
  - **DTO a discutir con frontend.**

---

#### GET (/api/v1/worksdone)
- **Descripción:**  
  Recupera la lista completa de registros de *WorksDone*.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - No requiere parámetros en el query.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *WorksDone*.  
  - **DTO necesario:** Lista de DTOs del objeto *WorksDone*.
    _Ejemplo:_
    ```json
    [
      {
        "id": 1,
        "titulo": "Trabajo 1",
        "descripcion": "Detalles del trabajo 1",
        "fecha": "2025-03-29",
        "artistId": 123
      },
      {
        "id": 2,
        "titulo": "Trabajo 2",
        "descripcion": "Detalles del trabajo 2",
        "fecha": "2025-03-28",
        "artistId": 124
      }
    ]
    ```

---

#### GET (/api/v1/worksdone/{id})
- **Descripción:**  
  Recupera un registro de *WorksDone* específico, identificado por su ID.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del registro de *WorksDone*.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *WorksDone* si se encuentra, o un error 404 si no existe.  
  - **DTO necesario:** DTO del objeto *WorksDone*.
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "name": "Trabajo 1",
      "descripcion": "Detalles del trabajo 1",
      "price": "200",
      "artistId": 123,
      "artistName": "Yellow",
      "artistUsername":"yellow",
      "image": [
                "string"
                ],
    }
    ```

---

#### GET (/api/v1/worksdone/artist/{artistId})
- **Descripción:**  
  Recupera la lista de registros de *WorksDone* asociados a un artista, identificado por su ID.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:** `artistId` (Long): Identificador del artista.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *WorksDone* vinculados al artista indicado.  
  - **DTO necesario:** Lista de DTOs del objeto *WorksDone*.
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "name": "Trabajo 1",
      "image": [
                "string"
                ],
    }
    ```

---

#### PUT (/api/v1/worksdone/artist/{artistId}/{worksDoneId})
- **Descripción:**  
  Actualiza un registro de *WorksDone* específico, vinculado a un artista. Se verifica previamente que el registro existe.
- **Categoría:**  
  No usado/Usar a futuro/A modificar
- **Datos que reciben:**  
  - **Path Variables:**  
    - `artistId` (Long): Identificador del artista. A MODIFICAR: 
    - `worksDoneId` (Long): Identificador del registro de *WorksDone* a actualizar.
  - **Payload JSON:** Objeto *WorksDone* actualizado con los nuevos datos (validados con @Valid).  
    _Ejemplo:_
    ```json
    {
      "titulo": "Trabajo actualizado",
      "descripcion": "Detalles actualizados",
      "fecha": "2025-03-30"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *WorksDone* actualizado con los datos modificados.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "titulo": "Trabajo actualizado",
      "descripcion": "Detalles actualizados",
      "fecha": "2025-03-30",
      "artistId": 123
    }
    ```

---

### MilestoneController

#### POST (/api/v1/milestones/milestone)
- **Descripción:**  
  Crea un nuevo hito (*Milestone*).
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *Milestone* con los campos necesarios para la creación.  
    _Ejemplo (estructura genérica):_
    ```json
    {
      "nombre": "Nombre del hito",
      "descripcion": "Descripción del hito",
      "fecha": "2025-03-29"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* creado, que incluye el identificador generado y los datos enviados.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Nombre del hito",
      "descripcion": "Descripción del hito",
      "fecha": "2025-03-29"
    }
    ```

---

#### GET (/api/v1/milestones/milestone/{id})
- **Descripción:**  
  Recupera un hito (*Milestone*) específico, identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del hito.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* si se encuentra, o un error 404 si no existe.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Nombre del hito",
      "descripcion": "Descripción del hito",
      "fecha": "2025-03-29"
    }
    ```

---

#### GET (/api/v1/milestones/milestones/commision/{commision_id})
- **Descripción:**  
  Recupera la lista de hitos (*Milestones*) asociados a una comisión, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `commision_id` (Long): Identificador de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Milestone* asociados a la comisión.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 2,
        "nombre": "Hito A",
        "descripcion": "Descripción del hito A",
        "fecha": "2025-03-28"
      },
      {
        "id": 3,
        "nombre": "Hito B",
        "descripcion": "Descripción del hito B",
        "fecha": "2025-03-27"
      }
    ]
    ```

---

#### DELETE (/api/v1/milestones/milestone/{id})
- **Descripción:**  
  Elimina un hito (*Milestone*) identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del hito a eliminar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* eliminado o confirmación de eliminación.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Nombre del hito",
      "descripcion": "Descripción del hito",
      "fecha": "2025-03-29"
    }
    ```

---

### StatusKanbanOrderController

#### POST (/api/v1/status-kanban-order)
- **Descripción:**  
  Añade un nuevo estado al Kanban.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `color` (String): Color del estado.
    - `description` (String): Descripción del estado.
    - `nombre` (String): Nombre del estado.
    - `artistId` (Integer): Identificador del artista.
  _Ejemplo de parámetros en la URL:_  
  `/api/v1/status-kanban-order?color=red&description=Estado+inicial&nombre=To+Do&artistId=101`
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* creado, incluyendo sus atributos (por ejemplo, id, color, description, name, artistId, order).  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "red",
      "description": "Estado inicial",
      "name": "To Do",
      "artistId": 101,
      "order": 1
    }
    ```

---

#### PUT (/api/v1/status-kanban-order/update)
- **Descripción:**  
  Actualiza el estado Kanban con la información enviada en el cuerpo de la solicitud.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *StatusKanbanOrder* con todos los campos necesarios para la actualización.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "blue",
      "description": "Estado actualizado",
      "name": "In Progress",
      "artistId": 101,
      "order": 2
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* actualizado.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "blue",
      "description": "Estado actualizado",
      "name": "In Progress",
      "artistId": 101,
      "order": 2
    }
    ```

---

#### PUT (/api/v1/status-kanban-order/{id}/updateKanban)
- **Descripción:**  
  Actualiza atributos específicos (color, descripción y nombre) del estado Kanban identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado.
  - **Payload JSON:** Objeto *StatusKanbanOrder* con los nuevos valores para color, descripción y nombre.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "green",
      "description": "Actualizado a verde",
      "name": "In Review"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* con los atributos actualizados.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "green",
      "description": "Actualizado a verde",
      "name": "In Review",
      "artistId": 101,
      "order": 3
    }
    ```

---

#### PUT (/api/v1/status-kanban-order/{id}/updateKanbanOrder)
- **Descripción:**  
  Actualiza el orden del estado Kanban identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado.
  - **Payload JSON:** Un número entero que representa el nuevo orden.  
    _Ejemplo:_
    ```json
    4
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* actualizado con el nuevo orden.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "green",
      "description": "Actualizado a verde",
      "name": "In Review",
      "artistId": 101,
      "order": 4
    }
    ```

---

#### DELETE (/api/v1/status-kanban-order/{id})
- **Descripción:**  
  Elimina el estado Kanban identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Integer): Identificador del estado a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Sin contenido (operación void o confirmación mediante código HTTP 200).

---

#### GET (/api/v1/status-kanban-order)
- **Descripción:**  
  Recupera todos los estados Kanban asociados a un artista, junto con las comisiones.  
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Un objeto que contiene dos listas: una de *StatusKanbanDTO* y otra de *StatusKanbanWithCommisionsDTO*.  
    _Ejemplo (estructura sugerida):_
    ```json
    {
      "statusKanban": [
        {
          "id": 1,
          "color": "green",
          "name": "In Review",
          "order": 4
        }
      ],
      "statusKanbanWithCommisions": [
        {
          "id": 2,
          "color": "blue",
          "name": "Completed",
          "commissions": [
            { "id": 10, "nombre": "Comisión 10", "estado": "Completed" }
          ]
        }
      ]
    }
    ```

---

#### PUT (/api/v1/status-kanban-order/{id}/next)
- **Descripción:**  
  Avanza el estado de una comisión al siguiente estado Kanban, utilizando el ID proporcionado.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado actual o de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado tras avanzar de estado.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "nombre": "Comisión 10",
      "estado": "In Progress"
    }
    ```

---

#### PUT (/api/v1/status-kanban-order/{id}/previous)
- **Descripción:**  
  Retrocede el estado de una comisión al estado anterior en el Kanban, utilizando el ID proporcionado.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado actual o de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado tras retroceder de estado.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "nombre": "Comisión 10",
      "estado": "Pending"
    }
    ```

---

#### GET (/api/v1/status-kanban-order/{id})
- **Descripción:**  
  Recupera un estado Kanban específico, identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Integer): Identificador del estado Kanban.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* si se encuentra, o un error en caso de no hallarlo.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "color": "green",
      "description": "Actualizado a verde",
      "name": "In Review",
      "artistId": 101,
      "order": 4
    }
    ```

---

### CommisionController

#### POST (/api/v1/commisions/{artistId})
- **Descripción:**  
  Crea una nueva comisión para un artista específico.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `artistId` (Long): Identificador del artista al que se asignará la comisión.
  - **Payload JSON:** Objeto *CommisionRequestDTO* con los campos necesarios para la creación de la comisión.  
    _Ejemplo (estructura genérica):_
    ```json
    {
      "titulo": "Encargo de retrato",
      "descripcion": "Retrato al óleo de 50x70 cm",
      "fechaEntrega": "2025-04-15",
      "presupuesto": 250.0
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* creado, que incluye el identificador generado y los datos enviados.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "titulo": "Encargo de retrato",
      "descripcion": "Retrato al óleo de 50x70 cm",
      "fechaEntrega": "2025-04-15",
      "presupuesto": 250.0,
      "estado": "Creada",
      "artistId": 101
    }
    ```

---

#### PUT (/api/v1/commisions/{commisionId}/requestChanges)
- **Descripción:**  
  Solicita cambios en una comisión existente.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `commisionId` (Long): Identificador de la comisión a modificar.
  - **Payload JSON:** Objeto *CommisionDTO* con los nuevos datos o cambios solicitados.  
    _Ejemplo:_
    ```json
    {
      "titulo": "Encargo de retrato (Modificado)",
      "descripcion": "Se solicita mayor detalle en el fondo",
      "fechaEntrega": "2025-04-20"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con los cambios solicitados.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "titulo": "Encargo de retrato (Modificado)",
      "descripcion": "Se solicita mayor detalle en el fondo",
      "fechaEntrega": "2025-04-20",
      "presupuesto": 250.0,
      "estado": "Cambios solicitados",
      "artistId": 101
    }
    ```

---

#### GET (/api/v1/commisions)
- **Descripción:**  
  Recupera la lista completa de comisiones.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Commision*.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 10,
        "titulo": "Encargo de retrato",
        "descripcion": "Retrato al óleo de 50x70 cm",
        "fechaEntrega": "2025-04-15",
        "presupuesto": 250.0,
        "estado": "Creada",
        "artistId": 101
      },
      {
        "id": 11,
        "titulo": "Ilustración digital",
        "descripcion": "Ilustración para portada de libro",
        "fechaEntrega": "2025-05-01",
        "presupuesto": 300.0,
        "estado": "En progreso",
        "artistId": 102
      }
    ]
    ```

---

#### GET (/api/v1/commisions/requested)
- **Descripción:**  
  Recupera la lista de comisiones que han solicitado cambios.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Commision* con estado de "cambios solicitados" o similar.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 10,
        "titulo": "Encargo de retrato (Modificado)",
        "descripcion": "Se solicita mayor detalle en el fondo",
        "fechaEntrega": "2025-04-20",
        "presupuesto": 250.0,
        "estado": "Cambios solicitados",
        "artistId": 101
      }
    ]
    ```

---

#### GET (/api/v1/commisions/clientRequested)
- **Descripción:**  
  Recupera la lista de comisiones solicitadas por clientes, formateadas como *ClientCommissionDTO*.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *ClientCommissionDTO* con la información relevante para clientes.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 10,
        "titulo": "Encargo de retrato",
        "cliente": "Juan Pérez",
        "estado": "Creada"
      }
    ]
    ```

---

#### GET (/api/v1/commisions/{id})
- **Descripción:**  
  Recupera una comisión específica, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* si se encuentra, o un error 404 si no existe.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "titulo": "Encargo de retrato",
      "descripcion": "Retrato al óleo de 50x70 cm",
      "fechaEntrega": "2025-04-15",
      "presupuesto": 250.0,
      "estado": "Creada",
      "artistId": 101
    }
    ```

---

#### PUT (/api/v1/commisions/{id}/status)
- **Descripción:**  
  Actualiza el estado de una comisión según la aceptación (aprobación o rechazo) enviada como parámetro.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
  - **Request Parameter:**  
    - `accept` (boolean): Indicador de aprobación (`true`) o rechazo (`false`).
  _Ejemplo de URL:_  
  `/api/v1/commisions/10/status?accept=true`
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado.  
    _Ejemplo:_
    ```json
    {
      "id": 10,
      "titulo": "Encargo de retrato",
      "descripcion": "Retrato al óleo de 50x70 cm",
      "fechaEntrega": "2025-04-15",
      "presupuesto": 250.0,
      "estado": "Aceptada",
      "artistId": 101
    }
    ```

---

#### PUT (/api/v1/commisions/cancel/{id})
- **Descripción:**  
  Cancela una comisión, verificando el identificador del cliente.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a cancelar.
  - **Request Parameter:**  
    - `clientId` (Long): Identificador del cliente que solicita la cancelación.
  _Ejemplo de URL:_  
  `/api/v1/commisions/cancel/10?clientId=55`
- **Datos que devuelven:**  
  - **Respuesta:**  
    Un mensaje confirmando la cancelación, por ejemplo:  
    ```json
    "Comisión cancelada correctamente."
    ```
---

### SearchController

#### GET (/api/v1/search/works)
- **Descripción:**  
  Realiza la búsqueda de obras (*Work*) en función de parámetros como consulta de texto y rango de precios.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `query` (String, opcional): Texto a buscar en las obras.
    - `minPrice` (Double, opcional): Precio mínimo para filtrar.
    - `maxPrice` (Double, opcional): Precio máximo para filtrar.
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Work*.  
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 1,
          "titulo": "Obra Ejemplo",
          "descripcion": "Descripción de la obra",
          "precio": 150.0,
          "artistId": 101
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

---

#### GET (/api/v1/search/artists)
- **Descripción:**  
  Realiza la búsqueda de artistas según criterios como consulta de texto y mínimo de obras realizadas.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `query` (String, opcional): Texto a buscar en los artistas.
    - `minWorksDone` (Integer, opcional): Mínimo número de trabajos realizados para filtrar.
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Artist*.  
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 101,
          "nombre": "Artista Ejemplo",
          "biografia": "Breve biografía...",
          "numeroObras": 15
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 10
      },
      "totalElements": 20,
      "totalPages": 2
    }
    ```

---

#### GET (/api/v1/search/artists/{artistId}/works)
- **Descripción:**  
  Busca las obras (*Work*) asociadas a un artista específico.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `artistId` (Integer): Identificador del artista.
  - **Request Parameters:**  
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Work* filtrados por el artista indicado.  
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 1,
          "titulo": "Obra del Artista",
          "descripcion": "Descripción de la obra",
          "precio": 200.0,
          "artistId": 101
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 10
      },
      "totalElements": 5,
      "totalPages": 1
    }
    ```

---

#### GET (/api/v1/search/all)
- **Descripción:**  
  Realiza una búsqueda global combinada de obras (*Work*) y artistas (*Artist*) utilizando múltiples criterios.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `query` (String, opcional): Texto a buscar en obras y artistas.
    - `minWorksDone` (Integer, opcional): Mínimo número de trabajos realizados para filtrar artistas.
    - `minPrice` (Double, opcional): Precio mínimo para filtrar obras.
    - `maxPrice` (Double, opcional): Precio máximo para filtrar obras.
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos heterogéneos (pueden ser *Artist* o *Work*), según los criterios de búsqueda.  
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 101,
          "nombre": "Artista Ejemplo",
          "biografia": "Breve biografía...",
          "numeroObras": 15
        },
        {
          "id": 1,
          "titulo": "Obra Ejemplo",
          "descripcion": "Descripción de la obra",
          "precio": 150.0,
          "artistId": 101
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 10
      },
      "totalElements": 30,
      "totalPages": 3
    }
    ```
---

### StripeConnectController

#### GET (/api/v1/stripe-account/all)
- **Descripción:**  
  Recupera la lista de todas las cuentas conectadas de Stripe.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Account* de Stripe.  
    _Ejemplo (estructura simplificada):_
    ```json
    [
      {
        "id": "acct_1ABCDEF",
        "object": "account",
        "business_profile": { ... }
      },
      {
        "id": "acct_2ABCDEF",
        "object": "account",
        "business_profile": { ... }
      }
    ]
    ```

---

#### GET (/api/v1/stripe-account/{accountId})
- **Descripción:**  
  Recupera los detalles de una cuenta de Stripe específica, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `accountId` (String): Identificador de la cuenta de Stripe.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena en formato JSON con los detalles de la cuenta, obtenida a partir de `account.toJson()`.  
    _Ejemplo (estructura simplificada):_
    ```json
    {
      "id": "acct_1ABCDEF",
      "object": "account",
      "business_profile": { ... },
      "email": "ejemplo@correo.com"
    }
    ```

---

#### POST (/api/v1/stripe-account/create)
- **Descripción:**  
  Crea una nueva cuenta conectada en Stripe.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se recibe payload en el cuerpo de la solicitud.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena con el identificador (`accountId`) de la cuenta creada.  
    _Ejemplo:_
    ```json
    "acct_3ABCDEF"
    ```

---

#### GET (/api/v1/stripe-account/create-link)
- **Descripción:**  
  Crea un enlace de cuenta (account link) para conectar la cuenta de Stripe, que se utiliza para la activación y configuración del seller.  
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.  
  _Nota:_ No se solicita un `sellerAccountId` ya que se obtiene mediante `findCurrentUser`.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena con la URL del enlace de la cuenta.  
    _Ejemplo:_
    ```json
    "https://connect.stripe.com/setup/s/abc123..."
    ```
---

### WorkController

#### GET (/api/v1/works/{id})
- **Descripción:**  
  Recupera un trabajo específico (*Work*) identificado por su ID.
- **Categoría:**  
  ```No usado```
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del trabajo a recuperar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Work* si se encuentra, o un error 404 si no existe.  
    _Ejemplo:_
    ```json
    {
      "id": 5,
      "titulo": "Título de la obra",
      "descripcion": "Descripción de la obra",
      "precio": 200.0,
      "artistId": 101
    }
    ```

---

### AuthController

#### POST (/api/v1/auth/signin)
- **Descripción:**  
  Autentica a un usuario utilizando las credenciales proporcionadas y devuelve un JWT junto con información del usuario.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *LoginRequest* con los siguientes campos (ejemplo):
    ```json
    {
      "username": "usuarioEjemplo",
      "password": "contraseñaSegura"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *JwtResponse* con el token JWT, el ID del usuario, su nombre de usuario y roles.  
    _Ejemplo:_
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "id": 123,
      "username": "usuarioEjemplo",
      "roles": ["ROLE_USER", "ROLE_ADMIN"]
    }
    ```
  - En caso de credenciales incorrectas, se devuelve un mensaje de error ("Bad Credentials!") con estado 400.

---

#### GET (/api/v1/auth/validate)
- **Descripción:**  
  Valida la validez de un token JWT.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameter:**  
    - `token` (String): El token JWT a validar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Booleano indicando si el token es válido (`true` o `false`).

---

#### POST (/api/v1/auth/signup)
- **Descripción:**  
  Registra un nuevo usuario. La solicitud se envía en formato *multipart/form-data* y consta de una parte JSON con la información del usuario y, opcionalmente, archivos para la imagen de perfil y el precio del tablero de comisiones.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parts:**  
    - `user` (String): Cadena JSON que representa el objeto *SignupRequest*.  
      _Ejemplo:_
      ```json
      {
        "username": "nuevoUsuario",
        "password": "contraseñaSegura",
        "email": "usuario@ejemplo.com",
        "otrosCampos": "..."
      }
      ```
    - `imageProfile` (MultipartFile, opcional): Archivo que contiene la imagen de perfil.
    - `tableCommissionsPrice` (MultipartFile, opcional): Archivo que contiene la imagen del precio del tablero de comisiones.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* con un mensaje de éxito, por ejemplo:  
    ```json
    {
      "message": "User registered successfully!"
    }
    ```
  - En caso de error, se devuelve un mensaje de error apropiado con el código HTTP correspondiente.

---

#### PUT (/api/v1/auth/update)
- **Descripción:**  
  Actualiza la información de un usuario existente. Se espera un objeto *SignupRequest* en el cuerpo de la solicitud.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *SignupRequest* con la información actualizada del usuario.  
    _Ejemplo:_
    ```json
    {
      "username": "usuarioExistente",
      "email": "nuevoemail@ejemplo.com",
      "otrosCampos": "..."
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* con un mensaje indicando que la actualización fue exitosa, por ejemplo:  
    ```json
    {
      "message": "User updated successfully!"
    }
    ```

---

#### DELETE (/api/v1/auth/delete/{id})
- **Descripción:**  
  Elimina un usuario identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path/Request Parameter:**  
    - `id` (Long): Identificador del usuario a eliminar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* confirmando la eliminación, por ejemplo:  
    ```json
    {
      "message": "User deleted successfully!"
    }
    ```
---

### ReportController

#### GET (/api/v1/reports/admin)
- **Descripción:**  
  Recupera la lista completa de reportes, destinado para el administrador.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Report*.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 1,
        "motivo": "Contenido inapropiado",
        "descripcion": "El contenido viola las normas.",
        "estado": "Pendiente"
      },
      {
        "id": 2,
        "motivo": "Spam",
        "descripcion": "Publicación repetitiva de anuncios.",
        "estado": "Pendiente"
      }
    ]
    ```
- **Notas:**  
  En caso de error, se devuelven mensajes de error apropiados con códigos HTTP 400 o 500.

---

#### POST (/api/v1/reports)
- **Descripción:**  
  Crea un nuevo reporte utilizando los datos proporcionados en un objeto *ReportDTO*.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *ReportDTO* que contiene la información del reporte.  
    _Ejemplo:_
    ```json
    {
      "motivo": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "reportadoId": 45,
      "tipo": "Usuario"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* creado, con todos los campos asignados (incluyendo el identificador generado).  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "motivo": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "estado": "Pendiente",
      "reportadoId": 45,
      "tipo": "Usuario"
    }
    ```

---

#### PUT (/api/v1/reports/admin/accept/{id})
- **Descripción:**  
  Acepta un reporte específico, cambiando su estado a aceptado.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a aceptar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* actualizado, reflejando el nuevo estado (aceptado).  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "motivo": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "estado": "Aceptado",
      "reportadoId": 45,
      "tipo": "Usuario"
    }
    ```

---

#### PUT (/api/v1/reports/admin/reject/{id})
- **Descripción:**  
  Rechaza un reporte específico, cambiando su estado a rechazado.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a rechazar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* actualizado, reflejando el nuevo estado (rechazado).  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "motivo": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "estado": "Rechazado",
      "reportadoId": 45,
      "tipo": "Usuario"
    }
    ```

---

#### DELETE (/api/v1/reports/admin/delete/{id})
- **Descripción:**  
  Elimina un reporte específico, destinado para el administrador.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena.  
    _Ejemplo:_
    ```json
    "Reporte eliminado correctamente."
    ```

---

#### GET (/api/v1/reports/types)
- **Descripción:**  
  Recupera la lista de tipos de reportes disponibles.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *ReportType*.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 1,
        "nombre": "Contenido inapropiado"
      },
      {
        "id": 2,
        "nombre": "Spam"
      }
    ]
    ```

---

#### POST (/api/v1/reports/admin/types)
- **Descripción:**  
  Añade un nuevo tipo de reporte.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *ReportType* con la información del tipo de reporte a agregar.  
    _Ejemplo:_
    ```json
    {
      "nombre": "Fraude"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *ReportType* creado, que incluye el identificador generado.  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "nombre": "Fraude"
    }
    ```
---

### ArtistRestController

#### GET (/api/v1/artists/{id})
- **Descripción:**  
  Recupera la información de un artista específico, identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del artista.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Artist* con la información del artista.  
    _Ejemplo:_
    ```json
    {
      "id": 101,
      "username": "artistaEjemplo",
      "nombre": "Nombre del Artista",
      "biografia": "Breve descripción...",
      "email": "artista@ejemplo.com"
    }
    ```

---

#### DELETE (/api/v1/artists/administrator/artists/{id})
- **Descripción:**  
  Elimina un artista identificado por su ID. Esta operación está destinada al uso del administrador.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del artista a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena, o mensaje de error en caso de fallo.  
    _Ejemplo (éxito):_
    ```json
    "Cliente eliminado exitosamente"
    ```

---

#### GET (/api/v1/artists/username/{username})
- **Descripción:**  
  Recupera la información de un artista basado en su nombre de usuario.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `username` (String): Nombre de usuario del artista.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Artist* con la información correspondiente.  
    _Ejemplo:_
    ```json
    {
      "id": 101,
      "username": "artistaEjemplo",
      "nombre": "Nombre del Artista",
      "biografia": "Breve descripción...",
      "email": "artista@ejemplo.com"
    }
    ```
---

### PaymentController

#### GET (/api/v1/payment/{paymentIntentId})
- **Descripción:**  
  Recupera la información de un PaymentIntent de Stripe identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `paymentIntentId` (String): Identificador del PaymentIntent.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena JSON representando el PaymentIntent, utilizando `paymentIntent.toJson()`.  
    _Ejemplo:_
    ```json
    {
      "id": "pi_1H8XYZ",
      "object": "payment_intent",
      "status": "succeeded",
      "amount": 5000,
      "currency": "usd"
    }
    ```

---

#### GET (/api/v1/payment/all)
- **Descripción:**  
  Recupera una colección de PaymentIntents.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena JSON representando la colección de PaymentIntents, utilizando `paymentIntents.toJson()`.  
    _Ejemplo:_
    ```json
    {
      "object": "list",
      "data": [
        {
          "id": "pi_1H8XYZ",
          "status": "succeeded",
          "amount": 5000,
          "currency": "usd"
        },
        {
          "id": "pi_1H8ABC",
          "status": "requires_payment_method",
          "amount": 3000,
          "currency": "usd"
        }
      ]
    }
    ```

---

#### POST (/api/v1/payment/create/{commissionId})
- **Descripción:**  
  Crea un nuevo PaymentIntent para una comisión específica.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Body:**  
    - Objeto *PaymentDTO* con los detalles necesarios para crear el PaymentIntent.  
      _Ejemplo:_
      ```json
      {
        "amount": 5000,
        "currency": "usd",
        "description": "Pago para comisión 123"
      }
      ```
  - **Path Variable:**  
    - `commissionId` (long): Identificador de la comisión para la cual se crea el pago.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena que representa el PaymentIntent creado (por ejemplo, su ID o su representación JSON).  
    _Ejemplo:_
    ```json
    "pi_1H8XYZ"
    ```

---

#### POST (/api/v1/payment/confirm)
- **Descripción:**  
  Confirma un PaymentIntent utilizando su ID y un método de pago.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `paymentIntentId` (String): Identificador del PaymentIntent a confirmar.
    - `paymentMethod` (String): Método de pago que se usará para la confirmación.
  _Ejemplo de URL:_  
  `/api/v1/payment/confirm?paymentIntentId=pi_1H8XYZ&paymentMethod=pm_card_visa`
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena JSON representando el PaymentIntent confirmado, utilizando `paymentIntent.toJson()`.  
    _Ejemplo:_
    ```json
    {
      "id": "pi_1H8XYZ",
      "status": "succeeded",
      "amount": 5000,
      "currency": "usd"
    }
    ```

---

#### POST (/api/v1/payment/cancel)
- **Descripción:**  
  Cancela un PaymentIntent utilizando su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Request Parameter:**  
    - `paymentIntentId` (String): Identificador del PaymentIntent a cancelar.
  _Ejemplo de URL:_  
  `/api/v1/payment/cancel?paymentIntentId=pi_1H8XYZ`
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena JSON representando el PaymentIntent cancelado, utilizando `paymentIntent.toJson()`.  
    _Ejemplo:_
    ```json
    {
      "id": "pi_1H8XYZ",
      "status": "canceled",
      "amount": 5000,
      "currency": "usd"
    }
    ```
---

### CategoryRestController

#### GET (/api/v1/categories)
- **Descripción:**  
  Recupera la lista de todas las categorías disponibles.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Category*.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 1,
        "nombre": "Pintura",
        "descripcion": "Categoría de obras de pintura"
      },
      {
        "id": 2,
        "nombre": "Escultura",
        "descripcion": "Categoría de obras escultóricas"
      }
    ]
    ```

---

#### GET (/api/v1/categories/{id})
- **Descripción:**  
  Recupera la información de una categoría específica, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la categoría.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Category*.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Pintura",
      "descripcion": "Categoría de obras de pintura"
    }
    ```

---

#### GET (/api/v1/categories/administrator/categories)
- **Descripción:**  
  Recupera la lista completa de categorías para el administrador.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Category*.  
    _Ejemplo:_
    ```json
    [
      {
        "id": 1,
        "nombre": "Pintura",
        "descripcion": "Categoría de obras de pintura"
      },
      {
        "id": 2,
        "nombre": "Escultura",
        "descripcion": "Categoría de obras escultóricas"
      }
    ]
    ```

---

#### POST (/api/v1/categories/administrator/categories)
- **Descripción:**  
  Crea una nueva categoría.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *Category* con los datos de la nueva categoría.  
    _Ejemplo:_
    ```json
    {
      "nombre": "Fotografía",
      "descripcion": "Categoría de obras fotográficas"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Category* creado, incluyendo el identificador asignado.  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "nombre": "Fotografía",
      "descripcion": "Categoría de obras fotográficas"
    }
    ```

---

#### PUT (/api/v1/categories/administrator/categories/{id})
- **Descripción:**  
  Actualiza la información de una categoría existente, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la categoría a actualizar.
  - **Payload JSON:** Objeto *Category* con la información actualizada.  
    _Ejemplo:_
    ```json
    {
      "nombre": "Pintura Moderna",
      "descripcion": "Categoría de obras de pintura moderna"
    }
    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Category* actualizado.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Pintura Moderna",
      "descripcion": "Categoría de obras de pintura moderna"
    }
    ```

---

#### DELETE (/api/v1/categories/administrator/categories/{id})
- **Descripción:**  
  Elimina una categoría existente, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la categoría a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena.  
    _Ejemplo:_
    ```json
    "Categoría eliminada exitosamente"
    ```

---

### ClientRestController

#### GET (/api/v1/users/{id})
- **Descripción:**  
  Recupera la información de un cliente específico, identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del cliente.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Client* con la información del cliente.  
    _Ejemplo:_
    ```json
    {
      "id": 123,
      "nombre": "Cliente Ejemplo",
      "email": "cliente@ejemplo.com",
      "rol": "CLIENT"
    }
    ```

---

#### GET (/api/v1/users/profile)
- **Descripción:**  
  Recupera el perfil del usuario actual. Según los roles asignados, se devuelve la información correspondiente de un cliente o de un artista.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - No se requieren parámetros explícitos (se utiliza la autenticación para identificar al usuario actual).
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto con la información del perfil, que puede ser de tipo *Client* o *Artist*.  
    _Ejemplo para un cliente:_
    ```json
    {
      "id": 123,
      "nombre": "Cliente Ejemplo",
      "email": "cliente@ejemplo.com",
      "rol": "CLIENT"
    }
    ```  
    - En caso de error (por ejemplo, si el usuario no está autenticado), se devuelve un mensaje de error:
    ```json
    "No tienes perfil, tienes que loguearte"
    ```

---

#### DELETE (/api/v1/users/administrator/clients/{id})
- **Descripción:**  
  Elimina un cliente específico, identificado por su ID. Esta operación está destinada para uso del administrador.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del cliente a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena si la eliminación es exitosa.  
    _Ejemplo:_
    ```json
    "Cliente eliminado exitosamente"
    ```  
  - En caso de error, se devuelve un mensaje descriptivo, por ejemplo:
    ```json
    "No se puede eliminar el cliente porque tiene registros relacionados en otras partes del sistema."
    ```


## Metodología de trabajo

1. **Comunicación Inicial:**  
   El **Frontend** comunica detalladamente las necesidades de datos y funcionalidades requeridas.

2. **Diseño del DTO (Data Transfer Object):**  
   El **Backend** elabora un primer borrador del DTO y lo envía al **Frontend** para su revisión y aprobación.

3. **Desarrollo e Implementación:**  
   Una vez aprobado el DTO, el **Backend** implementa la funcionalidad y se realizan pruebas informales para asegurar el correcto funcionamiento.

4. **Revisión de Datos:**  
   Se verifica que no se envíe información innecesaria o sensible y que el **Frontend** no envíe datos redundantes (por ejemplo, el ID del usuario cuando ya se puede obtener mediante `findCurrentUser`).

5. **Entrega y Ajustes:**  
   Se entrega la funcionalidad al **Frontend** para su integración y se recogen comentarios para realizar ajustes si fuese necesario.

De WORKsdone: id de work, imagen del work, nombre del work, usarname del artista asociado y descripcion