# Descripción de las métricas de rendimiento Sprint 2

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
**Fecha:** 26/03/2025  
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
| Joaquín González Ganfornina  |  Redactor                |


**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)

## Índice de Contenidos
1. [Control de Versiones](#1-control-de-versiones)
2. [Introducción](#2-introducción)
3. [Tasa de finalización de tareas a tiempo](#3-tasa-de-finalización-de-tareas-a-tiempo)
4. [Tasa de prompts de la IA](#4-tasa-de-prompts-de-la-ia)
5. [Adecuada participación en Daily Meetings](#5-adecuada-participación-en-daily-meetings)
6. [Adecuado uso de Clockify](#6-adecuado-uso-de-clockify)
7. [Valoración de las tareas](#7-valoración-de-las-tareas)
8. [Valoración total](#8-valoración-total)


---
## 1. Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 26/03/2025 | v1.0    | Creación de documento | Joaquín González Ganfornina      |

---

## 2. Introducción

En el presente documentro se definiran y explicarán detalladamente las métricas usadas por el grupo de trabajo para valorar el rendimiento de los miembros del grupo individualmente.

Para cada métrica, se describirá el proceso de selección de datos, la fórmula usada para calcular la métrica y qué se valora en cada una de ellas.

Cabe destacar que la valoración final puede ser superior a 10, ya que hay métricas que se evalúan sobre 12 puntos. Esto está hecho con el propósito de que el mal rendimiento en alguna de las métricas no perjudique demasiado.

A continuación, se procederá a la explicación de estas métricas.

## 3. Tasa de finalización de tareas a tiempo

Para esta métrica, se tendrán en cuenta las tareas asignadas a los miembros del grupo para este Sprint. 

La tasa de finalización de tareas, será el porcentaje de tareas que se han completado por un miembro del equipo, con respecto a las que se le asignaron. Esta métrica está valorada sobre 10.

La fórmula para calcular esta métrica es la siguiente:

**Tasa de tareas completadas**  
\[
\text{Tasa de tareas completadas} = \frac{\text{Tareas completadas}}{\text{Tareas planeadas}}
\]

## 4. Tasa de prompts de la IA

Para fomentar que los miembros del grupo incluyan prompts útiles al documento de la IA, se ha desarrollado una métrica que evalúa esto mismo. 

Con el objetivo de que los prompts sean de la mayor calidad posible, primero se calcula la calidad media de los pormpts incluidos por el miembro del grupo. La calidad de cada prompt puede tener un valor entre 0 y 4, teniendo en cuenta que:
- Lo ha incluido el propio miemro en el Docusaurus. (+1)
- Se ha subido durante el Sprint. (+1,5)
- Usada para resolver errores, ahorrar tiempo u obtener ideas aplicables al proyecto. (+1,5)

Posteriormente, se aplica un factor de crecimiento a la función, que fomenta que los miembros del grupo incluyan varios prompts pero evita el efecto cobra que se produciría al incluir muchos prompts.

La fórmula para calcular esta métrica es la siguiente:

**Tasa de prompts de la IA**  
\[
\text{Tasa de prompts de la IA} = \left(\frac{1}{N} \sum_{i=0}^{N} Q_i\right) \times \left(1 - e^{-\frac{N}{\lambda}}\right)
\]

Donde:
- N = Número de prompts del alumno
- Qi = Calidad del prompt i.
- λ = Factor de velocidad de crecimiento de la función.

Finalmente, se multiplica este valor por 3, y se obtiene una valoración sobre 12.

## 5. Adecuada participación en Daily Meetings

Esta métrica evalúa la participación útil por los miembros del grupo en las Daily Meetings. Para ello, se calcula la media de la calidad de la información proporcionada en las Daily Meetings. La calidad de cada prompt puede tener un valor entre 0 y 4, teniendo en cuenta que:
- Mínimo 20 palabras por apartado útil. (+1)
- Incluye todos los apartados bien diferenciados. (+1)
- Indicar al menos dos tareas. (+1)
- Haber informado al Project Manager antes de incluirlo en la Daily. (+1)

La fórmula para calcular esta métrica es la siguiente:

**Valoración de las Daily Meetings**  
\[
\text{Valoración de las Daily Meetings} = \left(\frac{1}{N} \sum_{i=0}^{N} Q_i\right) 
\]

Donde:
- N = Número de Daily Meetings realizadas.
- Qi = Calidad de la participación en la reunión i.

Finalmente, se multiplica este valor por 3, y se obtiene una valoración sobre 12.

## 6. Adecuado uso de Clockify

Esta métrica evalúa el correcto uso de Clockify por los miembros del grupo, para facilitar la gestión de este. Para ello se revisará periódicamente Clockify cada 1 o 2 días. Además, se usará una estructura idéntica al apartado anterior, dónde se evalúa la calidad de información proporcionada en Clockify por cada alumno en cada revisión. Esta calidad puede tener valores entre 0 y 4, teniendo en cuenta que:
- No hay entradas nueas desde la revisión anterior. (+1)
- Todas las entradas tienen su tag. (+1)
- Todas las entradas con su proyecto y tarea. (+1)
- Todas las descripciones de al menos 30 palabras. (+1)

Posteriormente, se aplica un factor de crecimiento a la función, que fomenta que los miembros del grupo incluyan varios prompts pero evita el efecto cobra que se produciría al incluir muchos prompts.

La fórmula para calcular esta métrica es la siguiente:

**Valoración de uso de Clokify**  
\[
\text{Valoración de uso de Clokify} = \left(\frac{1}{N} \sum_{i=0}^{N} Q_i\right) 
\]

Donde:
- N = Número de revisiones realizadas.
- Qi = Calidad de Clockify en la revisión i.

Finalmente, se multiplica este valor por 2.5, y se obtiene una valoración sobre 10.
## 7. Valoración de las tareas

Esta métrica evalúa la calidad media de las tareas realizadas por cada miembro del grupo. Para ello, ya persona asignada para revisar la tarea, le asignará un valor a esta, evaluando la calidad del código realizado teniendo en cuenta los documentos de formación de Backend y Frontend.

Se usa una estructura similar a la de las métricas anteriores y la fórmula para calcular esta métrica es la siguiente:

**Valoración de las tareas**  
\[
\text{Valoración feedback de las tareas} = \left(\frac{1}{N} \sum_{i=0}^{N} Q_i\right) 
\]

Donde:
- N = Número de tareas realizadas.
- Qi = Calidad de la tarea i.

Finalmente, se multiplica este valor por 2.5, y se obtiene una valoración sobre 10.

## 8. Valoración total

La valoración total se calcula como la media de las métricas anteriores. Por tanto, la valoración final es:

\[
\text{Valoración total} =
\left(\frac{1}{N} \sum_{i=1}^{N} \text{Métrica}_i \right)
\]

Donde:
- N = Número de métricas usadas.
- Métrica i = Valor de la métrica i.

Para los casos en los que esta fórmula de un valor mayor que 10, la valoración total se ajustará automáticamente a 10.

