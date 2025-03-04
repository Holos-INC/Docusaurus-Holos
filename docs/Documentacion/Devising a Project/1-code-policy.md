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
6. [Política de commits](#6-política-de-commits)

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

## 6. Política de commits
Para mantener un historial de cambios limpio, organizado y comprensible, se establece la siguiente política de commits basada en convenciones estándar.

### 1. Formato del mensaje de commit

Cada commit debe seguir la convención de formato:

`<tipo>: <descripción corta y clara>`

Ejemplo:
- feat: add form validation in user registration
- fix: fix authentication issue with OAuth
- docs: update installation guide

### 2. Tipos de commits

Los commits deben clasificarse en una de las siguientes categorías:

| **Tipo**  | **Descripción** |
|-----------|----------------|
| **feat**  | Añadir una nueva funcionalidad |
| **fix**   | Corrección de errores |
| **docs**  | Cambios en documentación |
| **style** | Cambios de formato que no afectan el código (espacios, tabulaciones, comas, etc.) |
| **test**  | Adición o modificación de pruebas |

### 3. Buenas prácticas para commits

- **Cada commit debe representar un cambio lógico y autónomo.** Evitar commits demasiado grandes con múltiples cambios no relacionados.
- **Los mensajes deben ser claros y concisos.** Evitar mensajes genéricos como *"cambios"*, *"arreglos"* o *"actualización"*.
- **Usar inglés si el equipo lo requiere.** En caso contrario, escribir mensajes en español de forma estructurada.
- **Commits frecuentes pero significativos.** No acumular demasiados cambios en un solo commit.

## 7. Política de Issues

Para garantizar una gestión eficiente del proyecto, todas las tareas, mejoras y errores se registran y gestionan a través de issues en GitHub. Se establecen las siguientes reglas para su correcta creación y mantenimiento.

### 1. Tipos de Issues

El repositorio maneja tres tipos principales de issues:

| **Tipo de Issue** | **Descripción** |
|------------------|----------------|
| **Bug** | Para reportar errores en el código o comportamiento inesperado. |
| **Feature** | Para solicitar nuevas funcionalidades o mejoras en el sistema. |
| **Task** | Para tareas específicas de trabajo que no están directamente relacionadas con bugs o nuevas funcionalidades. |

Cada issue debe clasificarse correctamente en una de estas categorías para facilitar su gestión.

---

### 2. Creación de Issues

Cada issue debe seguir esta estructura:

#### **Formato del título**
El título debe seguir esta convención:
`Task <número> - <Breve descripción>`

Ejemplo:
`Task 9 - Implementar Milestones`

#### **Roles**
Debe incluir los nombres de los responsables de la tarea con su rol asignado.  

Ejemplo:
```
Roles:

Juan Antonio - Eq. Desarrollo
José María - Project Manager y Eq. Tester & QA
```
#### **Descripción de la Tarea**
Debe proporcionar un detalle claro de las actividades a realizar.

Ejemplo:

```plaintext
### Descripción tarea:

Realizar las siguientes tareas para cumplir el objetivo:

1. Crear entidad Milestone según el UML.
2. Añadir el repositorio, con los métodos necesarios.
3. Añadir los servicios, donde se añadirá toda la lógica del negocio.
4. Añadir los controladores, donde se gestionan las llamadas al Frontend.
5. Gestionar los permisos en las rutas.
```

#### **Información del Sprint**
Cada issue debe incluir detalles del sprint en el que se trabajará.  

Ejemplo:
```plaintext
Sprint: Sprint 1
Estado: In Progress
Prioridad: P2
Tamaño: XS
Estimación: 0.75
Iteración: [Seleccionar Iteración]
Fecha de inicio: Mar 3, 2025
Fecha de fin: Mar 5, 2025
Tipo de código (si no es tarea de código, no se selecciona): [Backend / Frontend / DevOps]
```

### 3. Gestión de Issues

- **Creación:** Cada issue debe asignarse a un responsable y clasificarse como `Bug`, `Feature` o `Task`.
- **Seguimiento:** Se actualizará el estado (`To Do`, `In Progress`, `In Review`, `Done`) conforme avance el desarrollo.
- **Cierre:** Una issue se cerrará solo cuando su código/documentación asociada haya sido fusionada en la rama principal.

Además, se deben usar **labels** para facilitar su categorización y seguimiento.

#### **Etiquetas (Labels)**

| **Label** | **Descripción** |
|-----------|----------------|
| **documentation** | Mejoras o adiciones a la documentación. |
| **bug** | Algo no está funcionando correctamente. |
| **duplicate** | La issue o PR ya existe. |
| **enhancement** | Nueva funcionalidad o mejora. |
| **good first issue** | Ideal para nuevos colaboradores. |
| **help wanted** | Se necesita atención adicional en la tarea. |
| **invalid** | La issue no es válida o no tiene suficiente información. |
| **question** | Se requiere más información antes de proceder. |
| **review** | En espera de revisión y aprobación. |
| **wontfix** | No se trabajará en esta issue. |

### 4. Política de nombrado en Clockify

Para asegurar la trazabilidad entre las issues y el tiempo trabajado, cada entrada en Clockify debe seguir el siguiente formato en la descripción:

```plaintext
Task <número de tarea> - <Descripción corta>
```

**Ejemplo:**

```plaintext
Task 11 - Mejora documento Gestión del Código
```
