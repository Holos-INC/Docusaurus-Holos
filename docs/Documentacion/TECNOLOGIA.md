# Documentación Tecnología

<p align="center">
  <img src="/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
</p>
<p align="center">
  <strong>Universidad de Sevilla</strong>
</p>
<p align="center">
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong>
</p>

## Grado en Ingeniería Informática – Ingeniería del Software

**Curso:** 2024 – 2025  
**Fecha:** 19/02/2025  
**Versión:** v1.0  

**Grupo de prácticas:** G1  
**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC)

---

## Control de Versiones

| Fecha       | Versión | Descripción           |
|-------------|---------|-----------------------|
| 19/02/2025  | v1.0    | Creación de documento |

---

## Índice de contenido
1. [Tecnología](#1-tecnología)
2. [Avance tecnológico](#2-avance-tecnológico)
3. [Continuous Integration](#3-continuous-integration)
   - [Integración Continua - Backend (Spring Boot)](#integración-continua---backend-spring-boot)
   - [Integración Continua - Frontend (React)](#integración-continua---frontend-react)
4. [Continuous Deploy](#4-continuous-deploy)
   - [Despliegue Continuo - Backend](#despliegue-continúo---backend)
   - [Despliegue Continuo - Frontend](#despliegue-continúo---frontend)
   - [Publicación Automática en Tiendas Móviles](#publicación-automática-en-tiendas-móviles)

---

## 1. Tecnología

Holos se está desarrollando utilizando tecnologías que garantizan la escalabilidad, el rendimiento, la facilidad de mantenimiento y la seguridad.

Para el **frontend** se utilizará **React**, la biblioteca más popular para el desarrollo de interfaces dinámicas, usando **npm** como gestor de dependencias y para ejecutar scripts de compilación. Esto permite aislar los componentes de la aplicación para mejorar la mantenibilidad, además de soportar PWA e integrarse con **OAuth2** para brindar una experiencia segura a los usuarios.

Para el **backend** se empleará **Spring Boot 3.4.2** con **Maven** como gestor de dependencias y proyecto, utilizando **Java 23**. Se incluyen las siguientes dependencias de Spring Boot:
- **Lombok:** Reduce el código repetitivo con anotaciones como `@Getter` y `@Setter`.
- **MySQL Driver:** Permite la conexión con la base de datos MySQL.
- **OAuth2Client:** Facilita la autenticación segura con OAuth2.
- **Spring Web:** Proporciona capacidades para exponer APIs RESTful.
- **WebSocket:** Permite la comunicación en tiempo real entre el frontend y el backend.
- **Spring REST Docs:** Facilita la documentación automatizada de APIs.
- **Markdown Document Reader & PDF Document Reader:** Permite gestionar documentos en formato Markdown y PDF dentro de la aplicación.

Estas características permiten disponer de una arquitectura escalable y flexible, con seguridad mejorada gracias a **OAuth2**, una conexión eficiente con bases de datos MySQL y comunicación en tiempo real mediante WebSockets.

Además, para la gestión de versiones del código, desarrollo y tareas del proyecto se utilizarán:
- **VS Code** (u otro editor preferido)
- **Git** y **GitHub** para el control de versiones.
- **GitHub Projects** para la gestión ágil de tareas.
- **GitHub Actions** para la integración y despliegue continuos, permitiendo ejecutar pruebas automáticas y gestionar el despliegue en la nube.

Dado que la aplicación se desplegará como una **PWA** descargable en tiendas móviles, se contempla el uso de:
- **Google Cloud** para el hosting del backend.
- **Firebase Hosting** o **Render** para el frontend.
- **Capacitor.js** para empaquetar la PWA y publicarla en Google Play y App Store.

---

## 2. Avance tecnológico

Aunque Holos no incide en un mercado altamente competitivo, presenta características innovadoras que la distinguen:
- **Pagos anónimos:** Los pagos se realizarán a una cuenta de PayPal, de la cual se redirigirá el importe al artista, descontando comisiones.
- **Trackeo de IA:** Se habilitará un detector de inteligencia artificial para identificar arte generado mediante IA, advirtiendo a los compradores sin impedir la venta.
- **Métodos de pago flexibles:** Los artistas podrán optar por diferentes esquemas de pago (100% al final, 50% al inicio y 50% al final, o métodos personalizados).

---

## 3. Continuous Integration

### Integración Continua - Backend (Spring Boot)

**Objetivo:** Garantizar la calidad del código en el backend mediante análisis estático, pruebas y compilación del proyecto.

**Pasos del proceso:**
- Clonación del repositorio desde GitHub.
- Configuración del entorno con **Java 23** y **Maven**.
- Verificación de la calidad del código utilizando **Checkstyle**.
- Compilación del proyecto con **Maven**.
- Ejecución de pruebas unitarias e integración con **JUnit** y **Mockito**.
- Generación del artefacto final (.jar) listo para despliegue.

**Herramientas utilizadas:** Docker, GitHub Actions.

### Integración Continua - Frontend (React)

**Objetivo:** Validar la calidad del código y asegurar la estabilidad del frontend antes del despliegue.

**Pasos del proceso:**
- Clonación del código fuente desde GitHub.
- Instalación de dependencias con **npm**.
- Análisis de la calidad del código con **ESLint**.
- Ejecución de pruebas unitarias con **Jest**.
- Generación del build optimizado para producción.

**Herramientas utilizadas:** Docker, GitHub Actions.

---

## 4. Continuous Deploy

### Despliegue Continuo - Backend

**Objetivo:** Construir y desplegar automáticamente el backend en la nube para garantizar su disponibilidad y escalabilidad.

**Pasos del proceso:**
- Construcción de la imagen Docker del backend.
- Subida de la imagen a **Google Cloud Run**.
- Despliegue automático del backend con actualización de la versión en producción.

**Herramientas utilizadas:** Docker, GitHub Actions, Google Cloud Run.

### Despliegue Continuo - Frontend

**Objetivo:** Asegurar que el frontend se actualice automáticamente en producción después de cada cambio en la rama principal.

**Pasos del proceso:**
- Construcción del frontend utilizando Docker.
- Carga del build generado en **Firebase Hosting**.
- Publicación de la nueva versión en producción.

**Herramientas utilizadas:** Docker, GitHub Actions, Firebase Hosting.

### Publicación Automática en Tiendas Móviles

**Objetivo:** Automatizar la generación de versiones de la aplicación y su publicación en tiendas de aplicaciones móviles.

**Pasos del proceso:**
- Generación del paquete de la aplicación (.apk para Android y .ipa para iOS) utilizando **Capacitor**.
- Firma del paquete con claves de desarrollador certificadas.
- Subida automática a Google Play Console y Apple App Store Connect utilizando **GitHub Actions**.
- Revisión y lanzamiento de la actualización en producción.

**Herramientas utilizadas:** Docker, GitHub Actions, Capacitor.

---

Este documento en Markdown integra el contenido del archivo original "Tecnología.docx" utilizando la estructura y formato de la plantilla de ejemplo. Puedes copiar este texto en tu editor y ajustarlo según tus necesidades.