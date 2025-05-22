# Guía para la Revisión - WPL

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
**Fecha:** 22/05/2025  
**Versión:** v5.0  

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
| María del Mar Ávila  |  Redactora  |                    

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
| 22/05/2025 | v5.0    | Actualización del documento a WPL        |María del Mar Ávila Maqueda      |

---

## 2. Mapeo de Casos de Uso

### **Emparejamiento (Matchmaking)**
- Un usuario explora obras de arte disponibles. (**UC-003** implementado en `explore/index.tsx`).  
- Un usuario solicita un trabajo personalizado a un artista. (**UC-004** implementado en `commissions/request/[artistUsername].tsx`).    
- Un artista gestiona encargos en un tablero Kanban. (**UC-009** implementado en `kanban.tsx`).  
- Un usuario realiza el pago de una obra de arte. (**UC-010** implementado en `payment.tsx`).   
- Un usuario envía un mensaje a un artista. (**UC-008** implementado en `chats/[commissionId].tsx`). 
- Un artista acepta o deniega una solicitud. (**UC-005** implementado).
- Un usuario visualiza los detalles de una obra de arte. (**UC-013** implementado en `work/[workId].tsx`).
- Un usuario puede reportar una obra. (**UC-006** implementado). 

### **Sin Emparejamiento (No Matchmaking)**


 
- Un usuario visualiza su perfil. (**UC-007** implementado  en `UserProfileScreen.tsx`).  
- Un usuario inicia sesión en el sistema. (**UC-001** implementado en `login.tsx`).  
- Un usuario se registra en el sistema. (**UC-002** implementado en `signup.tsx`).  
- Un usuario modifica su perfil. (**UC-007** implementado). 
- Un usuario consulta el historial de pedidos. (**UC-011** implementado en `commissions/index.tsx`).  
- Un artista puede subir obras y visualizar las obras que ha subido. (**UC-012** implementado).  
 

---
## 3. Tareas de Administración Realizadas
En blanco intencionadamente.

--- 

## 4. Información para la Revisión

- **Credenciales de Usuario:**  
  - **Cliente:**  
    - **Username:** client1  
    - **Constraseña:** client1 
  - **Artista:**  
    - **Username:** artist1  
    - **Constraseña:** artist1@gmail.com
  - **Artista Premium:**  
    - **Username:** premium_artist  
    - **Constraseña:** premium_artist
  - **Administrador:**  
    - **Username:** admin1  
    - **Constraseña:** admin1@gmail.com  
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
- **Link de la demo:** [Demo](../../../static/videos/DEMO_WPL.mp4)
- **Ejemplos de inputs complejos:**
    No hay formularios complejos por el momento. Aunque es interesante destacar que cuando el cliente quiere pedir al artista una comisión tiene la opción de adjuntar una imagen (no es obligatorio, se puede realizar la comisión sin adjuntar dicha imagen).
- **URL de despliegue:** https://holos-wpl.ew.r.appspot.com/
