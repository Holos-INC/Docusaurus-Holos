# Análisis de Costes y TCO - PPL

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
**Versión:** v2.1  

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
| Joaquín González      |  Redactor                       |
| María del Carmen Garrancho  |  Redactora                       |
| María del Mar Ávila  |  Revisora                       | 


**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC)

---

## Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 19/02/2025  | v1.0    | Creación del documento Análisis de costes y TCO del proyecto   | <p>- Joaquín González Ganfornina  </p><p> - María del Carmen   Barrera </p>
| 13/03/2025  | v2.0    | Modificación de los costes en función del nuevo modelo de negocio y tecnologías a usar  |<p>- Joaquín González Ganfornina  </p><p> - María del Carmen Barrera  </p>|
| 13/03/2025  | v2.1    | Modificación de la portada  |<p> - María del Mar Ávila </p> |
| 24/03/2025  | v3.0    |Ajuste de costes por cambios de licencias y servicios empleados |<p> - María del Carmen Barrera   </p> |
| 26/03/2025  | v3.1    |Inclusión de aclaraciones  |<p> - María del Carmen Barrera  </p> |
| 27/03/2025  | v3.2    |Inclusión de aclaraciones  |<p> - María del Carmen Barrera  </p> |
| 29/04/2025  | v3.3    |Inclusión de una nueva licencia |<p> - María del Carmen Barrera  </p> |
| 01/05/2025  | v3.4    |Inclusión de las expectativas de crecimiento e información para los inversores|<p> - María del Carmen Barrera  </p> |
---

## Índice de contenido

