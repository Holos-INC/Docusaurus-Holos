# Guía para la Revisión - Sprint 1

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
**Fecha:** 13/03/2025  
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
| Miembro              | Responsabilidad                 |
|----------------------|---------------------------------|
| María del Mar Ávila  |  Redactora                      |
| Nerea Jiménez        |  Revisora                       |
| Juan Núñez           |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC)

## Índice de Contenidos
1. [Control de Versiones](#1-control-de-versiones)
2. [Mapeo de Casos de Uso](#2-mapeo-de-casos-de-uso)
3. [Información para la Revisión](#3-informacion-para-la-revision)

---
## 1. Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 13/03/2025 | v1.0    | Creación de documento | María del Mar Ávila      |

---

## 2. Mapeo de Casos de Uso

### **Emparejamiento (Matchmaking)**
- Un usuario explora obras de arte disponibles. (**UC-003** implementado en `ExploreScreen.tsx`).  
- Un usuario solicita un trabajo personalizado a un artista. (**UC-004** implementado en `RequestCommissionUserScreen.tsx`).  
- Un artista responde a una solicitud de trabajo personalizado. (**UC-005** implementado en `ArtistRequestOrders.tsx`).  
- Un artista gestiona encargos en un tablero Kanban. (**UC-009** implementado en `KanbanScreen.tsx`).  
- Un usuario realiza el pago de una obra de arte. (**UC-010** botón presente en `PaymentScreen.tsx` y `WorkDetailScreen.tsx`, pero actualmente no realiza ninguna acción).  

### **Sin Emparejamiento (No Matchmaking)**
- Un usuario inicia sesión en el sistema. (**UC-001** implementado en `LoginScreen.tsx`).  
- Un usuario se registra en el sistema. (**UC-002** no implementado aún).  
- Un usuario visualiza su perfil. (**UC-007** implementado en `UserProfileScreen.tsx`).  
- Un usuario modifica su perfil. (**UC-007** botón presente en `UserProfileScreen.tsx`, pero la funcionalidad de edición aún no está implementada).  
- Un usuario envía un mensaje a un artista. (**UC-008** botón presente en `WorkDetailScreen.tsx`, pero la funcionalidad de mensajería no está completamente implementada).  
- Un usuario añade un artista a favoritos. (**UC-006** botón presente en `ArtistDetailScreen.tsx`, pero actualmente no realiza ninguna acción).  
- Un usuario consulta el historial de pedidos. (**UC-011** implementado en `OrderHistoryScreen.tsx`).  
- Un usuario visualiza los detalles de una obra de arte. (**UC-015** implementado en `WorkDetailScreen.tsx`).  
- Un artista visualiza las obras que ha subido. (**UC-016** implementado en `ArtworksScreen.tsx`).  
- Un usuario deja una reseña sobre un artista. (**UC-012** no implementado aún).  
- Un usuario abre una incidencia sobre un problema. (**UC-013** no implementado aún).  
- Un usuario elimina su cuenta. (**UC-014** no implementado aún).  
- Un artista acepta o deniega una solicitud. (**UC-005** botones presentes en `ArtistRequestOrders.tsx`, pero actualmente no realizan ninguna acción). 

---

## 3. Información para la Revisión

- **Credenciales de Usuario:**  
  - **Cliente:**  
    - **Username:** client1  
    - **Email:** client1@gmail.com  
  - **Artista:**  
    - **Username:** artist1  
    - **Email:** artist1@gmail.com  
- **Admin:** No procede. Las tareas del usuario administrador están planeadas para el S2, por lo que no se ha creado aún un usuario con las credenciales necesarias.  
- **URL Landing Page:** [https://sites.google.com/view/holos](https://sites.google.com/view/holos)  
- **Repositorio GitHub:** [https://github.com/Holos-INC](https://github.com/Holos-INC)  
- **URL y credenciales de Clockify:**  
  - **Gmail:** holosclockify@gmail.com  
  - **Contraseña:** holosclockify123  
  - **URL:** [https://app.clockify.me/login](https://app.clockify.me/login)  

    Para acceder a Clockify, introducir el correo anterior en el campo correspondiente y pulsar en “Continue with email” (Imagen 1). 
    <p>
      <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Guia clockify 1.png" alt="Universidad de Sevilla" width="350"/>
    </p>
    <p>
      Imagen 1
    </p>

    Luego, ingresar el código (Imagen 2) enviado al Gmail introducido (acceder al mismo usando en gmail el correo: holosclockify@gmail.com  y la contraseña: holosclockify123)  para acceder a la herramienta de medición de tiempos usada por los miembros del grupo.
    <p>
      <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Guia clockify 2.png" alt="Universidad de Sevilla" width="350"/>
    </p>
    <p>
      Imagen 2
    </p>
    En la sección "Reports" se pueden consultar las configuraciones para ver en qué han invertido su tiempo los diferentes miembros del grupo.  

- **Requisitos potenciales:** Ninguno  
- **Link de la demo:** _(Pendiente de añadir)_  
- **Ejemplos de inputs complejos:**
    No hay formularios complejos por el momento. Aunque es interesante destacar que cuando el cliente quiere pedir al artista una comisión tiene la opción de adjuntar una imagen (no es obligatorio, se puede realizar la comisión sin adjuntar dicha imagen)-
- **URL de despliegue y credenciales:** _(Pendiente de añadir)_  
