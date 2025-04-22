# Lecciones Aprendidas del S2

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
**Fecha:** 22/04/2025  
**Versión:** v1.1

**Grupo de prácticas:** G1  
**Nombre del grupo de prácticas:** ISPP - Grupo 1 - Holos

**Miembros del equipo:**
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

| Miembro              | Responsabilidad         |
|-----------------------|--------------------------|
| Ignacio Warleta       | Redactor                 |
| Gabriel Vacaro        | Revisor                  |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

---

## Tabla de versiones

| Versión | Fecha       | Descripción de cambios       | Autor                |
|---------|-------------|------------------------------|-----------------------|
| v1.0    | 20/04/2025   | Creación del documento       | Ignacio Warleta       |
| v1.1    | 22/04/2025   | Revisión del documento       | Gabriel Vacaro       |

---

## Índice de Contenidos
1. [Introducción](#introducción)
2. [Análisis de la condición de fallo](#análisis-de-la-condición-de-fallo)
3. [Listado de problemas relacionados](#listado-de-problemas-relacionados)
4. [Metodología y roles](#metodología-y-roles)
5. [Análisis individual de cada problema](#análisis-individual-de-cada-problema)

---

## Introducción

Tras la entrega del Sprint 2, el equipo confiaba en que los resultados serían notablemente mejores que en el primer entregable, ya que se habían aplicado medidas de mejora en aquellos aspectos que anteriormente provocaron fallos. Sin embargo, la evaluación final evidenció un error crítico relacionado con la pasarela de pago, que afectaba directamente a una funcionalidad esencial de la aplicación.

Este documento analiza en detalle el fallo detectado y presenta las acciones correctivas que se han implementado para prevenir su repetición en futuras entregas.
---

## Análisis de la condición de fallo

**Condición de fallo:**  
- Imposibilidad de completar transacciones a través de la pasarela de pago.

**Causas principales:**
- Desconocimiento del funcionamiento específico de Render, la plataforma encargada del despliegue del backend, concretamente en lo referente a sus políticas de despliegue automático.

---

## Listado de problemas relacionados

### 1. **Problemas identificados por el equipo antes de la entrega:**

- Intencionalmente en blanco.

### 2. **Problemas identificados por el equipo después de la entrega:**

- Intencionalmente en blanco.

### 3. **Problemas identificados por el revisor del entregable (profesor):**

- **Fallo funcional en la pasarela de pago que impedía completar correctamente una transacción.**

---

## Metodología y roles

### Metodología seguida

El equipo siguió la metodología SCRUM recomendada a lo largo de la carrera. Para ello se hicieron daily meetings donde se informa de 4 puntos: Tareas realizadas, tareas en proceso, tareas que pueden tener listas para la siguiente daily y problemas encontrados. Se hizo un sprint planning al inicio del sprint donde se crearon y asignaron las issues correspondientes al sprint. Y se hizo al finalizar el sprint un sprint retrospective.

### Roles del equipo

- CELIA AGUILERA CAMINO: Responsable de Redes Sociales.
- JULIA VIRGINIA ANGELES BURGOS: Coordinadora de Frontend.
- MARIA DEL MAR AVILA MAQUEDA: Responsable del aseguramiento de comprobar que cumplimos los criterios para aprobar.
- MARIA DEL CARMEN BARRERA GARRANCHO: Jefe de costes de la aplicación.
- JUAN DEL JUNCO OBREGON: Secretario, es decir, responsable de tomar acta y recoger el feedback.
- MIGUEL ANGEL GOMEZ VELA: Responsable del uso de IA, y de la inclusión de esta en los documentos.
- JOAQUIN GONZALEZ GANFORNINA: Responsable de revisar costes. Responsable de la pasarela de pago.
- DANIEL GUEDES PRECIADOS: Responsable de subir información en la base de conocimiento común.
- NEREA JIMENEZ ADORNA: Responsable de usuarios pilotos.
- JUAN ANTONIO MORENO MOGUEL: Coordinador de Backend. Responsable de que se recojan las métricas del equipo. Responsable del despliegue de backend.
- JAVIER MUÑOZ ROMERO: Responsable de calidad software.
- JUAN NUÑEZ SANCHEZ: Responsable de calidad de documentación.
- NICOLAS PEREZ GOMEZ: Responsable de revisar los competidores.
- FRANCISCO PEREZ LAZARO: Responsable de imagen, manteniendo la homogeneidad en Frontend, Landing Page y Presentaciones.
- JOSE MARIA PORTELA HUERTA: Project Manager, responsable de gestión de problemas entre miembros del grupo, y de asignar, organizar y crear tareas.
- GABRIEL MARÍA VACARO GOYTIA: Secretario, es decir, responsable de tomar acta y recoger el feedback. Y responsable del docusaurus del grupo.
- IGNACIO WARLETA MURCIA: Responsable de que el equipo acate el feedback.

---

## Análisis individual de cada problema

### 1. Fallo detectado en la pasarela de pago.

- **Descripción:** La funcionalidad de la pasarela de pago fue implementada correctamente y verificada en local, sin detectarse errores durante las pruebas. Sin embargo, en el entorno de producción la funcionalidad no estaba disponible, ya que tras realizar el merge de la rama que contenía dicha funcionalidad, la plataforma de despliegue Render no realizó el despliegue automático, tal y como se había asumido erróneamente. Esto provocó que la pasarela no estuviera activa en el momento de la entrega.

- **Origen técnico:** El fallo se originó en el funcionamiento de Render, que no ejecuta despliegues automáticos tras un merge a la rama principal si no se realiza un commit adicional. Esto hizo que la versión desplegada en producción no incluyera la funcionalidad, aunque esta sí estuviera integrada en el repositorio.

- **Origen del proceso:** El equipo no verificó manualmente el estado del despliegue tras el merge, asumiendo que Render había actualizado el entorno de producción de forma automática. Esta falta de comprobación supuso que el error no se detectara hasta que fue señalado tras la entrega.

- **Personas responsables:**  Juan Antonio Moreno Moguel, como encargado del despliegue de backend, era el responsable de verificar que la funcionalidad de la pasarela de pago estuviera correctamente desplegada en producción. Sin embargo, debido a una suposición errónea sobre el funcionamiento de Render —concretamente, que el despliegue se realizaba de forma automática tras cada merge—, este paso de verificación no se llevó a cabo. Se trató de un error humano comprensible, derivado de una falsa confianza en la automatización, que podría haberle ocurrido a cualquier miembro del equipo en una situación similar.
   
- **Acciones mitigadoras:**  Para evitar que este problema vuelva a repetirse, se establecerá como paso obligatorio la verificación manual de cada despliegue tras cualquier merge a la rama principal. Además, se validará que todas las funcionalidades afectadas por dichos cambios funcionen correctamente en el entorno de producción, independientemente de que en local hayan sido previamente validadas. 

Tras la entrega suspensa del S2, hemos verificado cuidadosamente que las acciones correctivas definidas en este documento —como la comprobación manual del estado del despliegue tras cada merge y la validación de funcionalidades en el entorno de producción— se han aplicado de forma efectiva en el entregable S3, asegurando que no se repitieran errores similares.

- **Estado**: Resuelta.



