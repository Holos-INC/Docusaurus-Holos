# Análisis de Requisitos

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
**Fecha:** 23/02/2025  
**Versión:** v1.0  

**Grupo de prácticas:** G1  

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

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


## Índice de Contenidos
1. [Introducción](#1-introducción)
2. [Control de Versiones](#2-control-de-versiones)
3. [Requisitos de Información](#3-requisitos-de-información)
4. [Casos de uso](#4-casos-de-uso)
5. [Requisitos funcionales](#5-requisitos-funcionales)
6. [Requisitos no funcionales](#6-requisitos-no-funcionales)
7. [Reglas de negocio](#7-reglas-de-negocio)
8. [Conclusión](#8-conclusión)

---

## 1. Introducción

En este documento se nombran los **requisitos funcionales** y **no funcionales** y se dará una descripción adecuada de cada uno de ellos, para facilitar la venta de **comisiones artísticas**, la **gestión del trabajo** de los artistas y la **comunicación con los clientes**.
Para la recolección de requisitos, se han utilizado diversas técnicas de licitación, incluyendo **entrevistas con artistas** y clientes, análisis de **plataformas existentes**, y **cuestionarios** enviados a numerosos artistas.

---

## 2. Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 23/02/2025 | v1.0    | Creación de documento | <p>- Juan Antonio Moreno Moguel</p><p> - Nerea Jiménez</p> <p>- José María Portela Huerta</p>   |
| 26/02/2025 | v1.1    | Detalles Calidad |  - Juan Núñez Sánchez     |  
| 26/02/2025 | v1.2    | Actualización Requisitos |  - Daniel Guedes Preciados     |
| 01/03/2025 | v1.3    | Requisitos no funcionales |  - Francisco Pérez Lázaro     |
| 02/03/2025 | v1.4    | Actualización Datos |  - Francisco Pérez Lázaro     |
| 03/03/2025 | v1.5    | Añadiendo Casos de Uso |  - Francisco Pérez Lázaro     |


---


## 3. Requisitos de Información

<table>
    <tr>
        <th>IRQ – 001</th>
        <td>Almacenar usuarios</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe de guardar la información de un usuario.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Nombre</p>
            <p>- Contraseña</p>
            <p>- Nombre de usuario</p>
            <p>- Email</p>
            <p>- Número de teléfono</p>
            <p>- Foto de perfil</p>
            <p>- Fecha de creación</p>
            <p>- Tipo de usuario</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 002</th>
        <td>Almacenar datos artistas</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe almacenar los datos de los artistas.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Número de slots de trabajo</p>
            <p>- Tabla de precios por comisión</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 003</th>
        <td>Gestión de obras</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Los artistas deben poder crear y administrar sus obras, asignándolas a una categoría específica y definiendo un precio base.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Nombre</p>
            <p>- Descripción</p>
            <p>- Precio</p>
            <p>- Categoría</p> 
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 004</th>
        <td>Gestión de categorías de obras</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe permitir la creación y administración de categorías para clasificar las obras.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Nombre</p>
            <p>- Descripción</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 005</th>
        <td>Almacenar comisiones</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista debo de poder gestionar mis comisiones.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Estado de la comición</p>
            <p>- Número de hitos</p>
            <p>- Fecha de aceptación por el artista</p>
            <p>- Método de pago</p> 
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 006</th>
        <td>Registro de hitos de comisión</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Las comisiones pueden dividirse en hitos para organizar el trabajo y los pagos parciales.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Descripción o nombre</p>
            <p>- Fecha</p>
            <p>- Aceptado(bool)</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 007</th>
        <td>Historial de pedidos</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe de poder almacenar un historial de los pedidos hechos por un usuario.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Usuario</p>
            <p>- Fecha</p>
            <p>- Estado del pedido</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 008</th>
        <td>Almacenar kanban</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se deben de poder almacenar los tableros Kan-Ban.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Orden de las tareas</p>
            <p>- Descripción de las tareas</p>
            <p>- Color de cada tarea</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 009</th>
        <td>Almacenar lista de espera</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe de poder almacenar la lista de espera de un artista.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Nombre del cliente</p>
            <p>- Estado de la lista de espera en el tablero</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 010</th>
        <td>Almacenar chat</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe de poder almacenar los mensajes de un chat entre dos personas.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Usuario remitente</p>
            <p>- Usuario destinatario</p>
            <p>- Mensaje</p>
            <p>- Fecha y hora</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 011</th>
        <td>Almacenar reportes</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se debe de poder almacenar los reportes que se realicen a un usuario de la aplicación.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Usuario que reporta</p>
            <p>- Razón del reporte</p> 
            <p>- Descripción</p>
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 012</th>
        <td>Registro de trabajos terminados en la comisión</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (27/02/2025)</td>
    </tr>
    <tr>
        <th>Autores</th>
        <td>-</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Se deben almacenar las imágenes de los trabajos completados por un artista.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>
            <p>- Imagen del trabajo realizado</p>
            <p>- Fecha de subida</p> 
            <p>- Estado del hito</p> 
        </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

---

## 4. Casos de uso

<table>
    <tr>
        <th>UC-001</th>
        <td>Inicio de sesión</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Tanto el Artista como el Cliente podrá ingresar al sistema proporcionando sus credenciales (nombre de usuario y contraseña). El sistema validará la información y concederá acceso si es correcta.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El Artista y el Cliente deben estar registrados en el sistema</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario (Artista/Cliente) accede a la pantalla de inicio</p>
            <p>2. Ingresa su nombre de usuario y contraseña</p>
            <p>3. El sistema valida las credenciales</p>
            <p>4. Si son correctas, el usuario es redirigido a la pantalla principal</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El usuario (Artista/Cliente) ha iniciado sesión y tiene acceso al sistema</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-002</th>
        <td>Registro de Usuario</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un nuevo usuario (Artista/Cliente) podrá registrarse en la aplicación proporcionando su información personal. El sistema validará los datos y creará una cuenta según el tipo de usuario seleccionado.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario no debe estar registrado previamente en la aplicación.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario (Artista/Cliente) accede a la pantalla de registro</p>
            <p>2. Seleccionar el tipo de cuenta (Artista o Cliente)</p>
            <p>3. Rellenar el formulario de información reuquerida</p>
            <p>4. El sistema valida los datos y verifica que el correo no esté registrado</p>
            <p>5. Si todo es correcto, el sistema guarda la información y envía un correo de verificación</p>  
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El usuario (Artista/Cliente) tiene una cuenta creada en el sistema.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-003</th>
        <td>Explorar Obras de Arte</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El usuario (Cliente o Artista) podrá navegar por la galería de obras de arte disponibles en la aplicación. Tendrá la opción de filtrar por categorías o tipo de arte y podrá seleccionar una obra para ver detalles del artista.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>Debe haber obras de arte registradas en la base de datos.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario accede a la pantalla de "Explorar".</p>
            <p>2. Visualiza todas las obras disponibles en la plataforma.</p>
            <p>3. Puede aplicar filtros por categoría o tipo de arte.</p>
            <p>4. Selecciona una obra para ver más detalles.</p>
            <p>5. Se muestra la información de la obra y del artista que la creó.</p>  
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El usuario ha explorado las obras y visualizado información relevante.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-004</th>
        <td>Solicitar trabajo personalizado</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un usuario (Cliente) podrá solicitar un trabajo personalizado a un Artista desde su perfil, enviando una petición con detalles del encargo.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario debe haber accedido al perfil del Artista.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario entra al perfil del Artista.</p>
            <p>2. Presiona el botón "Solicitar Trabajo Personalizado".</p>
            <p>3. Se abre un formulario donde el usuario ingresa detalles del trabajo (tipo de arte, descripción, tamaño, etc.).</p>
            <p>4. El usuario envía la solicitud.</p>
            <p>5. El sistema notifica al Artista sobre la nueva solicitud.</p>  
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La solicitud ha sido enviada al Artista y queda pendiente de respuesta.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-005</th>
        <td>Responder Solicitud de Trabajo Personalizado</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un Artista podrá visualizar y responder las solicitudes de trabajos personalizados enviadas por los Clientes.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El Cliente debe haber enviado una solicitud de trabajo personalizado.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El Artista accede a su perfil.</p>
            <p>2. Ingresa a la sección de "Mensajes"</p>
            <p>3. Visualiza la lista de solicitudes recibidas.</p>
            <p>4. Selecciona una solicitud para ver los detalles.</p>
            <p>5. Responde al Cliente con una aceptación o rechazo.</p>
            <p>6. Si acepta, el Cliente es notificado y el trabajo pasa automaticamente al tablero Kanban</p>  
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La solicitud ha sido gestionada y el Cliente recibe una respuesta.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-006</th>
        <td>Añadir Artista a Favoritos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un usuario (Cliente o Artista) podrá añadir un Artista a su lista de favoritos para encontrarlo fácilmente más tarde.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario debe haber accedido al perfil del Artista.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario entra al perfil del Artista.</p>
            <p>2. Presiona el botón "Añadir a Favoritos".</p>
            <p>3. El sistema guarda el Artista en la lista de favoritos del usuario.</p>
            <p>4. Se muestra confirmación en pantalla.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El Artista ha sido añadido a la lista de favoritos del usuario.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-007</th>
        <td>Visualizar y Modificar Perfil</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un usuario (Cliente o Artista) podrá visualizar y modificar su perfil, editando información personal, imagen de perfil y otros datos según su tipo de cuenta.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario debe haber iniciado sesión en la aplicación.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario accede a la pantalla de su perfil en la parte inferior del manú izquierdo.</p>
            <p>2. Visualiza su información actual (nombre, correo, descripción, foto de perfil, etc.).</p>
            <p>3. Presiona el botón "Editar perfil".</p>
            <p>4. Modifica los datos que desea actualizar y guardar los cambios.</p>
            <p>5. El sistema actualiza la información en la base de datos y muestra la confirmación</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El perfil del usuario ha sido actualizado con la nueva información.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-008</th>
        <td>Mensajería entre Cliente y Artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un Cliente y un Artista podrán intercambiar mensajes a través de la aplicación para discutir detalles sobre trabajos personalizados o resolver dudas.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>Ambos usuarios deben estar registrados e iniciar sesión en la aplicación.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario (Cliente o Artista) accede a la sección de mensajería del menú lateral.</p>
            <p>2. Visualiza la lista de conversaciones activas.</p>
            <p>3. Selecciona un contacto para abrir el chat o inicia una nueva conversación.</p>
            <p>4. Escribe y envía un mensaje.</p>
            <p>5. El destinatario recibe una notificación y puede responder.</p>
            <p>6. El sistema almacena la conversación y permite su consulta en cualquier momento.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El mensaje ha sido enviado y queda registrado en el sistema.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-009</th>
        <td>Gestión de Proyectos en Tablero Kanban</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El Artista podrá gestionar sus proyectos en un tablero Kanban con tres estados: "Pendiente", "En progreso" y "Terminado". El Cliente solo podrá visualizar el estado de su pedido.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>Debe existir al menos un pedido registrado en el sistema.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El Artista accede a la sección de "Tablero".</p>
            <p>2. Visualiza el tablero Kanban con los proyectos organizados en tres columnas: "Pendiente", "En progreso" y "Terminado".</p>
            <p>3. Puede arrastrar y soltar un proyecto para cambiar su estado según su progreso.</p>
            <p>4. El cliente es notificado por cada movimiento</p>
            <p>5. El Cliente accede a la misma sección, pero solo puede visualizar el estado de su pedido sin modificarlo.</p>
            <p>6. Cuando un proyecto pasa a "Terminado", el Cliente recibe una notificación de que su pedido está en la cesta.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El estado de los proyectos ha sido actualizado y reflejado para el Cliente y el Artista.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-010</th>
        <td>Gestión de Cesta y Pago de Obras</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El Cliente podrá agregar obras a una "Cesta" y proceder al pago.En caso de ser un pedido personalizado, una vez esté terminado la obra se añadirá automaticamente a la cesta. Hasta que no se realice el pago, la obra no se le proporciona al Cliente.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>Debe existir al menos un producto en la cesta</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El Cliente accede a la pantalla "Cesta" situada en el menú lateral izquierdo.</p>
            <p>2. Visualiza las obras agregadas y el total a pagar.</p>
            <p>3. Selecciona un método de pago disponible.</p>
            <p>4. Introduce los datos requeridos y confirma el pago.</p>
            <p>5. El sistema procesa el pago y verifica su validez.</p>
            <p>6. Si el pago es exitoso, se le proporciona la obra al Cliente y se notifica al Artista.</p>
            <p>7. Se genera una confirmación de compra con detalles de la transacción.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La obra ha sido adquirida y registrada en la cuenta del Cliente.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-011</th>
        <td>Gestión del Historial de Pedidos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Tanto los Clientes como los Artistas podrán acceder a la pantalla "Pedidos" para visualizar el historial de pedidos realizados (Clientes) o recibidos (Artistas).</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario debe haber iniciado sesión y tener al menos un pedido registrado en el sistema.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario (Cliente o Artista) accede a la pantalla "Pedidos" en el menú lateral izquierdo.</p>
            <p>2. Se muestra una lista con los pedidos y su estado.</p>
            <p>3. Si pulsa sobre un pedido se mostrarán detalles del mismo.</p>
            <p>4. Escribe un comentario sobre su experiencia con el Artista.</p>
            <p>5. Confirma y envía la reseña.</p>
            <p>6. El sistema guarda la reseña y la muestra en el perfil del Artista.</p>
            <p>7. (Opcional) El Artista recibe una notificación sobre la nueva reseña.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La reseña queda publicada en el perfil del Artista y disponible para otros usuarios.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-012</th>
        <td>Gestión Reseña del Artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un Cliente podrá calificar y dejar una reseña sobre un Artista después de haber comprado una obra o solicitado un trabajo personalizado.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El Cliente debe haber realizado una compra o pedido personalizado con el Artista.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El Cliente accede a la pantalla de "Pedidos" y selecciona un pedido completado.</p>
            <p>2. Se muestra la opción de "Dejar una reseña".</p>
            <p>3. El Cliente selecciona una calificación (ej. de 1 a 5 estrellas).</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>El usuario ha visualizado correctamente su historial de pedidos.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-013</th>
        <td>Apertura de Incidencias</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un usuario podrá abrir una incidencia cuando tenga un problema con un pedido o transacción, y el sistema gestionará la resolución.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El Cliente debe haber realizado una compra o pedido personalizado con el Artista.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario accede a la sección "Pedidos".</p>
            <p>2. Presiona el botón "Abrir Incidencia".</p>
            <p>3. Completa un formulario describiendo el problema.</p>
            <p>4. Envía la incidencia.</p>
            <p>5. El sistema registra la incidencia y notifica al equipo de soporte.</p>
            <p>6. Soporte analiza el caso y toma una acción.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La incidencia ha sido procesada y el usuario recibe una resolución.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>UC-014</th>
        <td>Eliminación de Cuenta y Borrado de Datos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Un Cliente o Artista podrá solicitar la eliminación de su cuenta y la eliminación de sus datos personales de la aplicación.</td>
    </tr>
    <tr>
        <th>Precondición</th>
        <td>El usuario debe haber iniciado sesión y no debe tener pedidos activos o pendientes de resolución.</td>
    </tr>
    <tr>
        <th>Secuencia normal</th>
        <td>
            <p>1. El usuario accede a la sección "Perfil".</p>
            <p>2. Selecciona la opción "Eliminar cuenta".</p>
            <p>3. El sistema muestra un aviso con las consecuencias de la eliminación.</p>
            <p>4. Si el usuario tiene pedidos activos o incidencias en proceso, el sistema bloquea la eliminación hasta que se resuelvan.</p>
        </td>
    </tr>
    <tr>
        <th>Postcondición</th>
        <td>La cuenta ha sido eliminada y los datos personales han sido borrados.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>
---

## 5. Requisitos funcionales

<table>
    <tr>
        <th>RF-001</th>
        <td>Visualización de artistas en el feed</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder ver los artistas más relevantes en mi feed como ejemplos de comisiones o de su arte.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-002</th>
        <td>Búsqueda y filtrado de artistas</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder buscar artistas en específico o poder filtrarlos por estilo, tiempo de entrega, número de obras, etc.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-003</th>
        <td>Perfil del artista y galería</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder ver el perfil del artista, así como su galería con el arte que ha subido.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-004</th>
        <td>Solicitud de comisión</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder pedir una comisión (si hay slots disponibles) al artista que yo prefiera.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-005</th>
        <td>Lista de espera para comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero añadirme a la waitlist (si el artista dispone de ella).</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-006</th>
        <td>Notificaciones de disponibilidad de comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero recibir una notificación si el artista que quiero comisionar tiene slots libres y yo estaba en su waitlist.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-007</th>
        <td>Seguimiento de comisión</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder ver el seguimiento de mi comisión, en qué estado tiene el artista mi pedido y ver sus avances.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-008</th>
        <td>Feedback de la comisión</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder dar feedback de mi comisión cada vez que el artista publique avances si no me gusta lo que ha hecho o quiero cambiar algo, o simplemente dar feedback positivo.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-009</th>
        <td>Notificaciones de avances en la comisión</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero que se me notifique cada vez que el artista haga avances.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-010</th>
        <td>Comunicación con el artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder comunicarme con el artista en un chat.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-011</th>
        <td>Reseñas de artistas</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero escribir una reseña del artista cuando haya finalizado la comisión.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-012</th>
        <td>Historial de comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero ver las comisiones que he recibido.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-013</th>
        <td>Apertura de incidencias</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder abrir una incidencia si el artista no contesta/no sube avances y recibir parte de mi dinero o mi dinero completo.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-014</th>
        <td>Perfil de artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero tener un perfil de artista donde esté mi información y una galería con mi portafolio.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>


<table>
    <tr>
        <th>RF-015</th>
        <td>Edición del perfil y portafolio</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder editar mi perfil de artista y el portafolio.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-016</th>
        <td>Planes de precios y ventajas</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder elegir entre los tres planes de precios y recibir mis ventajas.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-017</th>
        <td>Subastas de arte (plan premium)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con plan premium, quiero poder subir mi arte y subastarlo, estableciendo un valor mínimo de subasta y un valor automático de compra (o no).</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Baja</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-018</th>
        <td>Kanban para gestión de comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder disponer de un tablero kanban para gestionar el estado de mis comisiones.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-019</th>
        <td>Subida de avances en el kanban</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder ir subiendo mi trabajo (imágenes de cómo va la comisión) por estado del kanban y notificar al cliente cada vez que actualice el estado.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-020</th>
        <td>Responder feedback del cliente</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder contestar el feedback del cliente con más imágenes con los cambios corregidos.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-021</th>
        <td>Comunicación con el cliente</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder contactar con el cliente en caso de duda (ya sea por chat o enviándole algún tipo de notificación).</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-022</th>
        <td>Personalización de hoja de request (plan básico o superior)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con al menos el plan básico, quiero poder customizar mi hoja de request.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-023</th>
        <td>Personalización de kanban (plan básico o superior)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con al menos el plan básico, quiero poder customizar mi tablero kanban.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-024</th>
        <td>Borrado de datos artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista quiero poder borrar todos mis datos de la aplicación en cualquier momento</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Baja</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-025</th>
        <td>Borrado de datos usuario</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como usuario quiero poder borrar todos mis datos de la aplicación en cualquier momento</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Baja</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-026</th>
        <td>Búsqueda avanzada de artistas y encargos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder buscar artistas mediante filtros como estilo de arte, disponibilidad, precio por comisión y valoraciones, para encontrar el artista adecuado a mis necesidades.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-027</th>
        <td>Gestión de tarifas y comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder configurar mis propias tarifas y comisiones, incluyendo precios base, costos adicionales y descuentos, para ofrecer diferentes opciones a mis clientes.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-028</th>
        <td>Historial de encargos y pagos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente y artista, quiero poder consultar un historial de encargos realizados, junto con sus estados y pagos asociados, para tener un control de mis transacciones.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-029</th>
        <td>Edición y gestión del perfil de usuario</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como usuario, quiero poder editar mi perfil, incluyendo información personal, avatar, métodos de pago y portafolio (en el caso de los artistas), para mostrar mi identidad en la plataforma.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RF-030</th>
        <td>Moderación de contenido</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como usuario, quiero que la plataforma modere mensajes e imágenes compartidas en los chats, para evitar contenido inapropiado o dañino.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Baja</td>
    </tr>
</table>


---

## 6. Requisitos no funcionales

<table>
    <tr>
        <th>RNF-001</th>
        <td>Compatibilidad con navegadores</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>La aplicación debe ser compatible con las versiones actuales y anteriores de Google Chrome, Firefox, Edge y Safari.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-002</th>
        <td>Fluidez en la navegación</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe permitir una navegación intuitiva con un máximo de tres clics para llegar a cualquier funcionalidad principal.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-003</th>
        <td>Diseño Responsive</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>La interfaz debe adaptarse correctamente a dispositivos móviles, tablets y computadoras de escritorio.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-004</th>
        <td>Seguridad y cifrado de datos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Los datos sensibles, como credenciales de usuarios y transacciones, deben estar protegidos con protocolos HTTPS y OAuth 2.0.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-005</th>
        <td>Tiempo de respuesta</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe garantizar un tiempo de respuesta menor a 2 segundos en el 95% de las solicitudes de usuario.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-006</th>
        <td>Privacidad y protección de datos</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe cumplir con el Reglamento General de Protección de Datos (GDPR) y otras normativas de privacidad aplicables.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-007</th>
        <td>Mantenimiento y actualizaciones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe permitir actualizaciones sin afectar la disponibilidad del servicio.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-008</th>
        <td>Pasarelas de pago</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe ser compatible con PayPal para gestionar pagos de manera segura.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Media</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-009</th>
        <td>Usabilidad y experiencia de usuario (UX)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>La interfaz del sistema debe ser intuitiva y fácil de usar, asegurando que tanto artistas como clientes puedan realizar sus tareas sin necesidad de formación avanzada.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-010</th>
        <td>Notificaciones en tiempo real</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema debe enviar notificaciones en tiempo real a los usuarios sobre cambios en sus encargos, mensajes y pagos.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
</table>

<table>
    <tr>
        <th>RNF-011</th>
        <td>Recepción de la comisión en alta calidad</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero recibir mi comisión en la máxima calidad posible.</td>
    </tr>
    <tr>
        <th>Prioridad</th>
        <td>Alta</td>
    </tr>
    <tr>
        <th>Estado</th>
        <td> En proceso </td>
    </tr>
</table>


---
## 7. Reglas de negocio

<table>
    <tr>
        <th>CRQ-001</th>
        <td>Usuario con campos repetidos</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (28/02/2025)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema deberá respetar la siguiente regla de negocio o restricción: Un usuario no puede registrarse con un correo electrónico o usuario que ya esté usado por cualquier otro usuario.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>CRQ-002</th>
        <td>Verificar tarjeta bancaria</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (28/02/2025)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema deberá respetar la siguiente regla de negocio o restricción: Para el pago deberá validarse la tarjeta de crédito introducida.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>CRQ-003</th>
        <td> Fechas de hitos</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (28/02/2025)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema deberá respetar la siguiente regla de negocio o restricción: La fecha dada para los diferentes hitos debe ser posterior a la fecha de aceptación de la comisión y posterior a la fecha del anterior hito.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>CRQ-004</th>
        <td> Número máximo de slots</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (28/02/2025)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema deberá respetar la siguiente regla de negocio o restricción: El número de comisiones por artistas debe ser igual o menor al número máximo de slots ofrecidos por el plan elegido.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>CRQ-005</th>
        <td> Entrega de comisión</td>
    </tr>
    <tr>
        <th>Versión</th>
        <td>1.0 (28/02/2025)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>El sistema deberá respetar la siguiente regla de negocio o restricción: La entrega de la comisión debe ser una imagen sin marca de agua.</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

---

## 8. Conclusión
<p>Este documento ha detallado de manera exhaustiva los requisitos funcionales y no funcionales necesarios para desarrollar un sistema que optimice la venta de comisiones artísticas, facilite la gestión del trabajo de los artistas y mejore la comunicación con los clientes. Además, las reglas de negocio definidas ayudarán a garantizar que el sistema opere de manera coherente y eficiente, respetando los límites y las condiciones establecidas. Con todo lo que se ha mencionado en los requisitos, se espera que esta plataforma facilite la creación y gestión de comisiones artísticas de forma sencilla y eficiente, cubriendo las necesidades de todos los usuarios involucrados.</p>