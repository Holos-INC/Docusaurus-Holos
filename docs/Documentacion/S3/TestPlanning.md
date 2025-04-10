# Gestión de feedback de usuarios piloto

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
| Juan Antonio Moreno Moguel  |  Redactor                      |


**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios | Autor                 |
|---------|------------|------------------------|------------------------|
| v1.0    | 25/03/2025 | Creación del documento | Juan Antonio Moreno Moguel  |

---

## Índice de Contenidos  
1. [Resumen](#1-resumen)  
2. [Metodología seguida](#2-metodología-seguida)  
3. [Resultados finales](#3-resultados-finales)  
4. [Lecciones aprendidas](#4-lecciones-aprendidas)  
5. [Objetivos del Testing](#5-objetivos-del-testing)  
6. [Alcance del Testing](#6-alcance-del-testing)  
7. [Planificación y Ejecución](#7-planificación-y-ejecución)  


## 1. Resumen  
Documento que define la estrategia de pruebas para garantizar la calidad del proyecto, cubriendo:  
- Pruebas unitarias, de integración y E2E.  
- Cobertura mínima del 70% del código.  
- Herramientas y responsables asignados.  


## 2. Metodología seguida  
- **Enfoque ágil**: Integración continua con GitHub Actions/Jenkins.  
- **Pirámide de testing**: Priorización de pruebas unitarias sobre E2E.  
- **Checklists**: Validación de requisitos antes de cada release.  

## 3. Resultados finales  

### Cobertura de código  
| Módulo   | Objetivo | Realizado |  
|----------|----------|-----------|  
| Backend (Java) | ≥70%     | 74%       |  
| Frontend (JS)  | ≥70%     | 70%       |  
| **Total**      | ≥70%     | 72%       |


## 4. Lecciones aprendidas  

###  Éxitos:  
- Mocking de APIs redujo tiempo de pruebas en un 40%.  
- JaCoCo en CI bloqueó 3 PRs con cobertura < 70%.  

###  Mejoras para próximos sprints:  
- Añadir pruebas de estrés con K6 para endpoints críticos.  
- Incluir 2 dispositivos más en testing manual (iPhone 15, Pixel 8).  

## 5. Objetivos del Testing  

###  Cumplidos:  
- 72% cobertura (objetivo: 70%).  
- 0 bugs críticos en producción.  

###  Nuevos objetivos:  
- 75% cobertura para próximo release.  
- Reducir latencia APIs a < 2s.  

## 6. Alcance del Testing  

### Backend (Spring Boot)  
-  Pruebas unitarias: 74% cobertura (JUnit).  
-  Pruebas de integración: Validación de interacciones entre servicios RESTful utilizando Postman y Spring Test.  
-  Cobertura de casos: 85% de endpoints críticos probados.
-  Identificado: Latencia alta en 2 endpoints, requiere optimización.

### Frontend (React Native)  
-  Pruebas E2E: 100% flujos críticos (Detox).  
-  Mejora pendiente: Aumentar cobertura de componentes al 75%.  

## 7. Planificación-y-Ejecución
|Fase	|Duración|	Resultado|
|-|-|-|
|Pruebas CI/CD	|6 días	|100% builds exitosos|
|Testing Manual	|3 días	|5/5 dispositivos OK|