# Análisis de Condiciones de Fallo – Sprint 2

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
**Fecha:** 27/03/2025  
**Versión:** v2.0  

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
| Juan Nuñez Sanchez   |  Redactor                       |
| José María Portela   |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

---

## Índice de Contenidos
1. [Control de Versiones](#1-control-de-versiones)  
2. [Documentación](#2-documentación)  
3. [Portada de Documentos](#3-portada-de-documentos)  
4. [Software](#4-software)  
5. [Entrega](#5-entrega)  
6. [Presentación](#6-presentación)  
7. [Por Hacer](#7-por-hacer)

---

## 1. Control de Versiones

| Fecha      | Versión | Descripción                                  | Autor                   |
|------------|---------|----------------------------------------------|-------------------------|
| 27/03/2025 | v2.0    | Creación del documento para el Sprint 2      | Juan Núñez Sánchez     |

---

## 2. Documentación

A continuación, se listan los documentos obligatorios y/o recomendados para este **Sprint 2**. Se debe garantizar que todos estén correctamente ubicados en la carpeta `docs/S2` (o la ruta que se haya definido para la entrega del Sprint 2) y que cumplan con las directrices indicadas en clase:

| Estado | Documento                           | Descripción                                                                                                                                        |
|--------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| ✔️ | KBreport.md                           | Contribuciones a la base de conocimiento. Debe incluir: enlace a la base común de conocimiento, contenido añadido, feedback recibido y acciones de consolidación. |
| ✔️ | pilotUsers.md                         | Informe de usuarios piloto: lista de UP, plan de comunicación y gestión, feedback, etc.                                                            |
| ✔️ | performanceEvaluation.md              | Evaluación del desempeño individual siguiendo la plantilla en EV.                                                                                  |
| ✔️ | timeEffortReport.md                   | Reporte de tiempo-esfuerzo de cada miembro del grupo, con gráficos incluidos.                                                                      |
| ✔️ | AIusage.md                            | Reporte del uso de la IA (actualizado para Sprint 2).                                                                                              |
| ✔️ | CommitmentAgreement.md                | Acuerdo de compromiso, versión y estado actualizados si procede.                                                                                   |
| ✔️ | pilotUsersCommitmentAgreement.md       | Acuerdo de compromiso de los usuarios piloto (UP).                                                                                                 |
| ✔️ | pilotUsersPerformanceEvaluation.md     | Evaluación de los UP (valoración y puntuación a estudiantes ISPP que actúan como usuarios piloto).                                                 |
| ✔️ | revision.md                           | Revisión de la implementación. Debe incluir mapeo de casos de uso a interacciones, credenciales, datasets de ejemplo, requisitos, enlace a la demo en MP4, etc. |
                                                       |

> **Nota:** Si alguno de los documentos no aplica en este Sprint, se debe justificar en la documentación (por ejemplo, indicando “No aplica en este sprint” o “No se han llevado a cabo acciones de consolidación”).

---

## 3. Portada de Documentos

Todos los documentos deben incluir una portada que cumpla con los requisitos mínimos:

| Requisito                                           | Estado |
|-----------------------------------------------------|--------|
| Número del grupo                                    | ✔️      |
| Nombre del grupo                                    | ✔️      |
| Nombre de la entrega (Sprint 2)                     | ✔️      |
| Título descriptivo (ej. “Diseño de Proyecto #2”)    | ✔️      |
| Tipo de documento (ej. “Revisión de Diseño”, etc.)  | ✔️      |
| Fecha y año                                         | ✔️      |
| Nombres de los miembros del equipo                  | ✔️      |

Es importante verificar que **todos** los documentos en la carpeta `docs/S2` tengan esta portada y que se indique la contribución de cada miembro (redactor, revisor, etc.) cuando sea necesario.

---

## 4. Software

Para este Sprint 2, se mantienen las mismas **condiciones de fallo de software** que en Sprint 1, con especial atención a:

1. **Errores HTTP percibidos por el usuario** ante interacciones válidas.  
2. **Pánicos (crash)** ante interacciones válidas.  
3. **Comportamiento inesperado** en una funcionalidad que debería estar implementada.  
4. **Validaciones deficientes** que permitan enviar formularios con datos obligatorios erróneos o faltantes.  
5. **Gestión inadecuada de permisos** (listar, editar o eliminar datos de otros usuarios sin autorización adecuada).  
6. **Despliegue inestable o código no disponible** antes de la fecha límite.  
7. **Modificación del despliegue** tras la fecha de entrega.  

Dado que se espera que el sistema evolucione, se recomienda realizar pruebas continuas para asegurar que no se introduzcan errores nuevos ni se rompa la funcionalidad existente.

---

## 5. Entrega

### **Formato de Entrega:**

1. **Tag apropiado** para la versión del código y la documentación (ejemplo: 2.0 para #S2).  
2. **GitHub release** con el tag anterior, que incluya un archivo ZIP con todo el contenido del repositorio.  
3. **Enlace al repositorio** de GitHub (el mismo del Sprint 1, pero con las actualizaciones de S2).  
4. **Carpetas separadas** por cada entregable (por ejemplo, `DP` para Diseño de Proyecto, `S1`, `S2`, etc.).  
5. **Presentación (`presentation.pdf`)** específica de este Sprint 2.  
6. **Documentos obligatorios** (ver sección [2. Documentación](#2-documentación)) dentro de la carpeta `docs/S2`.  
7. **Enlace al Docusaurus** (si se mantiene como documentación viva).

> **Condiciones de fallo en la entrega (T-9, T-10, etc.):**  
> - El sistema no esté desplegado o no esté disponible hasta la fecha límite.  
> - Se actualice o modifique el despliegue después de la fecha de entrega.  
> - Falte alguno de los documentos obligatorios o no se cumpla con la estructura mínima solicitada.  
> - Se incumplan los requisitos de etiquetado y “release” en GitHub.  

---

## 6. Presentación

Para la **presentación del Sprint 2**, se aplican las mismas condiciones que en Sprint 1, pero reforzando el cumplimiento de la retroalimentación dada en clase:

1. **Tiempo de presentación**: No exceder el límite (aunque sea por segundos) y no terminar antes del último minuto disponible.  
2. **Consistencia**: La presentación expuesta debe coincidir con la versión entregada en GitHub.  
3. **Legibilidad**: Evitar textos que no se vean en las diapositivas.  
4. **Contenido esperado**: Incluir todos los puntos indicados previamente (retroalimentaciones y requisitos del profesor).  
5. **Justificación de cambios**: Explicar la adopción (o no) de la retroalimentación recibida en clase, incluyendo la sugerencia sobre el uso de la IA o cualquier otra indicación relevante.  

---

## 7. Por Hacer

### **Documentación**  
1. Completar o actualizar los documentos marcados como ❌ en la sección [2. Documentación](#2-documentación).  
2. Verificar que cada documento contenga la portada adecuada.  
3. Organizar los archivos en la carpeta `docs/S2`, siguiendo la estructura definida.  
4. Revisar y actualizar el reporte de uso de IA (`AIusage.md` o equivalente) con lo realizado en este sprint.  

### **Software**  
1. Revisar que no se presenten errores de software descritos en la sección [4. Software](#4-software).  
2. Asegurar el despliegue estable y accesible hasta la fecha límite (sin modificaciones posteriores).  

### **Presentación**  
1. Respetar el tiempo asignado.  
2. Asegurar la coherencia con la documentación entregada (mismo contenido, misma versión).  
3. Incluir las justificaciones de las decisiones tomadas respecto al feedback anterior.  

### **Entrega**  
1. Generar el **tag** correspondiente al Sprint 2 (ejemplo: `v2.0`).  
2. Crear la **GitHub release** con dicho tag y un ZIP con todo el repositorio.  
3. Incluir el enlace del repositorio de GitHub en la plataforma de evaluación.  
4. Subir la **presentación (`presentation.pdf`)** actualizada.  
5. Verificar que el sistema esté desplegado y disponible hasta la fecha límite sin cambios posteriores.  

---

**Fin del Documento**
