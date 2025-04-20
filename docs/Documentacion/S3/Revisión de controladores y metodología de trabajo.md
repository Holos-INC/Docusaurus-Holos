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
**Versión:** v1.2

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
| v1.0    | 29/03/2025  | Creación del documento.        | Nerea Jiménez Adorna |
| v1.1    | 30/03/2025  | Análisis de más endpoints       | Nerea Jiménez Adorna |
| v1.2    | 31/03/2025  | Corrección de datos mal añadidos | José María Portela Huerta |

## Índice

- [Introducción](#introducción)
- [Análisis de endpoints](#análisis-de-endpoints)
  - [WorksDoneController](#worksdonecontroller)
  - [MilestoneController](#milestonecontroller)
  - [StatusKanbanOrderController](#statuskanbanordercontroller)
  - [CommisionController](#commisioncontroller)
  - [SearchController](#searchcontroller)
  - [StripeConnectController](#stripeconnectcontroller)
  - [WorkController](#workcontroller)
  - [AuthController](#authcontroller)
  - [ReportController](#reportcontroller)
  - [ArtistRestController](#artistrestcontroller)
  - [PaymentController](#paymentcontroller)
  - [CategoryRestController](#categoryrestcontroller)
  - [ClientRestController](#clientrestcontroller)
- [Metodología de trabajo](#metodología-de-trabajo)

---

## Introducción

En este apartado se documentarán todos los controladores actuales organizados por clases. Para cada controlador se debe incluir:

- **Nombre del controlador / Clase y su ruta**
- **Descripción:** 
- **Métodos implementados:** GET, POST, PUT, DELETE.
- **Categoría de la llamada:**  
  - **Bien hecha**  Dejar tal y como está (a priori) a no ser que las necesidades del equipo cambien.
  - **A eliminar**  No sirve para nada.
  - **A corregir**  Tiene errores o necesita un DTO.
  - **No usado**  No se usa pero se intuye que se usará en el futuro.
- **Datos que reciben:** 
  - Si erróneamente reciben datos innecesarios como ids del usuario se indicará.
- **Datos que devuelven:**
  - Si es necesario usar un DTO, se mostrará un JSON con los datos necesarios.

Este documento se irá editando conforme a las necesidades del equipo.

### Formar DTOs:

Por simplicidad al crear DTOs, y usarlos, es adecuado realizarlos con el siguiente formato:

- SIEMPRE el uso de @Getter
- OPCIONAL el uso de @AllArgsConstructor y @NoArgsConstructor, dependiendo de si se inserta directamente en las queries la DTO, con todos o ningún argumento los constructores.
- Se crea la clase normal, con todos sus **atributos privados**
- Se crea un método de la clase _sin static_, con el cuál, a partir de la DTO, se puede crear directamente lo que devuelve. Ej: De un statusKanbanDTO, que recibe el controlador, obtener el objeto de BBDD con `statusKanbanDTO.createStatusKanbanOrder()`.
- Se crea un método de la clase _con static_ y _con parámetro de entrada el objeto del que hace DTO_ para que se pueda crear directamente el DTO. Ej: Dado un statusKanban, que se recibe de algún sitio, obtener el DTO con `StatusKanbanDTO.createDTO(statusKanban)`.

```
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatusKanbanDTO {

    private Long id;
    
    private String name;

    private Integer order;

    private String description;

    private String color;

    public StatusKanbanOrder createStatusKanbanOrder() {
        StatusKanbanOrder statusKanban = new StatusKanbanOrder();
        statusKanban.setName(this.getName());
        statusKanban.setOrder(this.getOrder());
        statusKanban.setDescription(this.getDescription());
        statusKanban.setColor(this.getColor());
        return statusKanban;
    }

    public static StatusKanbanDTO createDTO(StatusKanbanOrder statusKanban) {
        StatusKanbanDTO dto = new StatusKanbanDTO();
        dto.setId(statusKanban.getId());
        dto.setName(statusKanban.getName());
        dto.setOrder(statusKanban.getOrder());
        dto.setDescription(statusKanban.getDescription());
        dto.setColor(statusKanban.getColor());
        return dto;
    }
}
```

---

## Análisis de endpoints

### WorksDoneController

#### POST (/api/v1/worksdone)
- **Descripción:**  
  Crea un nuevo registro de *WorksDone*.
- **Categoría:**  
  No usado/Usar a futuro
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):** Objeto *WorksDone* con los campos necesarios para la creación.  
    - **DTO a discutir con frontend.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *WorksDone* creado, incluyendo el identificador generado y los datos enviados. 
    - **DTO a discutir con frontend.**

---

#### GET (/api/v1/worksdone)
- **Descripción:**  
  Recupera la lista completa de registros de *WorksDone*.
- **Categoría:**  
  A modificar. A esto hay que darle una vuelta.
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
        "name": "Titulo de la obra",
        "description": "Descripción de la obra",
        "artist": {
          "id": 123,
          "imageProfile": [
            "string"
          ],
          "username": "artist1"
        },
        "image": [
          "string"
        ]
      },
      ... (Igual que el de arriba, que es el DTO base de la lista de objetos)
    ]
    ```

---

#### GET (/api/v1/worksdone/id)
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
                ]
    }
    ```

---

#### PUT (/api/v1/worksdone/artist/artistId/worksDoneId)
- **Descripción:**  
  Actualiza un registro de *WorksDone* específico, vinculado a un artista. Se verifica previamente que el registro existe.
- **Categoría:**  
  No usado/Usar a futuro/A modificar
- **Datos que reciben:**  
  - **Path Variables:**  
    - `artistId` (Long): Identificador del artista. **A MODIFICAR: Usar *findCurrentUser*.** Y quitar esto de la ruta.
    - `worksDoneId` (Long): Identificador del registro de *WorksDone* a actualizar.
  - **Payload JSON (RequestBody):** Objeto *WorksDone* actualizado.  
    - **DTO a discutir con frontend.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *WorksDone* actualizado con los datos modificados. Quizá es mejor no devolver nada.

---

### MilestoneController

Todo en esta categoría está aún sin usar, por lo que no se saben las necesidades de front aún.

#### POST (/api/v1/milestones/milestone)
- **Descripción:**  
  Crea un nuevo (*Milestone*).
- **Categoría:**  
  No usado.
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):** Objeto *Milestone* con los campos necesarios para la creación.  
      - **DTO a discutir con frontend.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* creado, que incluye el identificador generado y los datos enviados.  
    - **DTO a discutir con frontend.**

---

#### GET (/api/v1/milestones/milestone/id)
- **Descripción:**  
  Recupera un (*Milestone*) específico, identificado por su ID.
- **Categoría:**  
  No usado.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del milestone.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* si se encuentra, o un error 404 si no existe.  
    - **DTO a discutir con frontend.**

---

#### GET (/api/v1/milestones/milestones/commision/commision_id)
- **Descripción:**  
  Recupera la lista de hitos (*Milestones*) asociados a una comisión, identificada por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `commision_id` (Long): Identificador de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Milestone* asociados a la comisión.  
    - **DTO a discutir con frontend.**

---

#### DELETE (/api/v1/milestones/milestone/id)
- **Descripción:**  
  Elimina un hito (*Milestone*) identificado por su ID.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del milestone a eliminar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Milestone* eliminado o confirmación de eliminación.  
    - **DTO/Respuesta a discutir con frontend.**

---

### StatusKanbanOrderController

#### POST (/api/v1/status-kanban-order)
- **Descripción:**  
  Añade un nuevo estado al Kanban.
- **Categoría:**  
  A modificar/No usado
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):**  Debería recibir un objeto StatusKanbanOrder y no por parámetros. El objeto debe incluir:
    - `color` (String): Color del estado.
    - `description` (String): Descripción del estado.
    - `nombre` (String): Nombre del estado.
    - `artistId` (Integer): ESTO NO, HACER CON `findCurrentUser`.
    - `order` (Integer): TAMPOCO, CALCULAR AUTOMÁTICAMENTE LA ÚLTIMA POSICIÓN CONTANDO EL NÚMERO DE STATUSKANBAN +1.
  - **Nota**: al copiar los datos, se puede hacer un DTO con lo de arriba, siempre y cuando luego se ignore tanto el artistId y order de lo que venga del frontend. Para reducir DTOs.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* en formato DTO creado.  
    - **DTO a discutir con frontend.**

---

#### PUT (/api/v1/status-kanban-order/update)
- **Descripción:**  
  Actualiza el estado Kanban con la información enviada en el cuerpo de la solicitud.
- **Categoría:**  
  No usado, cambiar el método con validaciones.
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):** Objeto *StatusKanbanOrder* con todos los campos necesarios para la actualización.  
    - **DTO a discutir con frontend. Aunque existe un StatusKanbanOrderDTO, comprobar si es adecuado para este método.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* en formato DTO actualizado. Quizá es mejor no devolver nada.

---

#### PUT (/api/v1/status-kanban-order/id/updateKanban)
- **Descripción:**  
  Actualiza atributos específicos (color, descripción y nombre) del estado Kanban identificado por su ID.
- **Categoría:**  
  No usado. Parece que duplica el anterior. A eliminar.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado.
  - **Payload JSON (RequestBody):** Objeto *StatusKanbanOrder* con los nuevos valores para color, descripción y nombre.  
    - **DTO a discutir con frontend. Aunque existe un StatusKanbanOrderDTO, comprobar si es adecuado para este método.**
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* en formato DTO con los atributos actualizados.  Quizá es mejor no devolver nada.

---

#### PUT (/api/v1/status-kanban-order/id/updateKanbanOrder)
- **Descripción:**  
  Actualiza el orden del estado Kanban identificado por su ID.
- **Categoría:**  
  No usado. Investigar si se va a usar para algo.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado.
  - **Payload JSON (RequestBody):** Un número entero que representa el nuevo orden.  
    _Ejemplo:_
    ```json
    4

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* en formato DTO actualizado con el nuevo orden. Quizá es mejor no devolver nada.

---

#### DELETE (/api/v1/status-kanban-order/id)
- **Descripción:**  
  Elimina el estado Kanban identificado por su ID.
- **Categoría:**  
  No usada. Se usará.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Integer): Identificador del estado a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Sin contenido (operación void o confirmación mediante código HTTP 200).

---

#### GET (/api/v1/status-kanban-order)
- **Descripción:**  
  Recupera todos los estados Kanban asociados a un artista, junto con las comisiones.  
- **Categoría:**  
  Bien hecha.
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Un objeto (Pair) que contiene dos listas: una de *StatusKanbanDTO* y otra de *StatusKanbanWithCommisionsDTO*. Swagger no se lleva bien con Pair así que no sabe representarlo, ¿quizá con un DTO para englobar las dos listas? O colocar un @Operation.
    _Ejemplo (estructura sugerida):_
    ```json
        {
        "first": [
          {
            "id": 1,
            "name": "Boceto",
            "order": 1,
            "description": "Etapa inicial del pedido",
            "color": "#FF5733"
          },
          {
            "id": 2,
            "name": "Línea",
            "order": 2,
            "description": "Líneas finalizadas",
            "color": "#33C1FF"
          }
        ],
        "second": [
          {
            "id": 10,
            "name": "Nosequeponer",
            "description": "Coloreado terminado",
            "price": 75.5,
            "paymentArrangement": "MEDIADOR",
            "statusKanbanName": "Color",
            "clientUsername": "emilio"
          }
        ]
      }
    ```
  - Si se llega a implementar por DTO, cambiar nombre de first y second por algo más legible, y avisar a Frontend para que realice los cambios de nombre.

---

#### PUT (/api/v1/status-kanban-order/id/next)
- **Descripción:**  
  Avanza el estado de una comisión al siguiente estado Kanban, utilizando el ID proporcionado.
- **Categoría:**  
  A actualizar. Devuelve un objeto commission, pero para un put no es necesario, incluso si lo fuera, habría que devolver un DTO.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado actual o de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado tras avanzar de estado.  

---

#### PUT (/api/v1/status-kanban-order/id/previous)
- **Descripción:**  
  Retrocede el estado de una comisión al estado anterior en el Kanban, utilizando el ID proporcionado.
- **Categoría:**  
  A actualizar. Devuelve un objeto commission, pero para un put no es necesario, incluso si lo fuera, habría que devolver un DTO.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Long): Identificador del estado actual o de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado tras retroceder de estado. 

---

#### GET (/api/v1/status-kanban-order/id)
- **Descripción:**  
  Recupera un estado Kanban específico, identificado por su ID.
- **Categoría:**  
  No usada. Debe devolver un DTO y no el objeto. Sirve para cuando queramos actualizar los datos de un statusKanban.
- **Datos que reciben:**  
  - **Path Variable:** `id` (Integer): Identificador del estado Kanban.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *StatusKanbanOrder* en formato DTO si se encuentra, o un error en caso de no hallarlo.  

---

### CommisionController

Antes de entrar en esta parte, comentar cómo se gestionarán los distintos estados en los que se encontrará una comisión, con un diagrama de estados:

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Estados_pedido_comision.png" alt="Estados de una comisión" width="750"/>
</p>

#### POST (/api/v1/commisions/artistId)
- **Descripción:**  
  Crea una nueva comisión para un artista específico.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `artistId` (Long): Identificador del artista al que se asignará la comisión.
  - **Payload JSON (RequestBody):** Objeto *CommisionRequestDTO* con los campos necesarios para la creación de la comisión.  
    _Ejemplo (estructura genérica):_
    ```
    {
      "name": "Retrato estilo anime",
      "description": "Un retrato de busto en estilo anime, con fondo sencillo.",
      "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...", 
      "milestoneDate": "2025-04-10T00:00:00.000Z",
      "price": 45.99
    }

    ```
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* creado, que incluye el identificador generado y los datos enviados. 
  - **DTO necesario:** 
    _Modificar ofreciendo un DTO que tenga: (Confirmar con front por si acaso, creo que sería el mismo que para el GET por id)_
    ```
    {
      "id": 1,
      "price": 33,
      "description": "uhuweujcnjkeh",
      "name": "aaa",
      "artistUsername": "yellow"
    }
    ``` 


---

#### PUT (/api/v1/commisions/commisionId/requestChanges)
- **Descripción:**  
  Solicita cambios en una comisión existente.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `commisionId` (Long): Identificador de la comisión a modificar.
  - **Payload JSON:** Objeto *CommisionDTO* con los nuevos datos o cambios solicitados.  
    _Ejemplo:_
    ```json
        {
      "name": "Retrato digital a color",
      "description": "Ilustración de personaje completo en estilo semirrealista.",
      "price": 60.0,
      "paymentArrangement": "FIFTY_FIFTY",
      "image": "iVBORw0KGgoAAAANSUhEUgAAAAUA...", 
      "milestoneDate": "2025-04-15T00:00:00.000Z"
    }

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con los cambios solicitados. No sé si es necesario que este put devuelva nada.
    - **DTO necesario:** 
    _Modificar ofreciendo un DTO que tenga: (Confirmar con front por si acaso, creo que sería el mismo que para el GET por id)_
    ```json
    {
      "id": 1,
      "price": 33,
      "description": "uhuweujcnjkeh",
      "name": "aaa",
      "artistUsername": "yellow"
    }

---

#### GET (/api/v1/commisions)
- **Descripción:**  
  Recupera la lista completa de comisiones.
- **Categoría:**  
  No se usa. Eliminar.
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Commision*. Quizá debería devolver DTOs. 

---

#### GET (/api/v1/commisions/requested)
- **Descripción:**  
  Recupera la lista de comisiones que han solicitado cambios.
- **Categoría:**  
  No se usa por parte del Frontend. Sirve para la parte de solicitud de una comisión de un artista o cliente, según se esté logueado. Para la parte de encargos pedidos o con modificaciones de estos. Pero mejor usar los servicios de este en el siguiente endpoint, y quedarnos con el endpoint más descriptivo para la tarea, que servirá tanto para artistas como clientes.
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Commision* con estado "requested" o similar. Quizá debería devolver DTOs.

---

#### GET (/api/v1/commisions/clientRequested)
- **Descripción:**  
  Recupera la lista de comisiones solicitadas por clientes, formateadas como *ClientCommissionDTO*.
- **Categoría:**  
  Bien hecha, pero a mejorar.
- **Datos que reciben:**  
  - No requiere parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *ClientCommissionDTO* con la información relevante para clientes y artistas. requested tiene los estados REQUESTED, WAITING_ARTIST y WAITING_CLIENT. accepted es que está Aceptado, con su kanban y demás, `Ya implementado adecuadamente`. Y el resto de estados se encuentran en history.
    _Ejemplo:_
    ```json
    {
      "requested": [
        {
          "id": 1,
          "name": "string",
          "description": "string",
          "price": 0,
          "status": "REQUESTED",
          "paymentArrangement": "FIFTY_FIFTY",
          "milestoneDate": 2025-04-11,
          "artistUsername": "artist1",
          "clientUsername": "client1",
          "image": [
            "string"
          ]
        },...
      ],
      "accepted": [
        {
          "name": "string",
          "artistUsername": "string",
          "currentStep": 0,
          "totalSteps": 0,
          "image": [
            "string"
          ]
        },...
      ],
      "history": [
        {
          "id": 1,
          "name": "string",
          "description": "string",
          "price": 0,
          "status": "NOT_PAID_YET",
          "paymentArrangement": "FIFTY_FIFTY",
          "milestoneDate": 2025-04-11,
          "artistUsername": "artist1",
          "clientUsername": "client1",
          "image": [
            "string"
          ]
        },...
      ]
    }

---

#### GET (/api/v1/commisions/id)
- **Descripción:**  
  Recupera una comisión específica, identificada por su ID.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* si se encuentra, o un error 404 si no existe.
  - **DTO necesario:** 
    _Modificar ofreciendo un DTO que tenga:_
    ```json
    {
      "id": 1,
      "name": "string",
      "description": "uhuweujcnjkeh",
      "price": 33,
      "artistUsername": "yellow",
      "status": "REQUESTED",
      "paymentArrangement": "FIFTY_FIFTY",
      "milestoneDate": 2025-04-11,
      "clientUsername": "client1",
      "image": [
        "string"
      ]

---

#### PUT (/api/v1/commisions/id/status)
- **Descripción:**  
  Actualiza el estado de una comisión según la aceptación (aprobación o rechazo) enviada como parámetro.
- **Categoría:**  
  No se usa. A eliminar.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
  - **Request Parameter:**  
    - `accept` (boolean): Indicador de aprobación (`true`) o rechazo (`false`).
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado. 
    - Si tiene que devolver algo, que devuelva un DTO como el de los anteriores o consultar con frontend.

---

#### PUT (/api/v1/commisions/commisionId/reject)
- **Descripción:**  
  Actualiza el estado de una comisión rechazándola.
- **Categoría:**  
  No está hecho. Implementar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado. 
    - Si tiene que devolver algo, que devuelva un DTO como el de los anteriores o consultar con frontend.

---

#### PUT (/api/v1/commisions/commisionId/waiting)
- **Descripción:**  
  Actualiza el estado de una comisión a espera de confirmación de la otra parte.
- **Categoría:**  
  No está hecho. Implementar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
  - **Payload JSON (Request body):**
    ```json
    {
      "id": 1,
      "name": "string",
      "description": "string",
      "price": 0,
      "status": "WAITING_CLIENT",
      "paymentArrangement": "FIFTY_FIFTY",
      "milestoneDate": 2025-04-11,
      "artistUsername": "artist1",
      "clientUsername": "client1",
      "image": [
        "string"
      ]
    }

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado. 
    - Si tiene que devolver algo, que devuelva un DTO como el de los anteriores o consultar con frontend.

**NOTA**: No es necesario el status, pues este dato debemos cambiarlo nosotros automáticamente desde el propio backend, para evitar hackeos. Está añadido para usar un DTO común, más cómodo que varios distintos.

---

#### PUT (/api/v1/commisions/commisionId/toPay)
- **Descripción:**  
  Actualiza el estado de una comisión siendo la confirmación de la otra parte de estar en de acuerdo.
- **Categoría:**  
  No está hecho. Implementar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
  - **Payload JSON (Request body):**
    ```json
    {
      "id": 1,
      "name": "string",
      "description": "string",
      "price": 0,
      "status": "NOT_PAID_YET",
      "paymentArrangement": "FIFTY_FIFTY",
      "milestoneDate": 2025-04-11,
      "artistUsername": "artist1",
      "clientUsername": "client1",
      "image": [
        "string"
      ]
    }

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado. 
    - Si tiene que devolver algo, que devuelva un DTO como el de los anteriores o consultar con frontend.

**NOTA**: No es necesario el status, pues este dato debemos cambiarlo nosotros automáticamente desde el propio backend, para evitar hackeos. Está añadido para usar un DTO común, más cómodo que varios distintos.

---

#### PUT (/api/v1/commisions/commisionId/accept)
`PLANTEARNOS SI SE DEBERÍA HACER AUTOMÁTICO JUNTO AL PAGO`
- **Descripción:**  
  Actualiza el estado de una comisión a IN_WAIT_LIST o ACCEPTED, dependiendo de cómo de libre por los slots esté el artista. Existe un método fácil para calcular si hay huecos y demás.
- **Categoría:**  
  No está hecho. Implementar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a actualizar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Commision* actualizado con el nuevo estado. 
    - Si tiene que devolver algo, que devuelva un DTO como el de los anteriores o consultar con frontend.

**NOTA**: No es necesario el status, pues este dato debemos cambiarlo nosotros automáticamente desde el propio backend, para evitar hackeos. Está añadido para usar un DTO común, más cómodo que varios distintos.

---

#### PUT (/api/v1/commisions/cancel/id)
- **Descripción:**  
  Cancela una comisión, verificando el identificador del cliente. IMPORTANTE: Si la comisión está en IN_WAIT_LIST, se devuelve todo el dinero al cliente, pero si ya se ha pasado a ACCEPTED, se sigue el proceso habitual según el método de pago.
- **Categoría:**  
  No se usa, pero lo mismo que para el anterior. A editar igualmente.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador de la comisión a cancelar.
  - **Request Parameter:**  
    - `clientId` (Long): Identificador del cliente que solicita la cancelación. **Debería usar findCurrentUser()**
- **Datos que devuelven:**  
  - **Respuesta:**  
    Un mensaje confirmando la cancelación, por ejemplo:  
    ```json
    "Comisión cancelada correctamente."

---

### SearchController

#### GET (/api/v1/search/works)
- **Descripción:**  
  Realiza la búsqueda de obras (*Work*) en función de parámetros como consulta de texto y rango de precios.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `query` (String, opcional): Texto a buscar en las obras.
    - `minPrice` (Double, opcional): Precio mínimo para filtrar.
    - `maxPrice` (Double, opcional): Precio máximo para filtrar.
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Work*. 
  - **Debería devolver Page de DTOs tal que tengan los atributos:** id, image, name, artistUsername, description
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 1,
          "name": "Obra Ejemplo",
          "descripcion": "Descripción de la obra",
          "image": "ixdwjeicjewcjikejmjckejmjmcojmk", //No sé cómo se ve una imagen en un DTO
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

---

#### GET (/api/v1/search/artists)
- **Descripción:**  
  Realiza la búsqueda de artistas según criterios como consulta de texto y mínimo de obras realizadas.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Request Parameters:**  
    - `query` (String, opcional): Texto a buscar en los artistas.
    - `minWorksDone` (Integer, opcional): Mínimo número de trabajos realizados para filtrar.
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Artist*.  
  - **Debería devolver Page de DTOs tal que tengan los atributos:** id(de artista), username (de artista), profilePic (de artista)
    _Ejemplo:_
    ```json
    {
      "content": [
        {
          "id": 1,
          "username": "yellow",
          "profilePic": "lkxdwesdxcnlknklwejl" //imagen
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 10
      },
      "totalElements": 50,
      "totalPages": 5
    }

---

#### GET (/api/v1/search/artists/artistId/works)
- **Descripción:**  
  Busca las obras (*Work*) asociadas a un artista específico.
- **Categoría:**  
  No se usa
- **Datos que reciben:**  
  - **Path Variable:**  
    - `artistId` (Integer): Identificador del artista.
  - **Request Parameters:**  
    - `page` (int, opcional, default: 0): Número de página.
    - `size` (int, opcional, default: 10): Tamaño de la página.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Página (*Page*) de objetos *Work* filtrados por el artista indicado.  
  - **No se usa así que devolver Page de DTO que necesite el frontend en caso de que se use.**

---

#### GET (/api/v1/search/all)
- **Descripción:**  
  Realiza una búsqueda global combinada de obras (*Work*) y artistas (*Artist*) utilizando múltiples criterios.
- **Categoría:**  
  No se usa
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
  - **Devolver Pages de los DTOs pertinentes si es que se va a usar este método.**
---

### StripeConnectController

En sí la parte de Stripe no estoy segura de cómo se gestiona. Hay que tener mucho cuidado.

#### GET (/api/v1/stripe-account/all)
- **Descripción:**  
  Recupera la lista de todas las cuentas conectadas de Stripe.
- **Categoría:**  
  No se usa, ¿quizá para admin?
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

---

#### GET (/api/v1/stripe-account/accountId)
- **Descripción:**  
  Recupera los detalles de una cuenta de Stripe específica, identificada por su ID.
- **Categoría:**  
  No se usa. Hablar con Joaquín para ver cómo se usa.
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

---

#### POST (/api/v1/stripe-account/create)
- **Descripción:**  
  Crea una nueva cuenta conectada en Stripe.
- **Categoría:**  
  Bien hecha. 
- **Datos que reciben:**  
  - No se recibe payload en el cuerpo de la solicitud.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena con el identificador (`accountId`) de la cuenta creada.  
    _Ejemplo:_
    ```json
    "acct_3ABCDEF"

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

---

### WorkController

#### GET (/api/v1/works/id)
- **Descripción:**  
  Recupera un trabajo específico (*Work*) identificado por su ID.
- **Categoría:**  
  No se usa
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del trabajo a recuperar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Work* si se encuentra, o un error 404 si no existe. 
  - **DTO a discutir con frontend.**

---

### AuthController

**Por favor, hay que tener mucho cuidado con esta parte.**

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
 
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *JwtResponse* con el token JWT, el ID del usuario, su nombre de usuario y rol.  
    _Ejemplo:_
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "id": 123,
      "username": "usuarioEjemplo"
    }

  - En caso de credenciales incorrectas, se devuelve un mensaje de error ("Bad Credentials!") con estado 400.

---

#### GET (/api/v1/auth/validate)
- **Descripción:**  
  Valida la validez de un token JWT.
- **Categoría:**  
  No se usa.
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

    - `imageProfile` (MultipartFile, opcional): Archivo que contiene la imagen de perfil.
    - `tableCommissionsPrice` (MultipartFile, opcional): Archivo que contiene la imagen del precio del tablero de comisiones.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* con un mensaje de éxito, por ejemplo:  
    ```json
    {
      "message": "User registered successfully!"
    }

  - En caso de error, se devuelve un mensaje de error apropiado con el código HTTP correspondiente.

---

#### PUT (/api/v1/auth/update)
- **Descripción:**  
  Actualiza la información de un usuario existente. Se espera un objeto *SignupRequest* en el cuerpo de la solicitud.
- **Categoría:**  
  No se usa
- **Datos que reciben:**  
  - **Payload JSON:** Objeto *SignupRequest* con la información actualizada del usuario.  
    _Ejemplo:_
    ```json
    {
      "username": "usuarioExistente",
      "email": "nuevoemail@ejemplo.com",
      "otrosCampos": "..."
    }

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* con un mensaje indicando que la actualización fue exitosa, por ejemplo:  
    ```json
    {
      "message": "User updated successfully!"
    }


---

#### DELETE (/api/v1/auth/delete/id)
- **Descripción:**  
  Elimina un usuario identificado por su ID.
- **Categoría:**  
  No se usa
- **Datos que reciben:**  
  - **Path/Request Parameter:**  
    - `id` (Long): Identificador del usuario a eliminar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *MessageResponse* confirmando la eliminación, por ejemplo:  
    ```json
    {
      "message": "User deleted successfully!"
    }

---

### ReportController

**Este apartado requiere una investigación más a fondo. Es posible que haya llamadas que no existen/se hayan cambiado. Hablar con Daniel.**

#### GET (/api/v1/reports/admin)
- **Descripción:**  
  Recupera la lista completa de reportes, destinado para el administrador.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - No se requieren parámetros.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Lista de objetos *Report*.  
  - **DTO a discutir con frontend.**

---

#### POST (/api/v1/reports)
- **Descripción:**  
  Crea un nuevo reporte utilizando los datos proporcionados en un objeto *ReportDTO*.
- **Categoría:**  
  A modificar. Cuidado en Frontend, que se está llamando desde localhost, y no se está usando las buenas prácticas de API_URL. Creo que hay varias api de Reports en el frontend, usar la adecuada o cambiar la más sencilla.
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):** Objeto *ReportDTO* que contiene la información del reporte.  
    _Ejemplo:_
    ```json
    {
      "motivo": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "reportadoId": 45,
      "tipo": "Usuario"
    }
    
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* creado, con todos los campos asignados (incluyendo el identificador generado). 
  - **DTO necesario:** Que se pase el name, la descripción y el status. Hablar con front de todos modos. 
    _DTO que se necesita:_
    ```json
    {
      "id": 3,
      "name": "Contenido inapropiado",
      "descripcion": "La publicación contiene lenguaje ofensivo.",
      "status": "Pendiente"
    }
  

---

#### PUT (/api/v1/reports/admin/accept/id)
- **Descripción:**  
  Acepta un reporte específico, cambiando su estado a aceptado.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a aceptar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* actualizado, reflejando el nuevo estado (aceptado).  
  - **De necesitar respuesta, pasar un DTO, si no, no devolver nada.**

---

#### PUT (/api/v1/reports/admin/reject/id)
- **Descripción:**  
  Rechaza un reporte específico, cambiando su estado a rechazado.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a rechazar.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Report* actualizado, reflejando el nuevo estado (rechazado).  
  - **De necesitar respuesta, pasar un DTO, si no, no devolver nada.**

---

#### DELETE (/api/v1/reports/admin/delete/id)
- **Descripción:**  
  Elimina un reporte específico, destinado para el administrador.
- **Categoría:**  
  No sé si se usa.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del reporte a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena.  
    _Ejemplo:_
    ```json
    "Reporte eliminado correctamente."

---

#### GET (/api/v1/reports/types)
- **Descripción:**  
  Recupera la lista de tipos de reportes disponibles.
- **Categoría:**  
  No sé si se usa.
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

---

#### POST (/api/v1/reports/admin/types)
- **Descripción:**  
  Añade un nuevo tipo de reporte.
- **Categoría:**  
  Bien hecha
- **Datos que reciben:**  
  - **Payload JSON (RequestBody):** Objeto *ReportType* con la información del tipo de reporte a agregar.  
    _Ejemplo:_
    ```json
    {
      "nombre": "Fraude"
    }

- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *ReportType* creado, que incluye el identificador generado.  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "nombre": "Fraude"
    }
    
---

### ArtistRestController

#### GET (/api/v1/artists/id)
- **Descripción:**  
  Recupera la información de un artista específico, identificado por su ID.
- **Categoría:**  
  A modificar
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del artista.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Artist* con la información del artista.  
  - **DTO necesario:** Un DTO que tenga el username y la foto de perfil del artista.
    ```json
    {
      "username": "artistaEjemplo",
      "imageProfile": "kmxkldsxjmclkdwedxjwedkl" //imagen
    }
    

---

#### DELETE (/api/v1/artists/administrator/artists/id)
- **Descripción:**  
  Elimina un artista identificado por su ID. Esta operación está destinada al uso del administrador.
- **Categoría:**  
  Bien hecha aunque debería cambiarse la url.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del artista a eliminar.
- **Datos que devuelven:**  
  - **Respuesta:** Mensaje de confirmación en forma de cadena, o mensaje de error en caso de fallo.  
    _Ejemplo (éxito):_
    ```json
    "Cliente eliminado exitosamente"
    

---

#### GET (/api/v1/artists/username/username)
- **Descripción:**  
  Recupera la información de un artista basado en su nombre de usuario.
- **Categoría:**  
  A editar. La imagen no carga ahora mismo, e implementar las DTO.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `username` (String): Nombre de usuario del artista.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Artist* con la información correspondiente.  
  - **DTO necesario:** Un DTO que tenga el id, nombre, username y la foto de perfil del artista.
    ```json
    {
      "id": 1,
      "name": "ejemploooo",
      "username": "artistaEjemplo",
      "imageProfile": "kmxkldsxjmclkdwedxjwedkl" //imagen
    }
    
---

### PaymentController

Hay cosas que a priori no hacen falta ya que en frontend se usa ```@stripe/react-stripe-js```. Hay que hablar con Joaquin de todos modos para pulir esta parte.

#### GET (/api/v1/payment/paymentIntentId)
- **Descripción:**  
  Recupera la información de un PaymentIntent de Stripe identificado por su ID.
- **Categoría:**  
  No se usa
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
  

---

#### GET (/api/v1/payment/all)
- **Descripción:**  
  Recupera una colección de PaymentIntents.
- **Categoría:**  
  No se usa, ¿quizá para admin?
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
  

---

#### POST (/api/v1/payment/create/commissionId)
- **Descripción:**  
  Crea un nuevo PaymentIntent para una comisión específica.
- **Categoría:**  
  Bien hecha (creo)
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
    
  - **Path Variable:**  
    - `commissionId` (long): Identificador de la comisión para la cual se crea el pago.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Cadena que representa el PaymentIntent creado (por ejemplo, su ID o su representación JSON).  
    _Ejemplo:_
    ```json
    "pi_1H8XYZ"
    

---

#### POST (/api/v1/payment/confirm)
- **Descripción:**  
  Confirma un PaymentIntent utilizando su ID y un método de pago.
- **Categoría:**  
  No se usa
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
    

---

#### POST (/api/v1/payment/cancel)
- **Descripción:**  
  Cancela un PaymentIntent utilizando su ID.
- **Categoría:**  
  No se usa
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
    
---

### CategoryRestController

La pantalla en frontend no se entiende muy bien. Hablar con Daniel.

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
    

---

#### GET (/api/v1/categories/id)
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
    
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Category* creado, incluyendo el identificador asignado.  
    _Ejemplo:_
    ```json
    {
      "id": 3,
      "nombre": "Fotografía",
      "descripcion": "Categoría de obras fotográficas"
    }
    

---

#### PUT (/api/v1/categories/administrator/categories/id)
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
    
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Category* actualizado.  
    _Ejemplo:_
    ```json
    {
      "id": 1,
      "nombre": "Pintura Moderna",
      "descripcion": "Categoría de obras de pintura moderna"
    }
    

---

#### DELETE (/api/v1/categories/administrator/categories/id)
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
    

---

### ClientRestController

Un apunte es que es el controlador de Client pero las urls empiezan con users.

#### GET (/api/v1/users/id)
- **Descripción:**  
  Recupera la información de un cliente específico, identificado por su ID.
- **Categoría:**  
  No se usa.
- **Datos que reciben:**  
  - **Path Variable:**  
    - `id` (Long): Identificador del cliente.
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto *Client* con la información del cliente.  
  - **En caso de usarse, hablar con front para DTO**

---

#### GET (/api/v1/users/profile)
- **Descripción:**  
  Recupera el perfil del usuario actual. Según los roles asignados, se devuelve la información correspondiente de un cliente o de un artista.
- **Categoría:**  
  No se usa
- **Datos que reciben:**  
  - No se requieren parámetros explícitos (se utiliza la autenticación para identificar al usuario actual).
- **Datos que devuelven:**  
  - **Respuesta JSON:** Objeto con la información del perfil, que puede ser de tipo *Client* o *Artist*.  
  - **En caso de usarse, hablar con front para DTO**

---

#### DELETE (/api/v1/users/administrator/clients/id)
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
    
  - En caso de error, se devuelve un mensaje descriptivo, por ejemplo:
    ```json
    "No se puede eliminar el cliente porque tiene registros relacionados en otras partes del sistema."
    


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