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
4. [Requisitos funcionales](#4-requisitos-funcionales)
5. [Requisitos no funcionales](#5-requisitos-no-funcionales)
6. [REglas de negocio](#6-reglas-de-negocio)
7. [Conclusión](#7-conclusión)

---

## 1. Introducción

En este documento se nombran los **requisitos funcionales** y **no funcionales** y se dará una descripción adecuada de cada uno de ellos, para facilitar la venta de **comisiones artísticas**, la **gestión del trabajo** de los artistas y la **comunicación con los clientes**.
Para la recolección de requisitos, se han utilizado diversas técnicas de licitación, incluyendo **entrevistas con artistas** y clientes, análisis de **plataformas existentes**, y **cuestionarios** enviados a numerosos artistas.

---

## 2. Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 23/02/2025 | v1.0    | Creación de documento | - Juan Antonio Moreno Moguel<br><br> - Nerea Jiménez  <br><br> - José María Portela Huerta     |
| 26/02/2025 | v1.1    | Detalles Calidad |  - Juan Núñez Sánchez     |  
| 26/02/2025 | v1.2    | Actualización Requisitos |  - Daniel Guedes Preciados     |
| 01/03/2025 | v1.2    | Actualización a Markdown |  - Francisco Pérez Lázaro     |

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
        <td>- Nombre<br> - Contraseña <br> - Nombre de usuario <br> - Email <br> - Número de teléfono <br> - Foto de perfil <br> - Fecha de creación <br> - Tipo de usuario
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
        <td>- Número de slots de trabajo <br> - Tabla de precios por comisión </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 003 *********</th>
        <td>Almacenar tarjetas</td>
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
        <td>Se debe de guardar la información bancaria de todos los usuarios.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>- Número de la tarjeta <br>- CVV <br>- Fecha de vencimiento</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 004 *********</th>
        <td>Almacenar transacciones</td>
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
        <td>Se debe de poder guardar las transacciones que se realicen dentro de la aplicación mientras sea necesario.</td>
    </tr>
    <tr>
        <th>Datos específicos</th>
        <td>- Cantidad <br>- Fecha <br>- Usuario remitente <br> - Usuario detinatario</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 005</th>
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
        <td>- Nombre <br> - Descripción <br> - Precio<br> - Categoría </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 006</th>
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
        <td>- Nombre <br> - Descripción </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 007</th>
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
        <td>- Estado de la comición <br> - Número de hitos <br> - Fecha de aceptación por el artista<br> - Método de pago </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 008</th>
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
        <td> - Descripción o nombre <br> - Fecha <br> - Aceptado(bool)</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 009</th>
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
        <td> - Usuario <br> - Fecha <br> - Estado del pedido</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 010</th>
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
        <td> - Orden de las tareas <br> - Descripción de las tareas <br> - Color de cada tarea</td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 011</th>
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
        <td> - Nombre del cliente <br> - Estado de la lista de espera en el tablero </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 012</th>
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
        <td> - Usuario remitente <br> - Usuario destinatario <br> - Mensaje<br> - Fecha y hora </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

<table>
    <tr>
        <th>IRQ – 013*********</th>
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
        <td> - Usuario que reporta <br> - Razón del reporte<br> - Descripción </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>


<table>
    <tr>
        <th>IRQ – 014</th>
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
        <td> - Imagen del trabajo realizado <br> - Fecha de subida<br> - Estado del hito </td>
    </tr>
    <tr>
        <th>Comentarios</th>
        <td>-</td>
    </tr>
</table>

## 4. Requisitos funcionales

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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-011 ¿Funcional? ¿No funcional?</th>
        <td>Recepción de la comisión en alta calidad</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero recibir mi comisión en la máxima calidad posible.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-012 ¿Información?</th>
        <td>Reseñas de artistas</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero escribir una reseña del artista cuando haya finalizado la comisión.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Historial de comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero ver las comisiones que he recibido.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-014</th>
        <td>Apertura de incidencias</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como cliente, quiero poder abrir una incidencia si el artista no contesta/no sube avances y recibir parte de mi dinero o mi dinero completo.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Perfil de artista</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero tener un perfil de artista donde esté mi información y una galería con mi portafolio.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Edición del perfil y portafolio</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder editar mi perfil de artista y el portafolio.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-017</th>
        <td>Planes de precios y ventajas</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder elegir entre los tres planes de precios y recibir mis ventajas.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-018</th>
        <td>Subastas de arte (plan premium)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con plan premium, quiero poder subir mi arte y subastarlo, estableciendo un valor mínimo de subasta y un valor automático de compra (o no).</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-019</th>
        <td>Kanban para gestión de comisiones</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder disponer de un tablero kanban para gestionar el estado de mis comisiones.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Subida de avances en el kanban</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder ir subiendo mi trabajo (imágenes de cómo va la comisión) por estado del kanban y notificar al cliente cada vez que actualice el estado.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Responder feedback del cliente</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder contestar el feedback del cliente con más imágenes con los cambios corregidos.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <th>RF-022</th>
        <td>Comunicación con el cliente</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista, quiero poder contactar con el cliente en caso de duda (ya sea por chat o enviándole algún tipo de notificación).</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Personalización de hoja de request (plan básico o superior)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con al menos el plan básico, quiero poder customizar mi hoja de request.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Personalización de kanban (plan básico o superior)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con al menos el plan básico, quiero poder customizar mi tablero kanban.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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
        <td>Personalización de kanban (plan básico o superior)</td>
    </tr>
    <tr>
        <th>Descripción</th>
        <td>Como artista con al menos el plan básico, quiero poder customizar mi tablero kanban.</td>
    </tr>
    <tr>
        <th>Dependencias</th>
        <td>-</td>
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

---

## 5. Requisitos no funcionales


---
## 6. Reglas de negocio

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

## 7. Conclusión