# Guía para la Revisión - Sprint 2

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
**Fecha:** 10/04/2025  
**Versión:** v3.0  

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
| Juan Núñez           |  Redactor                       |
| María del Carmen Barrera  |  Revisora  |                    

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC)

## Índice de Contenidos
1. [Control de Versiones](#1-control-de-versiones)
2. [Mapeo de Casos de Uso](#2-mapeo-de-casos-de-uso)
3. [Tareas de administracion](#3-tareas-de-administración-realizadas)
4. [Información para la revisión](#4-información-para-la-revisión)

---

## 1. Control de Versiones

| Fecha      | Versión | Descripción                                   | Autor                    |
|------------|---------|-----------------------------------------------|--------------------------|
| 10/04/2025 | v3.0    | Actualización del documento a Sprint 2        |Juan Núñez      |

---

## 2. Mapeo de Casos de Uso

### **Emparejamiento (Matchmaking)**
- Un usuario explora obras de arte disponibles. (**UC-003** implementado en `explore/index.tsx`).  
- Un usuario solicita un trabajo personalizado a un artista. (**UC-004** implementado en `commissions/request/[artistUsername].tsx`).  
- Un artista responde a una solicitud de trabajo personalizado. (**UC-005** implementado en `commissions/index.tsx`).  
- Un artista gestiona encargos en un tablero Kanban. (**UC-009** implementado en `kanban.tsx`).  
- Un usuario realiza el pago de una obra de arte. (**UC-010** implementado en `payment.tsx`).   
- Un usuario envía un mensaje a un artista. (**UC-008** implementado en `chats/[commissionId].tsx`).  
- Un usuario abre una incidencia sobre un problema. (**UC-013**  implementado en `work/[workId].tsx`).  
- Un artista acepta o deniega una solicitud. (**UC-005** implementado en `commissions/index.tsx`).
- Un usuario visualiza los detalles de una obra de arte. (**UC-015** implementado en `work/[workId].tsx`).
- Un usuario deja una reseña sobre un artista. (**UC-012** no implementado).  
- Un usuario añade un artista a favoritos. (**UC-006** no implementado). 

### **Sin Emparejamiento (No Matchmaking)**


 
- Un usuario visualiza su perfil. (**UC-007** implementado  en `UserProfileScreen.tsx`).  
- Un usuario inicia sesión en el sistema. (**UC-001** implementado en `login.tsx`).  
- Un usuario se registra en el sistema. (**UC-002** parcialmente implementado en `signup.tsx`).  
- Un usuario modifica su perfil. (**UC-007** no implementado). 
- Un usuario consulta el historial de pedidos. (**UC-011** implementado en `commissions/index.tsx`).  
- Un artista visualiza las obras que ha subido. (**UC-016** parcialemente implementado).  
- Un usuario elimina su cuenta. (**UC-014** no implementado).  
 

---
## 3. Tareas de Administración Realizadas

A continuación, se detallan las funcionalidades de administrador que se han implementado en este Sprint:

1. **Generar la tabla de administradores:**  
   - Se ha creado la tabla necesaria para almacenar la información de los administradores.

2. **Creación de métodos para administrador:**  
   - **Editar datos de un usuario**: El administrador puede modificar la información de un usuario en el sistema.  
   - **Eliminar a un artista**: El administrador tiene la posibilidad de eliminar a un artista específico.

3. **Gestión de permisos en `SecurityConfig`:**  
   - Se han configurado los permisos correspondientes para que, al iniciar sesión con el rol de administrador, se puedan llevar a cabo las acciones mencionadas sin que otros roles tengan acceso no autorizado.

--- 

## 4. Información para la Revisión

- **Credenciales de Usuario:**  
  - **Cliente:**  
    - **Username:** client1  
    - **Constraseña:** client1 
  - **Artista:**  
    - **Username:** artist1  
    - **Constraseña:** artist1@gmail.com
  - **Administrador:**  
    - **Username:** admin1  
    - **Constraseña:** admin1@gmail.com  
- **Admin:** No procede. Las tareas del usuario administrador están planeadas para el S2, por lo que no se ha creado aún un usuario con las credenciales necesarias.  
- **URL Landing Page:** [https://sites.google.com/view/holos](https://sites.google.com/view/holos)  
- **Repositorio GitHub:** [https://github.com/Holos-INC](https://github.com/Holos-INC)  
- **URL y credenciales de Clockify:**  
  - **Gmail:** holosclockify@gmail.com  
  - **Contraseña:** holosclockify123  
  - **URL:** [https://app.clockify.me/login](https://app.clockify.me/login)  

    Para acceder a Clockify, introducir el correo anterior en el campo correspondiente y pulsar en “Continue with email” (Imagen 1). 
    <p>
      <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Guia%20clockify%201.png" alt="Universidad de Sevilla" width="350"/>
    </p>
    <p>
      Imagen 1
    </p>

    Luego, ingresar el código (Imagen 2) enviado al Gmail introducido (acceder al mismo usando en gmail el correo: holosclockify@gmail.com  y la contraseña: holosclockify123) para acceder a la herramienta de medición de tiempos usada por los miembros del grupo.
    <p>
      <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/Guia%20clockify%202.png" alt="Universidad de Sevilla" width="350"/>
    </p>
    <p>
      Imagen 2
    </p>
    En la sección "Reports" se pueden consultar las configuraciones para ver en qué han invertido su tiempo los diferentes miembros del grupo.  

- **Requisitos potenciales:** Ninguno  
- **Link de la demo:** https://holos-doc.vercel.app/docs/Documentacion/S3/videodemo  
- **Ejemplos de inputs complejos:**
    No hay formularios complejos por el momento. Aunque es interesante destacar que cuando el cliente quiere pedir al artista una comisión tiene la opción de adjuntar una imagen (no es obligatorio, se puede realizar la comisión sin adjuntar dicha imagen).
- **URL de despliegue:** https://holos-art.ew.r.appspot.com/