1. [Introducción](#1-introducción)  
2. [CapEx](#2-capex)  
3. [OpEx](#3-opex)  
4. [Rentabilidad de la aplicación](#4-rentabilidad-de-la-aplicación)  
   4.1 [Caso pesimista](#41-caso-pesimista)  
   &nbsp;&nbsp;&nbsp;&nbsp;4.1.1 [Cálculos del TCO pesimista](#411-cálculos-del-tco-pesimista)  
   4.2 [Caso neutro](#42-caso-neutro)  
   &nbsp;&nbsp;&nbsp;&nbsp;4.2.1 [Cálculos del TCO neutro](#421-cálculos-del-tco-neutro)  
   4.3 [Caso optimista](#43-caso-optimista)  
   &nbsp;&nbsp;&nbsp;&nbsp;4.3.1 [Cálculos del TCO optimista](#431-cálculos-del-tco-optimista)
5. [Rentabilidad (Resumen)](#5-rentabilidad-resumen)  
6. [Expectativas de crecimiento](#6-expectativas-de-crecimiento) 
7. [Inversores](#7-inversores) 
8. [Bibliografía](#6-bibliografía)   



## 1. Introducción

Este documento detalla los costes previstos para la implementación, el mantenimiento de nuestra aplicación, Holos. Además, de un  análisis de rentabilidad de la plataforma.  

Este estudio nos guiará en la toma de decisiones estratégicas y nos permitirá llevar una gestión financiera eficaz a lo largo del ciclo de vida del proyecto. 



## 2. CapEx 

### 2.1 Costes de los recursos humanos 

El costo por hora de cada tipo de trabajador se ha obtenido por dos vías: 

1.- A partir de los salarios de perfiles informáticos publicados por la Junta de Andalucía en 2018 (documento anexo a la documentación).  

2.- A través de la plataforma Indeed, para ciertos roles no incluidos en el documento de la Junta de Andalucía. Los roles consultados en [Indeed](https://es.indeed.com/career/salaries?from=gnav-homepage) fueron marketing, frontend developer y backend developer. 

Para el desarrollo del proyecto, el equipo contaba con 17 participantes. Estos se dividen en un director de proyecto, 6 desarrolladores de frontend, 5 desarrolladores de backend, 2 jefes  de  proyecto/coordinadores  y  3  empleados  de  marketing. 


Aplicando los salarios según las fuentes mencionadas previamente, y teniendo en cuenta que cada empleado trabaja 10 horas semanales durante 15 semanas, el gasto total de los recursos humanos durante el desarrollo de la aplicación es de **76.638,90 €.** 


**Gastos de personal durante el desarrollo**

| **Tipo de trabajador**                    | **Cantidad** | **Costo por hora** | **Horas semanales** | **Nº de horas totales** | **Coste salarial bruto** | **Costes sociales (30% de los costes brutos)** | **Coste total del personal** |
|--------------------------------------------|--------------|--------------------|---------------------|------------------------|-------------------------|--------------------------------------------------|-----------------------------|
| Director de proyecto     |    1    |   45,40 €  |    10     |    150      |   6.810,00 €      | 2.043,00 €        |   8.853,00 €    |
| Frontend developer       |    6    | 22,27 €    |   10      |    150      |   20.043,00 €     | 6.012,90 €       |  26.055,90 €    |
| Backend developer        |     5   |  23,39 €   |   10      |    150      |  17.542,50 €      | 5.262,75 €       |  22.805,25 €      |
| Jefe de proyecto / Coordinadores  |     2 |  22,50 €   | 10 |   150       |  6.750,00 €        | 2.025,00 €      |  8.775,00 €    |
| Marketing                |      3  |  17,35 €   |  10       |    150      |  7.807,50 €       | 2.342,25 €       |  0.149,75 €  |
| **Total**                                 |      |     |      |       |         |       | **76.638,90 €**    |




### 2.2 Costes de los recursos materiales 

La empresa ha decidido invertir en diversos recursos materiales como en licencias de software o hardware para el uso de los trabajadores o en publicidad. Los precios de las licencias de software se han consultado en sus páginas web oficiales, las cuales se han referenciado en la bibliografía. En algunos casos, se ha tenido que pasar el precio de dólar a euro, por lo que se han tomado en cuenta la diferencia entre los valores de las monedas a fecha 13 de marzo de 2025.


**Gastos en los recursos materiales**


| Recurso material                    | Cantidad | Costo mes por unidad | Nº Meses | Coste total    |
|------------------------------------|----------|-----------------------|----------|----------------|
| Licencia GitHub Teams              | 17       | 3,83 €                | 4        | 260,44 €       |
| Licencia GitHub Copilot Business   | 17       | 18,24 €               | 4        | 1.240,32 €     |
| Licencia Docker Team               | 1        | 14,38 €               | 4        | 57,52 €        |
| Licencia Java Oracle               | 17       | 14,38 €               | 4        | 977,84 €       |
| Licencia Render Professional       | 5        | 18,24 €               | 4        | 364,80 €       |
| Render Key Value Standard          | 1        | 29,42 €               | 4        | 117,68 €       |
| Microsoft Teams Essentials         | 17       | 4,48 €                | 4        | 304,64 €       |
| Alquiler de Oficina                | 1        | 850,00 €              | -        | 3.400,00 €     |
| Portátiles *                        | 17       | 12,50 €               | -        | 212,50 €       |
| Publicidad                         | -        | 2.300,00 €            | -        | 2.300,00 €     |
| Dominio web                        | 1        | 1,00 €                | -        | 4,00 €         |
| Creación de una sociedad limitada                    | -        | 3.000,00 €            | -        | 3.000,00 €     |
| Google Cloud SQL                   | 1        | 146,76 €              | 4        | 587,04 €       |
| Google Cloud App                   | 1        | 30,13 €               | 4        | 120,52 €       |
| ChatGPT Plus                       | 13       | 18,39 €               | 4        | 956,28 €       |
| GitHub Copilot                | 4        | 9,22 €               | 4        | 147,52 €       |
| SonarQube                          | 1        | 29,42 €               | 4        | 117,68 €       |
| Clockify                           | 17       | -                     | -        | -              |
| EmailJS**                           | 1       | -                     | -        | -              |
| **Coste total**                          |          |            |         | **14.168,78 €** |

*Suponiendo un coste de 600 € por portátil y una amortización total en un plazo de 4 años, el gasto mensual por amortización sería de 12,50 € 

**No se generan costes asociados a esta aplicación durante el desarrollo del proyecto, ya que en esta fase la versión gratuita proporciona el soporte necesario.

### 2.3 Costes totales de desarrollo 

Una vez calculado el coste total del proyecto, se aplica un incremento del 15 % en concepto de reservas de gestión.

**Gastos de capital**

|Costes incurridos en el proyecto |Coste |
| - | - |
|Coste total del personal |76.638,90   €|
|Coste total del material |14.168,78 €|
|Total | 90.807,68 €|



|Coste del proyecto |90.807,68 €|
| - | - |
|% de reserva |15,00%|
|Total de la reserva |13.621,15 €|



|Coste total del proyecto con reservas |104.428,83 €|
| - | - |





## 3. OpEx

El costo del mantenimiento de la aplicación se ha calculado asumiendo que los trabajadores continuarán dedicando 10 horas semanales al proyecto, durante 4 semanas al mes, equivalentes a un mes completo. 



**Coste mensual de la aplicación respecto a los gastos del personal**



| Tipo de trabajador    | Cantidad | Costo por hora | Horas semanales | Nº de horas totales | Coste salarial bruto | Costes sociales (30% de los costes brutos) | Coste total del personal |
|-----------------------|----------|---------------|----------------|-------------------|------------------|--------------------------------|------------------------|
| Frontend developer   | 2        | 22,27 €      | 10             | 40                | 1.781,60 €       | 534,48 €        | 2.316,08 €       |
| Backend developer    | 2        | 23,39 €      | 10             | 40                | 1.871,20 €       | 561,36 €        | 2.432,56 €   |
| Marketing            | 2        | 17,35 €      | 10             | 40                | 1.388,00 €       | 416,40 €        | 1.804,40 €   |
| **Costo mensual del personal de mantenimiento** | | | | | | | **6.553,04 €** |





|Nº total de trabajadores encargados del mantenimiento |6|
| - | - |


En la tabla a continuación, se muestran los gastos de los recursos materiales que serán destinados al mantenimiento. 


**Gastos de los recursos materiales de mantenimientos**


| Recurso material                  | Cantidad | Costo mes | Nº Meses | Coste total |
|----------------------------------|----------|-----------|----------|--------------|
| Licencia GitHub Teams            | 4        | 3,83 €    | 1        | 15,32 €      |
| Licencia GitHub Copilot Business| 4        | 18,24 €   | 1        | 72,96 €      |
| Licencia Docker Team             | 1        | 14,38 €   | 1        | 14,38 €      |
| Licencia Java Oracle             | 4        | 14,38 €   | 1        | 57,52 €      |
| Licencia Render Professional     | 1        | 18,24 €   | 1        | 18,24 €      |
| Render Key Value Pro Plus        | 1        | 229,84 €  | 1        | 229,84 €     |
| Microsoft Teams Essentials       | 1        | 4,48 €    | 1        | 26,88 €      |
| Alquiler de Oficina              | 1        | 850,00 €  | 1        | 850,00 €     |
| Dominio web                      | 1        | 1,00 €    | 1        | 1,00 €       |
| Publicidad                       | 1        | 787,00 €  | -        | 787,00 €     |
| Clockify                         | -        | -         | -        | -            |
| Google Cloud sql                 | 1        | 272,25 €  | 1        | 272,25 €     |
| Google Cloud App                 | 1        | 41,16 €   | 1        | 41,16 €      |
| ChatGPT Plus                     | 1        | 18,39 €   | 1        | 73,56 €      |
| GitHub Copilot              | 1        | 9,22,37 €   | 2        | 18,44 €     |
| SonarQube                    | 1        | 29,42 €        | 1          | 29,42 €        |
| Portátiles*                  | 6        | 12,50 €        | 1          | 75,00 €        |
| EmailJS                           | 1       | 13,18 €                     | 1        | 13,18 €               |
| **Coste total de mantenimiento** |          |                |            | **2.596,15 €** |

*Al finalizar la clase, se consultó al profesorado cómo imputar la amortización de los portátiles durante la fase de mantenimiento de la aplicación. Se comentó la posibilidad de poder considerar dicha amortización como un gasto de mantenimiento, al tratarse de una herramienta esencial para que los trabajadores puedan desempeñar su trabajo. Además, de ser un gasto fijo y permanente.

Se ha estimado una amortización mensual de 12,50 € por portátil, tomando como referencia un valor de compra de 600 € y una vida útil de 4 años.

**OpEx**

|Costo mensual de mantenimiento (Opex)| **9.149,19 €**|
| :- | - |
|Costo mensual del personal de mantenimiento | 6.553,04 €|
|Coste mensual de los recursos materiales para el mantenimiento | 2.596,15 €|




## 4. Rentabilidad de la aplicación 
En España se puede estimar aproxidamente entre 100.000 a 200.000 artistas digitales españoles activos. En nuestro análisis hemos considerado atraer cómo máximo entre un 2% y un 8% de estos. Para ello, se han realizado diversas estimaciones sobre la cantidad de artistas que podrían unirse a nuestra plataforma, considerando tres escenarios: pesimista, neutro y optimista.

Para la recopilación de datos sobre la cantidad de comisiones u obras personalizadas que los artistas realizan mensualmente, los precios a los que suelen vender sus obras y su disposición a pagar por nuestra tarifa premium, hemos utilizado la encuesta "Usuario Pilot (Artista)", en la que participaron 14 personas.

Los resultados obtenidos indican que:

**Cantidad de Comisiones Mensuales**

- El 42,9% de los artistas tiene entre 1 o 2 comisiones al mes.
- El 50%  entre 3 o 4 comisiones al mes. 
- El 7,1% entre 5 0 6 comisiones al mes.

Por ellos, se ha establecido la función lineal mensual de comisiones realizadas a través de la plataforma de:
-  **Nº de artistas x 0,42 x 2 comisiones + Nº de artistas x 0,51 x 3 comisiones + Nº de artistas x 0,07 x 5 comisiones**

**Precios por Comisión**

- 28,6% de los artistas cobra entre 5€ y 15€ por comisión.
- 28,6% cobra entre 15€ y 30€ por comisión.
- 21,4% cobra entre 30€ y 50€ por comisión.
- 14,3% cobra entre 50€ y 75€ por comisión.
- 7,1% cobra entre 75€ y 100€ por comisión.

Es importante destacar que, según los datos obtenidos, no se observa una relación directa entre la cantidad de comisiones que un artista maneja simultáneamente y el precio que cobra por sus obras. Por lo tanto, esta variable no será considerada como un factor determinante en el análisis.


Por otro lado, el 50% de los artistas afirma que consideran un precio razonable la cuota de la tarifa premium a 4,99 €, mientras que el resto incluso estarían dispuestos a pagar una cuantía  mayor.

De acuerdo con el plan de negocio de la aplicación, se establece una comisión del 6% sobre el precio de cada obra y un crecimiento constante de usuarios artistas en cada caso (Pesimista, neutro y optimista) de un 5% cada mes.

En este análisis, se asumirá que los gastos de licencia variables serán contratados a un precio fijo y constante cada mes. Además, el valor de dichos gastos se tomará según el escenario optimista, garantizando así su cobertura en cualquier situación.

Además, se ha considerado que durante los 2 primeros meses se utilizará la pasarela de pago Strike para realizar las transcacciones tanto de las obras como de ejecutar el cobro de las comisiones. Strike establece una comisión de 1,5% + 0,25€ por transferencia realizada. Este método de pago se ha incluido de forma temporal, ya que nuestra intención es gestionar los cobros y pagos a través de una sociedad limitada. Sin embargo, crearla cuesta 3.000 €, y si este proyecto continúa en el mundo real, tenemos pensado obtener dicha cuantía a partir de los beneficios de los dos primeros meses. Esto no ha sido reflejado como tal en los costes, ya que, dentro del marco de la asignatura, no tenemos límite de presupuesto y, en el mundo real, no tenemos que cubrir cubrir gastos de desarrollo ni contamos con trabajadores a nuestro cargo de mantenimmiento. Por lo tanto, en el Capex se ha incluido directamente el coste asociado a la creación de una sociedad limitada, mientras que en los beneficios de los dos primeros meses se ha descontado el gasto derivado del uso de un sistema de pago externo.

Strike por el uso de sus servicios cobra 1,5% de la cuantía que se esté transferiendo, más 25 céntimos por cada transacción.

### 4.1 Caso pesimista
Para estimar el valor aproximado de una obra dentro de un rango determinado, se ha calculado la media de dicho rango. Además, para determinar los porcentajes de obras realizadas en cada intervalo de precio, nos hemos basado en los resultados de la encuesta mencionada previamente. 
Para el caso pesimista, se han cambiado ligeramente los porcentajes de las comisiones, para que se tenga un mayor número de comisiones a un menor precio y un menor número de comisiones a un mayor precio. Los porcentajes son los siguientes:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio* |
|----------------|---------------------------------|----------------|
| 5-15€         | 36%                          | 10,00 €        |
| 15-30€        | 30%                          | 22,50 €        |
| 30-50€        | 19%                          | 40,00 €        |
| 50-75€        | 11%                          | 62,50 €        |
| 75-100€       | 5%                           | 87,50 €        |

*En este precio no se considera el 6% extra que impone la plataforma por comisión.

Hemos considerado en el caso pesimista que en un plazo de 2 años vamos a conseguir 3999 artistas empezando con el primer mes con 1302 artistas y creciendo constantemente un 5% por ciento a partir de este. En relación con los usuarios clientes esperamos tener unos 6500 al final de los dos años.

Tabla de incrementos mensuales de número de artistas y  comisiones cada mes:

| Número de mes | Número de artistas | Número de comisiones totales |
|--------------|------------------|-------------------------|
| 1            | 1302             | 3541                    |
| 2            | 1367             | 3719                    |
| 3            | 1435             | 3904                    |
| 4            | 1507             | 4100                    |
| 5            | 1583             | 4305                    |
| 6            | 1662             | 4520                    |
| 7            | 1745             | 4746                    |
| 8            | 1832             | 4983                    |
| 9            | 1924             | 5232                    |
| 10           | 2020             | 5494                    |
| 11           | 2121             | 5769                    |
| 12           | 2227             | 6057                    |
| 13           | 2338             | 6360                    |
| 14           | 2455             | 6678                    |
| 15           | 2578             | 7012                    |
| 16           | 2707             | 7362                    |
| 17           | 2842             | 7731                    |
| 18           | 2984             | 8117                    |
| 19           | 3133             | 8523                    |
| 20           | 3290             | 8949                    |
| 21           | 3455             | 9396                    |
| 22           | 3627             | 9866                    |
| 23           | 3809             | 10360                   |
| 24           | 3999             | 10878                   |

Distribución de dichas comisiones en los rangos de precios establecidos:

| Número de mes | 5-15€ | 15-30€ | 30-50€ | 50-75€ | 75-100€ |
|----------------|-------|--------|--------|--------|---------|
| 1  | 1275  | 1062   | 673    | 390    | 177     |
| 2  | 1339  | 1116   | 707    | 409    | 186     |
| 3  | 1406  | 1171   | 742    | 429    | 195     |
| 4  | 1476  | 1230   | 779    | 451    | 205     |
| 5  | 1550  | 1291   | 818    | 474    | 215     |
| 6  | 1627  | 1356   | 859    | 497    | 226     |
| 7  | 1709  | 1424   | 902    | 522    | 237     |
| 8  | 1794  | 1495   | 947    | 548    | 249     |
| 9  | 1884  | 1570   | 994    | 576    | 262     |
| 10 | 1978  | 1648   | 1044   | 604    | 275     |
| 11 | 2077  | 1731   | 1096   | 635    | 288     |
| 12 | 2181  | 1817   | 1151   | 666    | 303     |
| 13 | 2290  | 1908   | 1208   | 700    | 318     |
| 14 | 2404  | 2003   | 1269   | 735    | 334     |
| 15 | 2524  | 2104   | 1332   | 771    | 351     |
| 16 | 2650  | 2209   | 1399   | 810    | 368     |
| 17 | 2783  | 2319   | 1469   | 850    | 387     |
| 18 | 2922  | 2435   | 1542   | 893    | 406     |
| 19 | 3068  | 2557   | 1619   | 938    | 426     |
| 20 | 3222  | 2685   | 1700   | 984    | 449     |
| 21 | 3383  | 2819   | 1785   | 1034   | 470     |
| 22 | 3552  | 2960   | 1875   | 1085   | 493     |
| 23 | 3729  | 3108   | 1968   | 1140   | 518     |
| 24 | 3916  | 3263   | 2067   | 1197   | 545     |

Los benefícios esperados son: 

| Número de mes  | Precio total de las obras (Sin contar la comisión del 6%) | Cuantía obtenida por la plataforma (6% de comisión) | Comisión por el uso de la pasarela de pago | Benefícios obtenidos por las obras|
|----------------|------------------------------------------------------------|------------------------------------------------------------------------|---------------------------------------------|--------------------------------------------------------|
| 1              | 103.410,05 €                                               | 6.204,60 €                                                            | 3.492,50 €                                  | 2.712,11 €                                             |
| 2              | 108.580,55 €                                               | 6.514,83 €                                                            | 3.667,12 €                                  | 2.847,71 €                                             |
| 3              | 114.009,58 €                                               | 6.840,57 €                                                            | -                                           | 6.840,57 €                                             |
| 4              | 119.710,06 €                                               | 7.182,60 €                                                            | -                                           | 7.182,60 €                                             |
| 5              | 125.695,56 €                                               | 7.541,73 €                                                            | -                                           | 7.541,73 €                                             |
| 6              | 131.980,34 €                                               | 7.918,82 €                                                            | -                                           | 7.918,82 €                                             |
| 7              | 138.579,35 €                                               | 8.314,76 €                                                            | -                                           | 8.314,76 €                                             |
| 8              | 145.508,32 €                                               | 8.730,50 €                                                            | -                                           | 8.730,50 €                                             |
| 9              | 152.783,74 €                                               | 9.167,02 €                                                            | -                                           | 9.167,02 €                                             |
| 10             | 160.422,93 €                                               | 9.625,38 €                                                            | -                                           | 9.625,38 €                                             |
| 11             | 168.444,07 €                                               | 10.106,64 €                                                           | -                                           | 10.106,64 €                                            |
| 12             | 176.866,28 €                                               | 10.611,98 €                                                           | -                                           | 10.611,98 €                                            |
| 13             | 185.709,59 €                                               | 11.142,58 €                                                           | -                                           | 11.142,58 €                                            |
| 14             | 194.995,07 €                                               | 11.699,70 €                                                           | -                                           | 11.699,70 €                                            |
| 15             | 204.744,82 €                                               | 12.284,69 €                                                           | -                                           | 12.284,69 €                                            |
| 16             | 214.982,06 €                                               | 12.898,92 €                                                           | -                                           | 12.898,92 €                                            |
| 17             | 225.731,17 €                                               | 13.543,87 €                                                           | -                                           | 13.543,87 €                                            |
| 18             | 237.077,61 €                                               | 14.221,06 €                                                           | -                                           | 14.221,06 €                                            |
| 19             | 248.868,61 €                                               | 14.932,12 €                                                           | -                                           | 14.932,12 €                                            |
| 20             | 261.312,04 €                                               | 15.678,72 €                                                           | -                                           | 15.678,72 €                                            |
| 21             | 274.377,64 €                                               | 16.462,66 €                                                           | -                                           | 16.462,66 €                                            |
| 22             | 288.096,53 €                                               | 17.285,79 €                                                           | -                                           | 17.285,79 €                                            |
| 23             | 302.501,35 €                                               | 18.150,08 €                                                           | -                                           | 18.150,08 €                                            |
| 24             | 317.626,42 €                                               | 19.057,59 €                         s                                  | -                                           | 19.057,59 €                                            |



- **A través de las tarifas para los artistas** 

Según los resultados de la encuesta sobre la disposición de los artistas a pagar una cuota mensual, se han establecido una tarifa premium. En el caso pesimista, según los datos de las encuestas, se ha supuesto que un 25% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Mes | Usuarios premium 25% | Cuantía obtenida por el plan premium (4,99€) | Comisión del sistema de pago por gestionar las suscripciones| Benefícios obtenidos por las suscripciones |
|-----|-----------------------|---------------------------------------------|------------------------------------------------------------------------|------------------------------------------|
| 1   | 326                   | 1.624,25 €                                  | 325,01 €                                                               | 1.299,23 €                               |
| 2   | 342                   | 1.705,46 €                                  | 341,26 €                                                               | 1.364,19 €                               |
| 3   | 359                   | 1.790,73 €                                  | -                                                                      | 1.790,73 €                               |
| 4   | 377                   | 1.880,27 €                                  | -                                                                      | 1.880,27 €                               |
| 5   | 396                   | 1.974,28 €                                  | -                                                                      | 1.974,28 €                               |
| 6   | 415                   | 2.072,99 €                                  | -                                                                      | 2.072,99 €                               |
| 7   | 436                   | 2.176,64 €                                  | -                                                                      | 2.176,64 €                               |
| 8   | 458                   | 2.285,48 €                                  | -                                                                      | 2.285,48 €                               |
| 9   | 481                   | 2.399,75 €                                  | -                                                                      | 2.399,75 €                               |
| 10  | 505                   | 2.519,74 €                                  | -                                                                      | 2.519,74 €                               |
| 11  | 530                   | 2.645,72 €                                  | -                                                                      | 2.645,72 €                               |
| 12  | 557                   | 2.778,01 €                                  | -                                                                      | 2.778,01 €                               |
| 13  | 585                   | 2.916,91 €                                  | -                                                                      | 2.916,91 €                               |
| 14  | 614                   | 3.062,76 €                                  | -                                                                      | 3.062,76 €                               |
| 15  | 644                   | 3.215,89 €                                  | -                                                                      | 3.215,89 €                               |
| 16  | 677                   | 3.376,69 €                                  | -                                                                      | 3.376,69 €                               |
| 17  | 711                   | 3.545,52 €                                  | -                                                                      | 3.545,52 €                               |
| 18  | 746                   | 3.722,80 €                                  | -                                                                      | 3.722,80 €                               |
| 19  | 783                   | 3.908,94 €                                  | -                                                                      | 3.908,94 €                               |
| 20  | 823                   | 4.104,39 €                                  | -                                                                      | 4.104,39 €                               |
| 21  | 864                   | 4.309,61 €                                  | -                                                                      | 4.309,61 €                               |
| 22  | 907                   | 4.525,09 €                                  | -                                                                      | 4.525,09 €                               |
| 23  | 952                   | 4.751,34 €                                  | -                                                                      | 4.751,34 €                               |
| 24  | 1000                  | 4.988,91 €                                  | -                                                                      | 4.988,91 €                               |


Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso pesimista a lo largo de 24 meses serían los siguientes:

| Mes | Ingresos de la aplicación | Ingresos acumulados |
|-----|----------------------------|----------------------|
| 1   | 4.011,34 €                | 4.011,34 €           |
| 2   | 4.211,91 €                | 8.223,24 €           |
| 3   | 8.631,30 €                | 16.854,55 €          |
| 4   | 9.062,87 €                | 25.917,42 €          |
| 5   | 9.516,01 €                | 35.433,43 €          |
| 6   | 9.991,81 €                | 45.425,25 €          |
| 7   | 10.491,40 €               | 55.916,65 €          |
| 8   | 11.015,98 €               | 66.932,63 €          |
| 9   | 11.566,77 €               | 78.499,40 €          |
| 10  | 12.145,11 €               | 90.644,51 €          |
| 11  | 12.752,37 €               | 103.396,88 €         |
| 12  | 13.389,99 €               | 116.786,87 €         |
| 13  | 14.059,49 €               | 130.846,35 €         |
| 14  | 14.762,46 €               | 145.608,81 €         |
| 15  | 15.500,58 €               | 161.109,40 €         |
| 16  | 16.275,61 €               | 177.385,01 €         |
| 17  | 17.089,39 €               | 194.474,40 €         |
| 18  | 17.943,86 €               | 212.418,27 €         |
| 19  | 18.841,06 €               | 231.259,32 €         |
| 20  | 19.783,11 €               | 251.042,43 €         |
| 21  | 20.772,26 €               | 271.814,70 €         |
| 22  | 21.810,88 €               | 293.625,57 €         |
| 23  | 22.901,42 €               | 316.526,99 €         |
| 24  | 24.046,49 €               | 340.573,49 €         |


- **Importe total a  Stripe por el uso de su sistema de pago** 

| Cuantía total que recibe Stripe por la prestación de sus servicios | 7.825,89 € |
| - | - |

-------------------------------------------------






 #### 4.1.1 Cálculos del TCO pesimista ####

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los benefícios, considerando los ingresos generados y descontando los costes asociados. 

Para los costes se ha estimado en el escenario pesimista  un tráfico de 10.500 imágenes, cada una con un peso aproximado de 5 MB, y 12.000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijos para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.



**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx a lo largo de 6 meses | TCO           | Ingresos totales | Benefícios       |
|--------------|---------------|-----------------------------|----------------|------------------|------------------|
| 104.428,83 €  | 9 9.160,09 €   | 54.935,14 €                 | 159.362,97 €  | 45.425,25 €      | -113.938,72 €     |




**TCO a al año** 


| CapEx        | OpEx mensual | OpEx a lo largo de 12 meses | TCO           | Ingresos totales | Benefícios       |
|--------------|---------------|------------------------------|----------------|------------------|------------------|
| 104.428,83 €  | 9.160,09 €   | 109.883,87 €                 | 214.312,70 €  | 116.786,87 €     | -97.525,84 €      |




**TCO a a los 2 años** 


| CapEx        | OpEx mensual | OpEx a lo largo de 24 meses | TCO           | Ingresos totales | Benefícios       |
|--------------|---------------|------------------------------|----------------|------------------|------------------|
| 104.428,83 €  |9.160,09 €   | 219.842,23 €                 | 324.271,06 €  | 340.573,49 €     | 16.302,42 €   |


Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable aproximadamente a los **23 meses**, es decir, casi a los 2 años. 


<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/caso_pesimista.PNG" alt="Rentabilidad caso pesimista" width="550"/>
</p>


### 4.2 Caso neutro

Para el caso neutro, se han usado exactamente los resultados obtenidos según la encuesta. Por tanto el porcentaje de las comisiones según su rango de precio es:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio* |
|----------------|---------------------------------|----------------|
| 5-15€         | 28,6%                           | 10,00 €        |
| 15-30€        | 28,6%                           | 22,50 €        |
| 30-50€        | 21,4%                           | 40,00 €        |
| 50-75€        | 14,3%                           | 62,50 €        |
| 75-100€       | 7,1%                            | 87,50 €        |

*En este precio no se considera el 6% extra que impone la plataforma por comisión.

Hemos considerado en el caso pesimista que en un plazo de 2 años vamos a conseguir 5999 artistas empezando con el primer mes con 1953 artistas y creciendo constantemente un 5% por ciento a partir de este. En relación con los usuarios clientes esperamos tener unos 9000 al final de los dos años.

Tabla de incrementos mensuales de número de artistas y  comisiones cada mes:

| Número de mes | Número de artistas | Número de comisiones totales |
|--------------|-------------------|----------------------------|
| 1  | 1953  | 5312  |
| 2  | 2051  | 5578  |
| 3  | 2153  | 5857  |
| 4  | 2261  | 6149  |
| 5  | 2374  | 6457  |
| 6  | 2493  | 6780  |
| 7  | 2617  | 7119  |
| 8  | 2748  | 7475  |
| 9  | 2885  | 7848  |
| 10 | 3030  | 8241  |
| 11 | 3181  | 8653  |
| 12 | 3340  | 9086  |
| 13 | 3507  | 9540  |
| 14 | 3683  | 10017 |
| 15 | 3867  | 10518 |
| 16 | 4060  | 11044 |
| 17 | 4263  | 11596 |
| 18 | 4476  | 12176 |
| 19 | 4700  | 12784 |
| 20 | 4935  | 13424 |
| 21 | 5182  | 14095 |
| 22 | 5441  | 14799 |
| 23 | 5713  | 15539 |
| 24 | 5999  | 16316 |


Distribución de dichas comisiones en los rangos de precios establecidos:

| Número de mes | 5-15€ | 15-30€ | 30-50€ | 50-75€ | 75-100€ |
|----|------|------|------|------|------|
| 1  | 1519 | 1519 | 1137 | 760  | 377  |
| 2  | 1595 | 1595 | 1194 | 798  | 396  |
| 3  | 1675 | 1675 | 1253 | 838  | 416  |
| 4  | 1759 | 1759 | 1316 | 879  | 437  |
| 5  | 1847 | 1847 | 1382 | 923  | 458  |
| 6  | 1939 | 1939 | 1451 | 970  | 481  |
| 7  | 2036 | 2036 | 1523 | 1018 | 505  |
| 8  | 2138 | 2138 | 1600 | 1069 | 531  |
| 9  | 2245 | 2245 | 1680 | 1122 | 557  |
| 10 | 2357 | 2357 | 1764 | 1178 | 585  |
| 11 | 2475 | 2475 | 1852 | 1237 | 614  |
| 12 | 2598 | 2598 | 1944 | 1299 | 645  |
| 13 | 2728 | 2728 | 2042 | 1364 | 677  |
| 14 | 2865 | 2865 | 2144 | 1432 | 711  |
| 15 | 3008 | 3008 | 2251 | 1504 | 747  |
| 16 | 3158 | 3158 | 2363 | 1579 | 784  |
| 17 | 3316 | 3316 | 2481 | 1658 | 823  |
| 18 | 3482 | 3482 | 2606 | 1741 | 864  |
| 19 | 3656 | 3656 | 2736 | 1828 | 908  |
| 20 | 3839 | 3839 | 2873 | 1920 | 953  |
| 21 | 4031 | 4031 | 3016 | 2016 | 1001 |
| 22 | 4233 | 4233 | 3167 | 2116 | 1051 |
| 23 | 4444 | 4444 | 3325 | 2222 | 1103 |
| 24 | 4666 | 4666 | 3492 | 2333 | 1158 |

Los benefícios esperados son: 
| Número de mes  | Precio total de las obras (Sin contar la comisión del 6%) | Cuantía obtenida por la plataforma (6% de comisión) | Comisión por el uso de la pasarela de pago | Benefícios obtenidos por las obras|
|-----|-----------------------------|--------------------------|--------------------| ----|
| 1   | 103.410,05 €                | 6.204,60 €               | 3.492,50 €         | 2.712,11 €             |
| 2   | 108.580,55 €                | 6.514,83 €               | 3.667,12 €         | 2.847,71 €             |
| 3   | 114.009,58 €                | 6.840,57 €               | -                  | 6.840,57 €             |
| 4   | 119.710,06 €                | 7.182,60 €               | -                  | 7.182,60 €             |
| 5   | 125.695,56 €                | 7.541,73 €               | -                  | 7.541,73 €             |
| 6   | 131.980,34 €                | 7.918,82 €               | -                  | 7.918,82 €             |
| 7   | 138.579,35 €                | 8.314,76 €               | -                  | 8.314,76 €             |
| 8   | 145.508,32 €                | 8.730,50 €               | -                  | 8.730,50 €             |
| 9   | 152.783,74 €                | 9.167,02 €               | -                  | 9.167,02 €             |
| 10  | 160.422,93 €                | 9.625,38 €               | -                  | 9.625,38 €             |
| 11  | 168.444,07 €                | 10.106,64 €              | -                  | 10.106,64 €            |
| 12  | 176.866,28 €                | 10.611,98 €              | -                  | 10.611,98 €            |
| 13  | 185.709,59 €                | 11.142,58 €              | -                  | 11.142,58 €            |
| 14  | 194.995,07 €                | 11.699,70 €              | -                  | 11.699,70 €            |
| 15  | 204.744,82 €                | 12.284,69 €              | -                  | 12.284,69 €            |
| 16  | 214.982,06 €                | 12.898,92 €              | -                  | 12.898,92 €            |
| 17  | 225.731,17 €                | 13.543,87 €              | -                  | 13.543,87 €            |
| 18  | 237.017,72 €                | 14.221,06 €              | -                  | 14.221,06 €            |
| 19  | 248.868,61 €                | 14.932,12 €              | -                  | 14.932,12 €            |
| 20  | 261.312,04 €                | 15.678,72 €              | -                  | 15.678,72 €            |
| 21  | 274.377,64 €                | 16.462,66 €              | -                  | 16.462,66 €            |
| 22  | 288.096,53 €                | 17.285,79 €              | -                  | 17.285,79 €            |
| 23  | 302.501,35 €                | 18.150,08 €              | -                  | 18.150,08 €            |
| 24  | 317.626,42 €                | 19.057,59 €              | -                  | 19.057,59 €            |


- **A través de las tarifas para los artistas** 

Según los datos de las encuestas, se ha supuesto que un 30% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Mes | Usuarios premium 25% | Cuantía obtenida por el plan premium (4,99€) | Comisión del sistema de pago por gestionar las suscripciones| Benefícios obtenidos por las suscripciones |
|-----|-----------------------|---------------------------------------------|------------------------------------------------------------------------|------------------------------------------|
| 1   | 326                  | 1.624,25 €                       | 325,01 €                  | 1.299,23 €                  |
| 2   | 342                  | 1.705,46 €                       | 341,26 €                  | 1.364,19 €                  |
| 3   | 359                  | 1.790,73 €                       | -                         | 1.790,73 €                  |
| 4   | 377                  | 1.880,27 €                       | -                         | 1.880,27 €                  |
| 5   | 396                  | 1.974,28 €                       | -                         | 1.974,28 €                  |
| 6   | 415                  | 2.072,99 €                       | -                         | 2.072,99 €                  |
| 7   | 436                  | 2.176,64 €                       | -                         | 2.176,64 €                  |
| 8   | 458                  | 2.285,48 €                       | -                         | 2.285,48 €                  |
| 9   | 481                  | 2.399,75 €                       | -                         | 2.399,75 €                  |
| 10  | 505                  | 2.519,74 €                       | -                         | 2.519,74 €                  |
| 11  | 530                  | 2.645,72 €                       | -                         | 2.645,72 €                  |
| 12  | 557                  | 2.778,01 €                       | -                         | 2.778,01 €                  |
| 13  | 585                  | 2.916,91 €                       | -                         | 2.916,91 €                  |
| 14  | 614                  | 3.062,76 €                       | -                         | 3.062,76 €                  |
| 15  | 644                  | 3.215,89 €                       | -                         | 3.215,89 €                  |
| 16  | 677                  | 3.376,69 €                       | -                         | 3.376,69 €                  |
| 17  | 711                  | 3.545,52 €                       | -                         | 3.545,52 €                  |
| 18  | 746                  | 3.722,80 €                       | -                         | 3.722,80 €                  |
| 19  | 783                  | 3.908,94 €                       | -                         | 3.908,94 €                  |
| 20  | 823                  | 4.104,39 €                       | -                         | 4.104,39 €                  |
| 21  | 864                  | 4.309,61 €                       | -                         | 4.309,61 €                  |
| 22  | 907                  | 4.525,09 €                       | -                         | 4.525,09 €                  |
| 23  | 952                  | 4.751,34 €                       | -                         | 4.751,34 €                  |
| 24  | 1000                 | 4.988,91 €                       | -                         | 4.988,91 €                  |

Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso neutro a lo largo de 24 meses serían los siguientes:

| Número de mes | Ingresos de la aplicación | Ingresos acumulados |
|---------------|---------------------------|---------------------|
| 1   | 4.011,34 €                 | 4.011,34 €           |
| 2   | 4.211,91 €                 | 8.223,24 €           |
| 3   | 8.631,30 €                 | 16.854,55 €          |
| 4   | 9.062,87 €                 | 25.917,42 €          |
| 5   | 9.516,01 €                 | 35.433,43 €          |
| 6   | 9.991,81 €                 | 45.425,25 €          |
| 7   | 10.491,40 €                | 55.916,65 €          |
| 8   | 11.015,98 €                | 66.932,63 €          |
| 9   | 11.566,77 €                | 78.499,40 €          |
| 10  | 12.145,11 €                | 90.644,51 €          |
| 11  | 12.752,37 €                | 103.396,88 €         |
| 12  | 13.389,99 €                | 116.786,87 €         |
| 13  | 14.059,49 €                | 130.846,35 €         |
| 14  | 14.762,46 €                | 145.608,81 €         |
| 15  | 15.500,58 €                | 161.109,40 €         |
| 16  | 16.275,61 €                | 177.385,01 €         |
| 17  | 17.089,39 €                | 194.474,40 €         |
| 18  | 17.943,86 €                | 212.418,27 €         |
| 19  | 18.841,06 €                | 231.259,32 €         |
| 20  | 19.783,11 €                | 251.042,43 €         |
| 21  | 20.772,26 €                | 271.814,70 €         |
| 22  | 21.810,88 €                | 293.625,57 €         |
| 23  | 22.901,42 €                | 316.526,99 €         |
| 24  | 24.046,49 €                | 340.573,49 €         |


- **Importe total a  Stripe por el uso de su sistema de pago** 

| Cuantía total que recibe Stripe por la prestación de sus servicios | 12.628,63 € |
| - | - |

-------------------------------------------------

 #### 4.2.1 Cálculos del TCO neutro

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los benefíos netos, considerando los ingresos generados y descontando los costes asociados. 

Para los costes se ha estimado en el escenario pesimista  un tráfico de 16.000 imágenes, cada una con un peso aproximado de 5 MB, y 18.000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijo para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.

**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx a lo largo de 6 meses | TCO           | Ingresos totales | Benefícios        |
|--------------|--------------|-----------------------------|----------------|------------------|-------------------|
| 104.428,83 € | 9.185,05 €   | 54.960,91 €     | 159.387,75 €  | 78.811,60 €      | -80.578,15 €      |





**TCO a al año** 

| CapEx        | OpEx mensual | OpEx a lo largo de 12 meses | TCO           | Ingresos totales | Benefícios        |
|--------------|--------------|------------------------------|----------------|------------------|-------------------|
| 104.428,83 € |  9.185,05 €   | 109.944,2 €    | 214.373,03 €  | 201.350,25 €     | -13.022,78 €      |




**TCO a a los 2 años** 



| CapEx        | OpEx mensual | OpEx a lo largo de 24 meses | TCO           | Ingresos totales | Benefícios        |
|--------------|--------------|------------------------------|----------------|------------------|-------------------|
| 104.428,83 € |  9.185,05 €   | 220.010,89 €    | 324.439,73 €  | 585.625,60 €     | 261.185,87 €  |




Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los **13 meses**. 

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/caso_neutro.PNG" alt="Universidad de Sevilla" width="700"/>
</p>




### 4.3 Caso optimista

Para el caso optimista, se han usado porcentajes mayores para las comisiones más caras y menores para las más baratas, pero teniendo en cuenta los resultados de la encuesta. Por tanto el porcentaje de las comisiones según su rango de precio es:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio* |
|----------------|---------------------------------|----------------|
| 5-15€         | 25%                           | 10,00 €        |
| 15-30€        | 25%                           | 22,50 €        |
| 30-50€        | 25%                           | 40,00 €        |
| 50-75€        | 15%                           | 62,50 €        |
| 75-100€       | 10%                            | 87,50 €        |

*En este precio no se considera el 6% extra que impone la plataforma por comisión.

Hemos considerado en el caso pesimista que en un plazo de 2 años vamos a conseguir 8001 artistas empezando con el primer mes con 2605 artistas y creciendo constantemente un 5% por ciento a partir de este. En relación con los usuarios clientes esperamos tener unos 12000 al final de los dos años.

Tabla de incrementos mensuales de número de artistas y  comisiones cada mes:

| Número de mes | Número de artistas | Número de comisiones totales |
|--------------|--------------------|-----------------------------|
| 1            | 2605               | 7086                        |
| 2            | 2735               | 7440                        |
| 3            | 2872               | 7812                        |
| 4            | 3016               | 8202                        |
| 5            | 3166               | 8613                        |
| 6            | 3325               | 9043                        |
| 7            | 3491               | 9495                        |
| 8            | 3665               | 9970                        |
| 9            | 3849               | 10469                       |
| 10           | 4041               | 10992                       |
| 11           | 4243               | 11542                       |
| 12           | 4455               | 12119                       |
| 13           | 4678               | 12725                       |
| 14           | 4912               | 13361                       |
| 15           | 5158               | 14029                       |
| 16           | 5416               | 14730                       |
| 17           | 5686               | 15467                       |
| 18           | 5971               | 16240                       |
| 19           | 6269               | 17052                       |
| 20           | 6583               | 17905                       |
| 21           | 6912               | 18800                       |
| 22           | 7257               | 19740                       |
| 23           | 7620               | 20727                       |
| 24           | 8001               | 21764                       |



Distribución de dichas comisiones en los rangos de precios establecidos:

| Número de mes | 5-15€ | 15-30€ | 30-50€ | 50-75€ | 75-100€ |
|--------------|-------|--------|--------|--------|--------|
| 1            | 1771  | 1771   | 1771   | 1063   | 709    |
| 2            | 1860  | 1860   | 1860   | 1116   | 744    |
| 3            | 1953  | 1953   | 1953   | 1172   | 781    |
| 4            | 2051  | 2051   | 2051   | 1230   | 820    |
| 5            | 2153  | 2153   | 2153   | 1292   | 861    |
| 6            | 2261  | 2261   | 2261   | 1356   | 904    |
| 7            | 2374  | 2374   | 2374   | 1424   | 950    |
| 8            | 2493  | 2493   | 2493   | 1496   | 997    |
| 9            | 2617  | 2617   | 2617   | 1570   | 1047   |
| 10           | 2748  | 2748   | 2748   | 1649   | 1099   |
| 11           | 2885  | 2885   | 2885   | 1731   | 1154   |
| 12           | 3030  | 3030   | 3030   | 1818   | 1212   |
| 13           | 3181  | 3181   | 3181   | 1909   | 1272   |
| 14           | 3340  | 3340   | 3340   | 2004   | 1336   |
| 15           | 3507  | 3507   | 3507   | 2104   | 1403   |
| 16           | 3683  | 3683   | 3683   | 2210   | 1473   |
| 17           | 3867  | 3867   | 3867   | 2320   | 1547   |
| 18           | 4060  | 4060   | 4060   | 2436   | 1624   |
| 19           | 4263  | 4263   | 4263   | 2558   | 1705   |
| 20           | 4476  | 4476   | 4476   | 2686   | 1790   |
| 21           | 4700  | 4700   | 4700   | 2820   | 1880   |
| 22           | 4935  | 4935   | 4935   | 2961   | 1974   |
| 23           | 5182  | 5182   | 5182   | 3109   | 2073   |
| 24           | 5441  | 5441   | 5441   | 3265   | 2176   |

Los benefícios esperados son: 

| Número de mes  | Precio total de las obras (Sin contar la comisión del 6%) | Cuantía obtenida por la plataforma (6% de comisión) | Comisión por el uso de la pasarela de pago | Benefícios obtenidos por las obras|
|-----|-----------------------------|--------------------------|--------------------| ----|
| 1   | 256.853,00 €  | 15.411,18 € | 7.819,40 €         | 7.591,78 €            |
| 2   | 269.695,65 €  | 16.181,74 € | 8.210,37 €         | 7.971,37 €            |
| 3   | 283.180,43 €  | 16.990,83 € | -                  | 16.990,83 €           |
| 4   | 297.339,45 €  | 17.840,37 € | -                  | 17.840,37 €           |
| 5   | 312.206,43 €  | 18.732,39 € | -                  | 18.732,39 €           |
| 6   | 327.816,75 €  | 19.669,00 € | -                  | 19.669,00 €           |
| 7   | 344.207,59 €  | 20.652,46 € | -                  | 20.652,46 €           |
| 8   | 361.417,96 €  | 21.685,08 € | -                  | 21.685,08 €           |
| 9   | 379.488,86 €  | 22.769,33 € | -                  | 22.769,33 €           |
| 10  | 398.263,41 €  | 23.907,80 € | -                  | 23.907,80 €           |
| 11  | 418.386,47 €  | 25.103,19 € | -                  | 25.103,19 €           |
| 12  | 439.305,38 €  | 26.358,35 € | -                  | 26.358,35 €           |
| 13  | 461.271,08 €  | 27.676,27 € | -                  | 27.676,27 €           |
| 14  | 484.334,64 €  | 29.060,08 € | -                  | 29.060,08 €           |
| 15  | 508.551,37 €  | 30.513,08 € | -                  | 30.513,08 €           |
| 16  | 533.979,84 €  | 32.038,79 € | -                  | 32.038,79 €           |
| 17  | 560.677,89 €  | 33.640,67 € | -                  | 33.640,67 €           |
| 18  | 588.711,78 €  | 35.322,71 € | -                  | 35.322,71 €           |
| 19  | 618.157,12 €  | 37.089,43 € | -                  | 37.089,43 €           |
| 20  | 649.054,74 €  | 38.943,28 € | -                  | 38.943,28 €           |
| 21  | 681.507,48 €  | 40.890,45 € | -                  | 40.890,45 €           |
| 22  | 715.526,52 €  | 42.931,59 € | -                  | 42.931,59 €           |
| 23  | 751.361,99 €  | 45.081,72 € | -                  | 45.081,72 €           |
| 24  | 788.930,09 €  | 47.335,81 € | -                  | 47.335,81 €           |




- **A través de las tarifas para los artistas** 

Según los datos de las encuestas, se ha supuesto que un 35% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Mes | Usuarios premium 25% | Cuantía obtenida por el plan premium (4,99€) | Comisión del sistema de pago por gestionar las suscripciones| Benefícios obtenidos por las suscripciones |
|-----|-----------------------|---------------------------------------------|------------------------------------------------------------------------|------------------------------------------|
| 1   | 912         | 4.549,63 €        | 910,38 €       | 3.639,25 €     |
| 2   | 957         | 4.777,11 €        | 955,90 €       | 3.821,21 €     |
| 3   | 1005        | 5.015,97 €        | -              | 5.015,97 €     |
| 4   | 1055        | 5.266,77 €        | -              | 5.266,77 €     |
| 5   | 1108        | 5.530,11 €        | -              | 5.530,11 €     |
| 6   | 1164        | 5.806,61 €        | -              | 5.806,61 €     |
| 7   | 1222        | 6.096,94 €        | -              | 6.096,94 €     |
| 8   | 1283        | 6.401,79 €        | -              | 6.401,79 €     |
| 9   | 1347        | 6.721,88 €        | -              | 6.721,88 €     |
| 10  | 1414        | 7.057,97 €        | -              | 7.057,97 €     |
| 11  | 1485        | 7.410,87 €        | -              | 7.410,87 €     |
| 12  | 1559        | 7.781,42 €        | -              | 7.781,42 €     |
| 13  | 1637        | 8.170,49 €        | -              | 8.170,49 €     |
| 14  | 1719        | 8.579,01 €        | -              | 8.579,01 €     |
| 15  | 1805        | 9.007,96 €        | -              | 9.007,96 €     |
| 16  | 1895        | 9.458,36 €        | -              | 9.458,36 €     |
| 17  | 1990        | 9.931,28 €        | -              | 9.931,28 €     |
| 18  | 2090        | 10.427,84 €       | -              | 10.427,84 €    |
| 19  | 2194        | 10.949,23 €       | -              | 10.949,23 €    |
| 20  | 2304        | 11.496,69 €       | -              | 11.496,69 €    |
| 21  | 2419        | 12.071,53 €       | -              | 12.071,53 €    |
| 22  | 2540        | 12.675,11 €       | -              | 12.675,11 €    |
| 23  | 2667        | 13.308,86 €       | -              | 13.308,86 €    |
| 24  | 2800        | 13.974,30 €       | -              | 13.974,30 €    |

Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso optimista a lo largo de 24 meses serían los siguientes:

| Número de mes | Ingresos de la aplicación | Ingresos acumulados |
|--------------|--------------------------|----------------------|
| 1   | 11.231,03 €         | 11.231,03 €          |
| 2   | 11.792,58 €         | 23.023,61 €          |
| 3   | 22.006,80 €         | 45.030,40 €          |
| 4   | 23.107,14 €         | 68.137,54 €          |
| 5   | 24.262,49 €         | 92.400,03 €          |
| 6   | 25.475,62 €         | 117.875,65 €         |
| 7   | 26.749,40 €         | 144.625,05 €         |
| 8   | 28.086,87 €         | 172.711,91 €         |
| 9   | 29.491,21 €         | 202.203,12 €         |
| 10  | 30.965,77 €         | 233.168,90 €         |
| 11  | 32.514,06 €         | 265.682,96 €         |
| 12  | 34.139,76 €         | 299.822,72 €         |
| 13  | 35.846,75 €         | 335.669,47 €         |
| 14  | 37.639,09 €         | 373.308,56 €         |
| 15  | 39.521,04 €         | 412.829,60 €         |
| 16  | 41.497,10 €         | 454.326,70 €         |
| 17  | 43.571,95 €         | 497.898,65 €         |
| 18  | 45.750,55 €         | 543.649,20 €         |
| 19  | 48.038,08 €         | 591.687,27 €         |
| 20  | 50.439,98 €         | 642.127,25 €         |
| 21  | 52.961,98 €         | 695.089,23 €         |
| 22  | 55.610,08 €         | 750.699,31 €         |
| 23  | 58.390,58 €         | 809.089,89 €         |
| 24  | 61.310,11 €         | 870.400,00 €         |



- **Importe total a  Stripe por el uso de su sistema de pago** 

| Cuantía total que recibe Stripe por la prestación de sus servicios | 17.896,06 € |
| - | - |


-------------------------------------------------






 #### 4.3.1 Cálculos del TCO optimista ####

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los benefícios netos, considerando los ingresos generados y descontando los costes asociados. 

Para los costes se ha estimado en el escenario pesimista  un tráfico de 21,000 imágenes, cada una con un peso aproximado de 5 MB, y 23,000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijo para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.


**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx lo largo de 6 meses | TCO         | Ingresos totales | Benefícios       |
|-------------|-------------|-------------------------|------------|----------------|----------------|
| 104.428,83 € | 9.173,55 €   | 54.984,52 €     | 159.413,35 €  | 117.875,65 €     | -41.537,70 €      |

**TCO a al año** 


| CapEx        | OpEx mensual | OpEx lo largo de 12 meses | TCO         | Ingresos totales | Benefícios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 104.428,83 € | 9.173,55 €   | 109.999,43 €    | 214.428,26 €  | 299.822,72 €     | 85.394,46 €   |


**TCO a a los 2 años** 


| CapEx        | OpEx mensual | OpEx lo largo de 24 meses | TCO         | Ingresos totales | Benefícios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 104.428,83 € | 9.173,55 €  | 220.165,32 €    | 324.594,15 €  | 870.400,00 €     | 546.805,85 €  |


Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable aproximadamente a los **8 meses**.  


<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/caso_optimista.PNG" alt="Universidad de Sevilla " width="700"/>
</p>


## 5. Rentabilidad (Resumen)

- **Caso pesimista**: Aproximadamente a los 23 meses.
- **Caso neutro**: A los 13 meses.
- **Caso optimista**: Aproximadamente a los 8 meses.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s2/resumen.PNG" alt="Universidad de Sevilla " width="700"/>
</p>


## 6. Expectativas de crecimiento

La plataforma espera mantener un crecimiento constante del 5 % mensual con respecto al mes anterior, tanto en el número de artistas como en el de comisiones, durante los primeros cuatro años tras el lanzamiento. Posteriormente, en el escenario neutro, se espera una estabilidad mensual de:

* Nº artistas: 19346

* Nº de comisiones:  52622

* Nº de usuarios premium: 5804

Generando un benefício mensual de: 122.178,01 €


## 7. Inversores

La compañía ha sido valorada, a los dos años de su lanzamiento, en 324.439 €, con un crecimiento anual del 1,42 % durante los primeros cuatro años.

Se propone la venta del 49 % de la empresa, lo que representa aproximadamente 158.975 €, estableciendo un valor por acción de 1.000 €.

A partir del segundo año, los inversores comenzarán a recibir una rentabilidad fija equivalente al 80 % del capital inicialmente invertido, la cual se mantendrá constante en el tiempo.

Los beneficios derivados de la revalorización de la empresa no se distribuirán como dividendos, sino que serán retenidos en tesorería con el objetivo de ser reinvertidos estratégicamente. Estas reinversiones estarán orientadas a potenciar la escalabilidad y seguridad del negocio, ampliar funcionalidades, fortalecer acciones de marketing y facilitar la expansión internacional, siendo nuestra meta posicionarnos más allá del mercado español.


## 8. Bibliografía

Sueldos en Indeed: [https://es.indeed.com/career/salaries?from=gnav-homepage]

Licencia Render: [https://render.com/pricing#compute]

Licencia Java Oracle: [https://oraclelicensingexperts.com/types-of-oracle-java-licenses-a-comprehensive-overview/] 

Licencia GitHub Copilot: [https://github.com/features/copilot/plans?cft=copilot_li.features_copilot]

Licencia para Docker: [https://www.docker.com/pricing/]

Licencia para GitHub: [https://github.com/pricing#compare-features]

Comisiones de Stripe: [https://stripe.com/es/pricing]

ChactGPT Plus: [https://openai.com/chatgpt/pricing/]

SonarQube: [https://www.sonarsource.com/plans-and-pricing/]

Google Cloud SQL y Google Cloud App : [https://cloud.google.com/products/clculator] 

EmailJS: [https://www.emailjs.com/pricing/]



