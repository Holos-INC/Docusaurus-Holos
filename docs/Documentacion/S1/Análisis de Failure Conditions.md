# Análisis de Condiciones de Fallo - Sprint 1

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
**Fecha:** 10/03/2025  
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
| José María Portela   |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

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

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 10/03/2025 | v1.0    | Creación de documento | María del Mar Ávila      |
---

## 2. Documentación

| Estado | Documento | Descripción |
|--------|-----------|-------------|
| ❌ | KBreport.md | Contribuciones a la base de conocimiento. Debe incluir: enlace a la base común de conocimiento, contenido añadido por el grupo, feedback recibido y anotaciones sobre el feedback general, y acciones de consolidación realizadas. Si no hay, especificar "No consolidation actions have been carried out". |
| ✔️ | pilotUsers.md | Reporte de usuarios piloto: lista de UP, plan de comunicación y gestión, gestión del feedback, etc. |
| ❌ | performanceEvaluation.md | Evaluación del desempeño individual siguiendo la plantilla en EV. |
| ❌ | timeEffortReport.md | Reporte del tiempo-esfuerzo de cada miembro del grupo, incluyendo gráficos. |
| ✔️ | AIusage.md | Reporte del uso de la IA. |
| ✔️ | CommitmentAgreement.md | Acuerdo de compromiso con versión, estado, etc. |
| ✔️ | pilotUsersCommitmentAgreement.md | Acuerdo de compromiso de los UP. |
| ✔️ | pilotUsersPerformanceEvaluation.md | Evaluación de los UP. Debe valorar y puntuar a los estudiantes de ISPP que hacen de usuarios piloto. |
| ✔️ | revision.md | Revisión de la implementación. Debe incluir un mapeo explícito de los casos de uso a interacciones en el software, datos necesarios para la revisión (usuarios, credenciales, ejemplos de datasets), requisitos potenciales, enlace a la demo en MP4 y otros documentos relevantes. |

---

## 3. Portada de Documentos

| Requisito | Estado |
|------------|---------|
| Número del grupo | ✔️ |
| Nombre del grupo | ❌ |
| Nombre de la entrega (Sprint 1) | ❌ |
| Título descriptivo | ✔️ |
| Nombre y apellidos de los miembros con su contribución | ❌ |

---

## 4. Software

**No puede ocurrir lo siguiente:**

1. Una interacción válida con el sistema genera un error HTTP percibido por el usuario.
2. Una interacción válida provoca un pánico (crash).
3. Una interacción válida no tiene el comportamiento esperado.
4. No se detecta el envío de formularios con datos erróneos o faltantes en campos obligatorios.
5. Un usuario puede listar, editar o eliminar datos de otro usuario cuando solo el administrador debería gestionarlos.

---

## 5. Entrega

### **Formato de entrega:**

1. Tag apropiado para versiones de código y documentación (ejemplo: 0.1 para #DP, 1.0 para #S1, etc.).  
2. GitHub release con el tag anterior, incluyendo un ZIP con el contenido del repositorio.  
3. Incluir el enlace al repositorio de GitHub.  
4. Carpetas diferentes por cada entregable.  
5. Incluir presentación (`presentation.pdf`).  
6. Los documentos de la sección "Documentación" deben estar en la carpeta `docs`.  
7. Incluir en la carpeta `docs` el enlace al Docusaurus.  

**Supone un fallo en la entrega:**  

1. El sistema no está desplegado o no está disponible hasta julio.  
2. Modificar o actualizar el despliegue después de la fecha límite de entrega.  

---

## 6. Presentación

**No puede ocurrir lo siguiente:**  

1. La presentación dura más de lo exigido.  
2. La presentación termina antes del último minuto.  
3. La presentación expuesta es diferente a la entregada.  
4. Hay texto en las diapositivas que no se ve.  
5. Se omiten puntos esperados en la presentación según lo discutido en clases previas.  
6. No se reacciona al feedback de clase sin justificación explícita.  
   - **IMPORTANTE:** Mencionar la sugerencia de Pablo sobre la IA en la última clase y explicar si se implementará o no y por qué.  

---

## 7. Por Hacer

### **Documentación:**  
1. Modificar los documentos con ✔️ para que tengan el nombre esperado y actualizar el contenido del documento de IA.  
2. Crear los documentos con ❌ que no existen o no están en el Docusaurus.  
3. Corregir las portadas de los documentos para cumplir los requisitos.  
4. Organizar la documentación en dos carpetas: `DP` (entregable anterior) y `S1` (entregable actual), dentro de `docs`.  
5. Incluir la presentación cuando esté lista.  

### **Software:**  
1. Comprobar que no ocurren errores de software mencionados en la sección correspondiente.  

### **Presentación:**  
1. Asegurar que se cumplen todos los requisitos, especialmente el punto 6 del feedback.  

### **Entrega:**  
1. Crear el tag apropiado para versiones de código y documentación.  
2. Hacer la GitHub release con el tag anterior, incluyendo un ZIP del repositorio.  
3. Incluir el enlace del repositorio de GitHub.  
4. Incluir en la carpeta `docs` el enlace al Docusaurus.  
5. Garantizar un despliegue funcional y mantenible.  


