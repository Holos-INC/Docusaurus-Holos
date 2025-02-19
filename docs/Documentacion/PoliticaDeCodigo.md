# Documentación Política de Código

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
|------------|---------|-----------------------|
| 19/02/2025 | v1.0    | Creación de documento |

---

## Índice de contenido
1. [Introducción](#1-introducción)
2. [Política de ramas](#2-política-de-ramas)
   - [Ramas permanentes](#1-ramas-permanentes)
   - [Ramas temporales](#2-ramas-temporales)
   - [Reglas para las Ramas](#reglas-para-las-ramas)

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

### Reglas para las Ramas

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
