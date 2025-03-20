# Documentación presentación - Sprint 2

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
**Fecha:** 14/03/2025  
**Versión:** v1.1  

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
| Celia Aguilera  |  Redactora                      |


**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios | Autor                 |
|---------|------------|------------------------|------------------------|
| v1.0    | 20/03/2025 | Creación del documento. | Celia Aguilera  |
| v1.1    | 20/03/2025 |  Inclusión de la información de costes y Costes Incurridos  | María del Carmen Barrera  |

## Índice de Contenidos
1. [Revisión de Competidores](#1-revisión-de-competidores-daniel)
2. [Investigación sobre el Trackeo del Uso de IA](#2-investigación-sobre-el-trackeo-del-uso-de-ia-miguel)
3. [Costes](#3-costes-mcarmen-y-joaquín)
4. [Costes Incurridos](#4-costes-incurridos-mcarmen-y-joaquín)
5. [Demo](#5-demo-gabriel-e-ignacio)
6. [Licencias](#6-licencias-juanan)
7. [Implementación de Términos y Servicios y GDPR](#7-implementación-de-términos-y-servicios-y-gdpr-nico)
8. [Nuevas Métricas para Evaluación del Rendimiento, etc.](#8-nuevas-métricas-para-evaluación-del-rendimiento-etc-joaquín)
9. [Storyboard](#9-storyboard-nerea)
10. [Nuevos Riesgos - Sprint 2](#10-nuevos-riesgos---sprint-2-juan-del-junco)
11. [Usuarios Piloto](#11-usuarios-piloto-nerea)
12. [Planificación o Replanificación de Sprint 2 y 3](#12-planificación-o-replanificación-de-sprint-2-y-3-jmaría)

# Documento de Presentación - Holos

A continuación, se detallan los diferentes puntos a tratar en la presentación, con las personas responsables asignadas. Se debe resumir y destacar lo más importante e imprescindible que debe aparecer en la presentación, con datos específicos. He puesto aquello que considero importante a rellenar, pero si hay algo que no está y creéis importante que se añada en la presentación, por favor añadirlo.

## 1. Revisión de Competidores (Daniel)
- ¿Ha habido algún cambio que deba estar reflejado en la presentación?

Hasta el momento, no hemos identificado la aparición de nuevos competidores relevantes en el mercado, ni los competidores ya establecidos han desarrollado nuevas funcionalidades que puedan amenazar nuestra propuesta de valor. En particular, ninguno de ellos ha integrado una herramienta de gestión visual tan diferenciadora como el sistema de tablero Kanban que ofrecemos en Holos.

Actualmente, seguimos centrando principalmente nuestro análisis en los competidores más directos: Artistree y Fiverr. Estos dos actores son los que ofrecen una oferta más similar a la nuestra en términos de comisiones artísticas personalizadas, lo que los convierte en los competidores más relevantes a monitorizar.

Artistree, al ser una plataforma dedicada a las comisiones artísticas, sigue siendo uno de nuestros principales puntos de referencia, ya que comparte el mismo enfoque de mercado. Por otro lado, Fiverr, aunque no está especializado exclusivamente en comisiones artísticas, es un jugador importante debido a su gran audiencia y la variedad de servicios que ofrece en el ámbito artístico y creativo.


## 2. Investigación sobre el Trackeo del Uso de IA (Miguel)
- Conclusiones sobre cómo podríamos implementar la detección de una obra de arte generada por IA.

- Análisis del número de prompts utilizados y datos clave.

- Métrica que utilizó Borrow(creo), de alucinaciones.


## 3. Costes (MCarmen y Joaquín) (Costes actuales, se esperan modificaciones para la siguiente presentación)

* Capex
  - **Recursos humanos:** 76.638,90 € (En esta cifra vienen incluida los costes Sociales, un impuesto del 30% sobre el coste   salarial bruto )
  - **Recursos materiales:** 
    - Licencias: 3.734,64 €
    - Cuenta Bancaria: 3.000,00 €
    - Alquiler de la oficina: 3.400,00 €
    - Publicidad: 2.300,00 €
    - Portátiles: 10.200,00 €
  
  - **Costes totales incurridos en el proyecto (Sin incluir la reserva de gestión):** 99.273,54 €
  - **Reserva de gestión (15%):** 14.931,12 € 

  - **Coste total del proyecto (Capex): 114.164,57 €**

* Opex

  - **Recursos humanos:** 6.553,04 €
   - **Recursos materiales:** 
      - Licencias: 371,84 € €
      - Alquiler de la oficina: 850,00 €
      - Publicidad: 787,00 €

    - **Coste total de mantenimiento (Opex): 8.561,88 €**



En todos los escenarios (caso optimista, pesimista y neutro), la aplicación crece un 5% respecto al mes anterior respecto a los usuarios artistas, esto no es equitativo a las comisiones realizadas dado a que estas crecen según la fórmula:

**(Nº de artistas de ese mes *0,42 * 2) + (Nº de ese mes *0,51 *3) + (Nº de artistas de ese mes * 0,07*5)**

Los porcentajes (en tantos por uno en esta representación) han sido obtenidos mediantes las encuestas realizadas a los usuarios pilotos y representan el porcentaje de usuarios artistas que realizan una cantidad u otra de comisiones al mes.
Los valores enteros representan el nº de comisiones que realizan los artistas.

Nuestra aplicación ha considerado (según los datos obtenidos por la encuesta realizada a los usuarios pilotos) para hacer los costes que el rango de los precios de las obras que se van a vender en nuestra aplicación son:

- 5-15€
- 15-30€
- 30-50€
- 50-75€
- 75-100€

La distribución de las obras en estos rangos se ha realizado mediante los datos obtenidos a través de la encuesta mencionada anteriormente.

También cabe mencionar que el precio de la tarifa premium para los artistas es de 4,99€

**Casos analizados**

El análisis ha sido realizado con vistas a 2 años.

En nuestro alálisis hemos considerado atraer cómo máximo entre un 3% y un 8% del total de los artistas digitales de españa que se estiman entree 100.000 a 200.000 artistas. (Consulta realizada a la fecha de 13 de marzo de 2025 (prompt https://chatgpt.com/share/67d1aa43-4f18-800f-a359-99d2adbf93b4)) 

  **- Caso pesimista**

  Se ha considerado que un 25% de los artistas están subscritos a la tarifa premium.

|Mes|Nº de artistas|Nº de artistas premium|Nº de comisiones|Recaudado a través de las comisiones|Recaudado a través de las suscripciones premium para artistas|Ingresos totales (No acumulados)|
|--|-----|------|-----|------|----- |----- |
|1|1302|326|3541|6.204,60 €|1.624,25 €|7.828,85 €|
|24|3999|1000|10878|19.057,59 €|4.988,91 €|348.399,38 €| 


En relación con los usuarios clientes esperamos tener unos 6500 al final de los dos años.

* TCO

- A los 6 meses: 165.360,69 €
- Al año: 216.570,40 €
- A los 2 años: 319.050,72 €



Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 23 meses, es decir, casi a los 2 años. 

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/rentabilidad_caso_p_s2.PNG" alt="Universidad de Sevilla" width="550"/>
</p>


  **- Caso neutro**

Se ha considerado que un 30% de los artistas están subscritos a la tarifa premium.

|Mes|Nº de artistas|Nº de artistas premium|Nº de comisiones|Recaudado a través de las comisiones|Recaudado a través de las suscripciones premium para artistas|Ingresos totales (No acumulados)|
|--|-----|------|-----|------|----- |----- |
|1|1953|586|5312|10.519,67 €|2.923,64 €|13.443,31 €|
|24|5999|1800|16316|32.311,42 €|8.980,03 €|598.254,23 €| 


En relación con los usuarios clientes esperamos tener unos 9000 al final de los dos años.

* TCO

  - A los 6 meses: 165.386,47 €
  - Al año: 216.630,73 €
  - A los 2 años: 319.219,39  €

Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 13 meses. 

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/rentabilidad_caso_n_s2.PNG" alt="Universidad de Sevilla" width="700"/>
</p>


  **- Caso optimista**

Se ha considerado que un 35% de los artistas están subscritos a la tarifa premium.

|Mes|Nº de artistas|Nº de artistas premium|Nº de comisiones|Recaudado a través de las comisiones|Recaudado a través de las suscripciones premium para artistas|Ingresos totales (No acumulados)|
|--|-----|------|-----|------|----- |----- |
|1|2605|912|7086|15.411,18 €|4.549,63 €|19.960,81 €|
|24|8001|2800|21764|47.335,81 €|13.974,30 €|888.296,06 €| 


En relación con los usuarios clientes esperamos tener unos 12000 al final de los dos años.

* TCO
  - A los 6 meses: 165.410,07 €
  - Al año: 216.685,96  €
  - A los 2 años: 319.373,81  €

Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 8 meses.  

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/rentabilidad_caso_o_s2.PNG" alt="Universidad de Sevilla " width="700"/>
</p>


## 4. Costes Incurridos (MCarmen y Joaquín)
- Evaluación de costes actuales vs. planificación inicial.


| Semanas | Gastos acumulados incurridos | Gastos estimados |
|---------|-----------------------------|------------------|
| 1       | 31.182,20 €                 | 22.502,00 €      |
| 2       | 32.491,30 €                 | 30.112,97 €      |
| 3       | 34.062,22 €                 | 37.723,95 €      |
| 4       | 35.371,32 €                 | 45.334,92 €      |

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/gastos_incuridos_s2.PNG" alt="Universidad de Sevilla " width="700"/>
</p>




## 5. Demo (Gabriel e Ignacio)
- Seguimiento del feedback del profesor:
  - Añadir zooms para mejorar visibilidad.
  - Ajustar velocidad de la demo.
  - Acompañarla de un audio hablado.


## 6. Licencias (Juanan)
- Número de horas de licencia utilizadas en GitHub Actions y herramientas similares.

- Tecnologías empleadas y sus licencias correspondientes.

- Conclusiones sobre requerimientos legales para cumplimiento normativo y prevención de delitos informáticos.


## 7. Implementación de Términos y Servicios y GDPR (Nico)
- Impacto del GDPR en la implementación de Holos.

- Estrategias de cumplimiento normativo.


## 8. Nuevas Métricas para Evaluación del Rendimiento, etc. (Joaquín)
- Definir métricas y todo lo relativo que deba estar en la presentación.

- ¿Alguna automatizada?


## 9. Storyboard (Nerea)
- Estrategia de anuncios para distintos públicos:
  - Anuncio para usuarios.
  
  - Anuncio para inversores (datos, cifras y proyecciones).
  
  - Anuncio para clientes.


## 10. Nuevos Riesgos - Sprint 2 (Juan del Junco)

Durante este sprint, se han identificado nuevos riesgos que podrían afectar el desarrollo y entrega del proyecto. A continuación, se detallan estos riesgos junto con sus respectivos planes de mitigación:

### **R17 - Falta de organización en la gestión del sprint**
- **Descripción:** Se han identificado problemas en la planificación del sprint anterior, lo que provocó una distribución desigual del trabajo y dificultades para cumplir con los objetivos.  
- **Impacto:** Retrasos en las tareas críticas y posibles bloqueos en el desarrollo.  
- **Plan de mitigación:** Se han implementado reuniones de planificación más detalladas para mejorar la asignación de tareas y el control del sprint.

### **R18 - Carga de trabajo desigual entre los miembros del equipo**
- **Descripción:** Algunos integrantes del equipo han experimentado sobrecarga de trabajo, mientras que otros han tenido menos tareas asignadas.  
- **Impacto:** Desmotivación y reducción de la eficiencia del equipo.  
- **Plan de mitigación:** Se ha implementado un sistema de seguimiento en GitHub Projects para equilibrar la carga de trabajo de manera más eficiente.

### **R19 - No conseguir desplegar la aplicación**
- **Descripción:** En el sprint anterior, no se logró el despliegue exitoso de la aplicación, lo que afectó la validación de funcionalidades.  
- **Impacto:** Riesgo de no contar con una versión funcional en producción.  
- **Plan de mitigación:** Se han asignado responsables específicos para el despliegue y se realizarán pruebas intermedias en entornos controlados antes de la entrega final.

### **R20 - Desmotivación y agotamiento de algunos integrantes del equipo**
- **Descripción:** La carga de trabajo y el estrés pueden afectar la motivación del equipo, reduciendo la productividad.  
- **Impacto:** Posible disminución del rendimiento y conflictos internos.  
- **Plan de mitigación:** Se han establecido espacios de comunicación para detectar problemas a tiempo y se busca equilibrar mejor las tareas entre los integrantes.

### **R21 - No alcanzar la entrega**
- **Descripción:** Existen retrasos en algunas tareas clave, lo que podría comprometer la entrega final del sprint.  
- **Impacto:** Riesgo de incumplimiento en los plazos y baja calidad en la entrega.  
- **Plan de mitigación:** Se han establecido checkpoints intermedios para validar el progreso y asegurar que las funcionalidades críticas estén listas a tiempo.


## 11. Usuarios Piloto (Nerea)
- Análisis del feedback obtenido en el primer envío.

- Evaluación de la calidad del feedback.

- Calendario de fechas de envío y funcionalidades probadas en cada fase.

- Evaluación del desempeño de los usuarios piloto.


## 12. Planificación o Replanificación de Sprint 2 y 3 (JMaría)
