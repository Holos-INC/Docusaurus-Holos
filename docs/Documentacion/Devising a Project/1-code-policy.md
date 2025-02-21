# Política de Código

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
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

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC)

---

## Control de Versiones

| Fecha       | Versión | Descripción           |
|------------|---------|-----------------------|
| 19/02/2025 | v1.0    | Creación de documento |

---

## Índice de contenido
1. [Introducción](#1-introducción)
2. [Política de ramas](#2-política-de-ramas)
3. [Política de código](#3-política-de-código)
4. [Política de PRs](#4-política-de-prs)
5. [Política de versionado](#5-política-de-versionado)

---

## 1. Introducción
En este documento se tratará la política de código a seguir para poder llevar adelante el proyecto Holos de manera sencilla y ordenada, permitiendo realizar una gestión de código y del cambio lo más ordenada posible.

---

## 2. Política de ramas

### 1. Ramas permanentes

Existen dos ramas principales:

- **`main`** (rama de producción): Contiene la versión estable y desplegada. Solo se fusionan cambios desde `release/*` mediante Pull Requests aprobadas.
- **`develop`** (rama de desarrollo): Contiene la última versión en desarrollo. Se fusionan cambios desde `feature/*`, `bugfix/*` y `hotfix/*` una vez aprobados y se usa para pruebas internas antes de generar una rama `release/*`.

### 2. Ramas temporales

Las ramas temporales servirán para realizar los cambios que después serán llevados a otras ramas.

#### **Feature (`feature/*`)**
- Se crean a partir de `develop`.
- Nombradas según la funcionalidad que se vaya a realizar y generadas a partir de la issue correspondiente.
- Se fusionarán en `develop` mediante Pull Request después de revisión.

#### **Bugfix (`bugfix/*`)**
- Se crean a partir de `develop`.
- Se usan para solucionar errores antes del lanzamiento.
- Se fusionan en `develop` mediante Pull Request.

#### **Release (`release/*`)**
- Se crean a partir de `develop` cuando se congela una versión para lanzamiento.
- Se realizan pruebas finales y ajustes menores.
- Se fusionan en `main` y `develop` cuando están listas.

#### **Hotfix (`hotfix/*`)**
- Se crean a partir de `main` cuando se necesita corregir un problema crítico.
- Se fusionan en `main` y `develop` tras la solución.

### 3. Reglas para las Ramas

#### **Uso de Pull Requests (PRs) obligatorias:**
- Todo cambio debe pasar por una PR antes de ser fusionado.
- Revisada por al menos otro desarrollador.
- Debe pasar pruebas automáticas antes de la fusión.

#### **Revisión de Código:**
- Toda PR debe incluir una descripción clara del cambio.
- Debe cumplir con las reglas de estilo y calidad del código.

#### **Convención de nombres:**
- `feature/nombre-funcionalidad`
- `bugfix/descripción-corta`
- `release/version` (ej. `release/1.2.0`)
- `hotfix/descripción-corta`

#### **Estrategia de fusiones:**
- Se usa `merge` para fusionar `release/*` y `hotfix/*` en `main`.
- Se usa `rebase` o `squash` en `develop` para mantener un historial limpio.

#### **Automatización con CI/CD:**
- `develop`: Despliegue automático en un entorno de prueba.
- `main`: Despliegue automático en producción después de aprobación.

## 3. Política de código
Esta política establece los principios fundamentales que todos los desarrolladores deben seguir para contribuir de manera eficiente y ordenada al proyecto.

El código debe ser claro, comprensible y bien estructurado para facilitar su lectura y mantenimiento. La aplicación de los principios SOLID y de buenas prácticas de desarrollo contribuirá a una arquitectura más robusta y modular.

Para evitar inconsistencias, es fundamental seguir las guías de estilo del lenguaje de programación utilizado en el proyecto. Esto incluye mantener nombres de variables, funciones y clases que sean claros y descriptivos, evitando abreviaciones innecesarias o nombres ambiguos.

Toda modificación debe ser revisada por al menos un miembro del equipo antes de ser integrada a la rama principal.

Cada commit debe contener un mensaje claro y conciso que explique los cambios realizados, evitando commits que acumulen modificaciones no relacionadas.

## 4. Política de PRs
Para mantener un flujo de trabajo ordenado y asegurar la calidad del código, se seguirá la siguiente política para la creación y aprobación de Pull Requests (PRs):
- Cada PR debe estar asociado a una tarea o incidencia del proyecto.
- Los PRs deben ser lo más pequeños y enfocados posible, evitando grandes cambios en una sola solicitud.
- Se debe proporcionar una descripción clara de los cambios realizados y su impacto.
- Antes de solicitar revisión, el autor debe asegurarse de que el código se compila y pasa todas las pruebas automatizadas.
- Se requiere al menos una aprobación de otro miembro del equipo antes de fusionar el PR.
- No se debe fusionar un PR si existen comentarios pendientes sin resolver.

## 5. Política de versionado
Cuando el código se encuentre en la rama develop y haya pasado por las pruebas pertinentes para pasar a la rama de producción, se creará una versión la cual seguirá el versionado vX.Y.Z, siendo X una versión mayor, normalmente habrá una por entregable, Y una versión menor o funcionalidad añadida y Z el arreglo de algún bug en producción, estas últimas se versionan tras el uso de una rama hotfix
