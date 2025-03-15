# Análisis de Costes y TCO - Sprint 1

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
| 19/02/2025  | v1.0    | Creación del documento Análisis de costes y TCO del proyecto   | <p>- Joaquín González Ganfornina  </p><p> - María del Carmen Garrancho</p>
| 13/03/2025  | v2.0    | Modificación de los costes en función del nuevo modelo de negocio y tecnologías a usar  |<p>- Joaquín González Ganfornina  </p><p> - María del Carmen Garrancho</p>|
| 13/03/2025  | v2.1    | Modificación de la portada  |María del Mar Ávila|


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
5. [Rentabilidad (Resumen)](#5-Rentabilidad-resumen)    
6. [Bibliografía](#6-bibliografía)   



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


# Gastos de personal durante el desarrollo

| **Tipo de trabajador**                    | **Cantidad** | **Costo por hora** | **Horas semanales** | **Nº de horas totales** | **Coste salarial bruto** | **Costes sociales (30% de los costes brutos)** | **Coste total del personal** |
|--------------------------------------------|--------------|--------------------|---------------------|------------------------|-------------------------|--------------------------------------------------|-----------------------------|
| Director de proyecto     |    1    |   45,40 €  |    10     |    150      |   6.810,00 €      | 2.043,00 €        |   8.853,00 €    |
| Frontend developer       |    6    | 22,27 €    |   10      |    150      |   20.043,00 €     | 6.012,90 €       |  26.055,90 €    |
| Backend developer        |     5   |  23,39 €   |   10      |    150      |  17.542,50 €      | 5.262,75 €       |  22.805,25 €      |
| Jefe de proyecto / Coordinadores  |     2 |  22,50 €   | 10 |   150       |  6.750,00 €        | 2.025,00 €      |  8.775,00 €    |
| Marketing                |      3  |  17,35 €   |  10       |    150      |  7.807,50 €       | 2.342,25 €       |  0.149,75 €  |
| **Total**                                 |      |     |      |       |         |       | **76.638,90 €**    |




### 2.2 Costes de los recursos materiales 

La empresa ha decidido invertir en diversos recursos materiales como en licencias de software o hardware para el uso de los trabajadores o en publicidad. Los precios de las licencias de software se han consultado en sus páginas web oficiales, las cuales se han referenciado en la bibliografía. En algunos casos, se ha tenido que pasar el precio de dólar a euro, por lo que se han tomado en cuenta la diferencia entre los valores de las monedas a fecha 13 de marzo de 2025. En la siguiente tabla se muestra en qué se destinarán los **22.901,92 €** invertidos en recursos materiales: 



**Gastos recursos materiales**
# Gastos en los recursos materiales


| Recurso material                         | Cantidad | Coste mes  | Nº Meses | Coste total   |
|------------------------------------------|----------|------------|---------|--------------|
| Licencia GitHub Teams                   | 17       | 3,83 €     | 4       | 260,44 €     |
| Licencia GitHub Copilot Business        | 1        | 14,38 €    | 4       | 1.240,32 €   |
| Licencia Docker Team                    | 1        | 14,38 €    | 4       | 57,52 €      |
| Licencia Java Oracle                    | 17       | 14,38 €    | 4       | 977,84 €     |
| Licencia Render Professional            | 5        | 18,24 €    | 4       | 364,80 €     |
| Render Key Value Pro                    | 1        | 129,68 €   | 4       | 518,72 €     |
| Microsoft Teams Essentials              | 17       | 4,48 €     | 4       | 304,64 €     |
| Alquiler de Oficina                     | -        | 850,00 €   | 4       | 3.400,00 €   |
| Portátiles                               | 17       | 600,00 €   | -       | 10.200,00 €  |
| Publicidad                               | -        | 2.300,00 € | -       | 2.300,00 €   |
| Dominio web                              | 1        | 1,00 €     | 4       | 4,00 €       |
| Cuenta bancaria                          | 1        | 3.000,00 € | -       | 3.000,00 €   |
| Firebase (Plan Blaze)                    | 1        | 68,41 €    | 4       | 273,64 €     |
| Clockify                                 | 17       | -          | -       | -            |
| **Coste total**                          |          |            |         | **22.901,92 €** |





### 2.3 Costes totales de desarrollo 

Una vez calculado el coste total del proyecto, se aplica un incremento del 15 % en concepto de reservas de gestión. Como resultado, el coste final del desarrollo del proyecto asciende a **114.471,94 €**. En la siguiente tabla se pueden ver los cálculos realizados para obtener dicha cifra:

**Gastos de capital**

|Costes incurridos en el proyecto |Coste |
| - | - |
|Coste total del personal |76.638,90   €|
|Coste total del material |22.901,92   €|
|Total | 99.540,82 €|



|Coste del proyecto |99.540,82 €|
| - | - |
|% de reserva |15,00%|
|Total de la reserva |14.931,12 €|



|Coste total del proyecto con reservas |114.471,94 €|
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


|Recurso material | Cantidad | Costo mes | Nº Meses | Coste total |
|----------------- | --------- | -------- | ------ | ----------- |
|Licencia GitHub Teams |4 |3,83 € |1|15,32 €|
|Licencia GitHub Copilot Business |4 |18,24 € |1|72,96 €|
|Licencia Docker Team |1 |14,38 € |1|14,38 €|
|Licencia Java Oracle |2 |14,38 € |1|28,76 €|
|Licencia Render Professional |1 |18,24 € |1|18,24 €|
|Render Key Value Pro |1 |129,68 € |1|129,68 €|
|MySQL Standard Edition |1 |178,33 € |1|178,33 €|
|Microsoft Teams Essentials |6 |4,48 € |1|26,88 €|
|Gastos domésticos |6 |160,00 € |1|960,00 €|
|Publicidad |1 |787,00 € |- |787,00 €|
|Clockify |6 |- |- |- |
|Coste total de mantenimiento||||2.246,62 €|



**OpEx**

|Costo mensual de mantenimiento | |
| :- | - |
|Costo mensual del personal de mantenimiento | 6.553,04 €|
|Coste mensual de los recursos materiales para el mantenimiento | 2.246,62 €|
|**Costes mensual de mantenimiento** |**8.799,66 €**|

Por tanto, sumando todos los gastos, obtenemos un Opex de **8.799,66 €**.


## 4. Rentabilidad de la aplicación 
Según los datos del prompt https://chatgpt.com/share/67d1aa43-4f18-800f-a359-99d2adbf93b4;  hay del orden de 100.000 a 200.000 artistas digitales españoles activos a la fecha de 13 de marzo de 2025 vendiendo sus obras en plataformas online. En nuestro análisis hemos considerado atraer cómo máximo entre un 3% y un 8% de estos. En nuestro análisis, hemos considerado atraer como máximo entre un 3% y un 8% de estos. Para ello, se han realizado diversas estimaciones sobre la cantidad de artistas que podrían unirse a nuestra plataforma, considerando tres escenarios: pesimista, neutro y optimista.

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


Por último, el 50% de los artistas afirma que le parece un precio razonable la cuota premium de 4,99 €, mientras que el resto estaría dispuesto a pagar una cantidad incluso mayor. Por ello, se ha establecido como constante que el 30% de los artistas pagará la cuota premium, independientemente de si nos encontramos en un escenario pesimista, optimista o neutro.

De acuerdo con el plan de negocio de la aplicación, se establece una comisión del 6% sobre el precio de cada obra y un crecimiento constante de usuarios artistas en cada caso (Pesimista, neutro y optimista) de un 5% cada mes.

En este análisis, se asumirá que los gastos de licencia variables serán contratados a un precio fijo y constante cada mes. Además, el valor de dichos gastos se tomará según el escenario optimista, garantizando así su cobertura en cualquier situación.

### 4.1 Caso pesimista
Para estimar el valor aproximado de una obra dentro de un rango determinado, se ha calculado la media de dicho rango. Además, para determinar los porcentajes de obras realizadas en cada intervalo de precio, nos hemos basado en los resultados de la encuesta mencionada previamente. 
Para el caso pesimista, se han cambiado ligeramente los porcentajes de las comisiones, para que se tenga un mayor número de comisiones a un menor precio y un menor número de comisiones a un mayor precio. Los porcentajes son los siguientes:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio |
|----------------|---------------------------------|----------------|
| 5-15€         | 36%                          | 10,00 €        |
| 15-30€        | 30%                          | 22,50 €        |
| 30-50€        | 19%                          | 40,00 €        |
| 50-75€        | 11%                          | 62,50 €        |
| 75-100€       | 5%                           | 87,50 €        |

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

Los beneficios esperados son: 

| Número de mes | Dinero que mueve la aplicación | Ingresos de la aplicación por transacciones |
|----------------|--------------------------------|-------------------------------------------|
| 1  | 103.410,05 €  | 6.204,60 €  |
| 2  | 108.580,55 €  | 6.514,83 €  |
| 3  | 114.009,58 €  | 6.840,57 €  |
| 4  | 119.710,06 €  | 7.182,60 €  |
| 5  | 125.695,56 €  | 7.541,73 €  |
| 6  | 131.980,34 €  | 7.918,38 €  |
| 7  | 138.579,35 €  | 8.314,76 €  |
| 8  | 145.508,32 €  | 8.730,50 €  |
| 9  | 152.783,74 €  | 9.166,32 €  |
| 10 | 160.422,93 €  | 9.625,38 €  |
| 11 | 168.444,07 €  | 10.106,64 € |
| 12 | 176.866,86 €  | 10.611,66 € |
| 13 | 185.709,59 €  | 11.142,58 € |
| 14 | 194.995,07 €  | 11.699,70 € |
| 15 | 204.744,82 €  | 12.284,69 € |
| 16 | 214.982,06 €  | 12.898,92 € |
| 17 | 225.731,17 €  | 13.543,87 € |
| 18 | 237.017,72 €  | 14.221,06 € |
| 19 | 248.868,61 €  | 14.932,12 € |
| 20 | 261.312,04 €  | 15.678,72 € |
| 21 | 274.377,64 €  | 16.462,46 € |
| 22 | 288.096,53 €  | 17.285,79 € |
| 23 | 302.501,36 €  | 18.150,08 € |
| 24 | 317.626,42 €  | 19.057,59 € |


- **A través de las tarifas para los artistas** 

Según los resultados de la encuesta sobre la disposición de los artistas a pagar una cuota mensual, se han establecido una tarifa premium. En el caso pesimista, según los datos de las encuestas, se ha supuesto que un 25% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Número de mes | Usuarios premium 25% | Ingresos por el plan premium (4,99€) |
|----------------|----------------------|----------------------------------|
| 1  | 326  | 1.624,25 €  |
| 2  | 342  | 1.705,46 €  |
| 3  | 359  | 1.790,73 €  |
| 4  | 377  | 1.880,27 €  |
| 5  | 396  | 1.974,28 €  |
| 6  | 415  | 2.072,99 €  |
| 7  | 436  | 2.176,64 €  |
| 8  | 458  | 2.285,48 €  |
| 9  | 481  | 2.399,75 €  |
| 10 | 505  | 2.519,74 €  |
| 11 | 530  | 2.645,72 €  |
| 12 | 557  | 2.778,01 €  |
| 13 | 585  | 2.916,91 €  |
| 14 | 614  | 3.062,76 €  |
| 15 | 644  | 3.215,89 €  |
| 16 | 677  | 3.376,69 €  |
| 17 | 711  | 3.545,52 €  |
| 18 | 746  | 3.722,80 €  |
| 19 | 783  | 3.908,94 €  |
| 20 | 823  | 4.104,39 €  |
| 21 | 864  | 4.309,61 €  |
| 22 | 907  | 4.525,09 €  |
| 23 | 952  | 4.751,34 €  |
| 24 | 1000 | 4.988,91 €  |

Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso pesimista a lo largo de 24 meses serían los siguientes:

| Número de mes | Ingresos   | Ingresos acumulados |
|----------------|------------|----------------------|
| 1  | 7.828,85 €  | 7.828,85 €  |
| 2  | 8.220,29 €  | 16.049,14 €  |
| 3  | 8.631,30 €  | 24.680,44 €  |
| 4  | 9.062,87 €  | 33.743,31 €  |
| 5  | 9.516,01 €  | 43.259,33 €  |
| 6  | 9.991,81 €  | 53.251,14 €  |
| 7  | 10.491,40 € | 63.742,55 €  |
| 8  | 11.015,98 € | 74.758,52 €  |
| 9  | 11.566,77 € | 86.325,29 €  |
| 10 | 12.145,11 € | 98.470,41 €  |
| 11 | 12.752,37 € | 111.222,78 €  |
| 12 | 13.389,99 € | 124.612,76 €  |
| 13 | 14.059,49 € | 138.672,25 €  |
| 14 | 14.762,46 € | 153.434,71 €  |
| 15 | 15.500,58 € | 168.935,29 €  |
| 16 | 16.275,61 € | 185.210,90 €  |
| 17 | 17.089,39 € | 202.300,30 €  |
| 18 | 17.943,86 € | 220.244,16 €  |
| 19 | 18.841,06 € | 239.085,22 €  |
| 20 | 19.783,11 € | 258.868,32 €  |
| 21 | 20.772,26 € | 279.640,59 €  |
| 22 | 21.810,88 € | 301.451,47 €  |
| 23 | 22.901,42 € | 324.352,89 €  |
| 24 | 24.046,49 € | 348.399,38 €  |



-------------------------------------------------






 #### 4.1.1 Cálculos del TCO pesimista ####

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los beneficios, considerando los ingresos generados y descontando los costes asociados. 

Para los costos de Firebase, se ha estimado en el escenario pesimista  un tráfico de 10.500 imágenes, cada una con un peso aproximado de 5 MB, y 12.000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijo de firebase para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.



**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx lo largo de 6 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|-------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.536,92 €  | 51.196,12 €            | 165.668,06 € | 53.251,14 €    | -112.416,92 €  |



**TCO a al año** 


| CapEx        | OpEx mensual | OpEx lo largo de 12 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.536,92 €  | 102.405,83 €            | 216.877,78 € | 124.612,76 €   | -92.265,01 €   |




**TCO a a los 2 años** 


| CapEx        | OpEx mensual | OpEx lo largo de 24 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.536,92 €  | 204.886,15 €            | 319.358,09 € | 348.399,38 €   | 29.041,28 €    |


Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 23 meses, es decir, casi a los 2 años. 

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s1/caso_pesimista.png" alt="Rentabilidad caso pesimista" width="550"/>
</p>


### 4.2 Caso neutro

Para el caso neutro, se han usado exactamente los resultados obtenidos según la encuesta. Por tanto el porcentaje de las comisiones según su rango de precio es:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio |
|----------------|---------------------------------|----------------|
| 5-15€         | 28,6%                           | 10,00 €        |
| 15-30€        | 28,6%                           | 22,50 €        |
| 30-50€        | 21,4%                           | 40,00 €        |
| 50-75€        | 14,3%                           | 62,50 €        |
| 75-100€       | 7,1%                            | 87,50 €        |

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

Los beneficios esperados son: 

| Número de mes | Dinero que mueve la aplicación | Ingresos de la aplicación por transacciones |
|---------------|--------------------------------|--------------------------------------------|
| 1             | 175.327,84 €                   | 10.519,67 €                               |
| 2             | 184.094,23 €                   | 11.045,65 €                               |
| 3             | 193.298,94 €                   | 11.597,94 €                               |
| 4             | 202.963,89 €                   | 12.177,83 €                               |
| 5             | 213.112,09 €                   | 12.786,73 €                               |
| 6             | 223.767,69 €                   | 13.426,06 €                               |
| 7             | 234.956,08 €                   | 14.097,36 €                               |
| 8             | 246.703,88 €                   | 14.802,23 €                               |
| 9             | 259.039,07 €                   | 15.542,34 €                               |
| 10            | 271.991,03 €                   | 16.319,46 €                               |
| 11            | 285.590,58 €                   | 17.135,43 €                               |
| 12            | 299.870,11 €                   | 17.992,21 €                               |
| 13            | 314.863,61 €                   | 18.891,82 €                               |
| 14            | 330.606,79 €                   | 19.836,41 €                               |
| 15            | 347.137,13 €                   | 20.828,23 €                               |
| 16            | 364.493,99 €                   | 21.869,64 €                               |
| 17            | 382.718,69 €                   | 22.963,12 €                               |
| 18            | 401.854,62 €                   | 24.111,28 €                               |
| 19            | 421.947,35 €                   | 25.316,84 €                               |
| 20            | 443.044,72 €                   | 26.582,68 €                               |
| 21            | 465.196,96 €                   | 27.911,82 €                               |
| 22            | 488.456,81 €                   | 29.307,41 €                               |
| 23            | 512.879,65 €                   | 30.772,78 €                               |
| 24            | 538.523,63 €                   | 32.311,42 €                               |



- **A través de las tarifas para los artistas** 

Según los datos de las encuestas, se ha supuesto que un 30% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Número de mes | Usuarios premium 30% | Ingresos por el plan premium (4,99€) |
|---------------|----------------------|--------------------------------------|
| 1             | 586                  | 2.923,64 €                           |
| 2             | 615                  | 3.069,82 €                           |
| 3             | 646                  | 3.223,31 €                           |
| 4             | 678                  | 3.384,48 €                           |
| 5             | 712                  | 3.553,70 €                           |
| 6             | 748                  | 3.731,39 €                           |
| 7             | 785                  | 3.917,96 €                           |
| 8             | 824                  | 4.113,86 €                           |
| 9             | 866                  | 4.319,55 €                           |
| 10            | 909                  | 4.535,53 €                           |
| 11            | 954                  | 4.762,30 €                           |
| 12            | 1002                 | 5.000,42 €                           |
| 13            | 1052                 | 5.250,44 €                           |
| 14            | 1105                 | 5.512,96 €                           |
| 15            | 1160                 | 5.788,61 €                           |
| 16            | 1218                 | 6.078,04 €                           |
| 17            | 1279                 | 6.381,94 €                           |
| 18            | 1343                 | 6.701,04 €                           |
| 19            | 1410                 | 7.036,09 €                           |
| 20            | 1481                 | 7.387,90 €                           |
| 21            | 1555                 | 7.757,29 €                           |
| 22            | 1632                 | 8.145,15 €                           |
| 23            | 1714                 | 8.552,41 €                           |
| 24            | 1800                 | 8.980,03 €                           |


Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso neutro a lo largo de 24 meses serían los siguientes:

| Número de mes | Ingresos de la aplicación | Ingresos acumulados |
|---------------|---------------------------|---------------------|
| 1             | 13.443,31 €                | 13.443,31 €         |
| 2             | 14.115,48 €                | 27.558,79 €         |
| 3             | 14.821,25 €                | 42.380,04 €         |
| 4             | 15.562,31 €                | 57.942,35 €         |
| 5             | 16.340,43 €                | 74.282,78 €         |
| 6             | 17.157,45 €                | 91.440,23 €         |
| 7             | 18.015,32 €                | 109.455,56 €        |
| 8             | 18.916,09 €                | 128.371,64 €        |
| 9             | 19.861,89 €                | 148.233,54 €        |
| 10            | 20.854,99 €                | 169.088,53 €        |
| 11            | 21.897,74 €                | 190.986,26 €        |
| 12            | 22.992,62 €                | 213.978,89 €        |
| 13            | 24.142,26 €                | 238.121,15 €        |
| 14            | 25.349,37 €                | 263.470,51 €        |
| 15            | 26.616,84 €                | 290.087,35 €        |
| 16            | 27.947,68 €                | 318.035,03 €        |
| 17            | 29.345,06 €                | 347.380,09 €        |
| 18            | 30.812,32 €                | 378.192,41 €        |
| 19            | 32.352,93 €                | 410.545,34 €        |
| 20            | 33.970,58 €                | 444.515,92 €        |
| 21            | 35.669,11 €                | 480.185,03 €        |
| 22            | 37.452,56 €                | 517.637,59 €        |
| 23            | 39.325,19 €                | 556.962,78 €        |
| 24            | 41.291,45 €                | 598.254,23 €        |





-------------------------------------------------

 #### 4.2.1 Cálculos del TCO neutro

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los beneficios netos, considerando los ingresos generados y descontando los costes asociados. 

Para los costos de Firebase, se ha estimado en el escenario pesimista  un tráfico de 16.000 imágenes, cada una con un peso aproximado de 5 MB, y 18.000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijo de firebase para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.

**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx lo largo de 6 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|-------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.561,88 €  | 51.221,89 €            | 165.693,84 € | 91.440,23 €    | -74.253,61 €   |




**TCO a al año** 

| CapEx        | OpEx mensual | OpEx lo largo de 12 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.561,88 €  | 102.466,16 €            | 216.938,10 € | 213.978,89 €   | -2.959,21 €    |




**TCO a a los 2 años** 


| CapEx        | OpEx mensual | OpEx lo largo de 24 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.561,88 €  | 205.054,81 €            | 319.526,76 € | 598.254,23 €   | 278.727,47 €   |




Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 13 meses. 

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s1/caso_neutro.png" alt="Universidad de Sevilla" width="700"/>
</p>




### 4.3 Caso optimista

Para el caso optimista, se han usado porcentajes mayores para las comisiones más caras y menores para las más baratas, pero teniendo en cuenta los resultados de la encuesta. Por tanto el porcentaje de las comisiones según su rango de precio es:

| Rango de precio | Porcentaje de comisiones a ese precio | Media del precio |
|----------------|---------------------------------|----------------|
| 5-15€         | 25%                           | 10,00 €        |
| 15-30€        | 25%                           | 22,50 €        |
| 30-50€        | 25%                           | 40,00 €        |
| 50-75€        | 15%                           | 62,50 €        |
| 75-100€       | 10%                            | 87,50 €        |

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

Los beneficios esperados son: 

| Número de mes | Dinero que mueve la aplicación | Ingresos de la aplicación por transacciones |
|--------------|--------------------------------|-------------------------------------------|
| 1            | 256.853,00 €                   | 15.411,18 €                              |
| 2            | 269.695,65 €                   | 16.181,74 €                              |
| 3            | 283.180,43 €                   | 16.990,83 €                              |
| 4            | 297.339,45 €                   | 17.840,37 €                              |
| 5            | 312.206,43 €                   | 18.732,39 €                              |
| 6            | 327.816,75 €                   | 19.669,00 €                              |
| 7            | 344.207,59 €                   | 20.652,46 €                              |
| 8            | 361.417,96 €                   | 21.685,08 €                              |
| 9            | 379.488,86 €                   | 22.769,33 €                              |
| 10           | 398.463,31 €                   | 23.907,80 €                              |
| 11           | 418.386,47 €                   | 25.103,19 €                              |
| 12           | 439.305,80 €                   | 26.358,35 €                              |
| 13           | 461.271,08 €                   | 27.676,27 €                              |
| 14           | 484.334,64 €                   | 29.060,08 €                              |
| 15           | 508.551,37 €                   | 30.513,08 €                              |
| 16           | 533.978,94 €                   | 32.038,74 €                              |
| 17           | 560.677,89 €                   | 33.640,67 €                              |
| 18           | 588.711,78 €                   | 35.322,71 €                              |
| 19           | 618.147,37 €                   | 37.088,84 €                              |
| 20           | 649.054,74 €                   | 38.943,28 €                              |
| 21           | 681.507,48 €                   | 40.890,45 €                              |
| 22           | 715.582,85 €                   | 42.934,97 €                              |
| 23           | 751.361,99 €                   | 45.081,72 €                              |
| 24           | 788.930,09 €                   | 47.335,81 €                              |




- **A través de las tarifas para los artistas** 

Según los datos de las encuestas, se ha supuesto que un 35% de los usuarios artista estarían dispuestos a pagar esta mensualidad. Esto nos daría los siguientes ingresos:

| Número de mes | Usuarios premium (35%) | Ingresos por el plan premium (4,99€) |
|--------------|------------------------|--------------------------------------|
| 1            | 912                    | 4.549,63 €                          |
| 2            | 957                    | 4.777,11 €                          |
| 3            | 1005                   | 5.015,97 €                          |
| 4            | 1055                   | 5.266,77 €                          |
| 5            | 1108                   | 5.530,11 €                          |
| 6            | 1164                   | 5.806,61 €                          |
| 7            | 1222                   | 6.096,94 €                          |
| 8            | 1283                   | 6.401,79 €                          |
| 9            | 1347                   | 6.721,88 €                          |
| 10           | 1414                   | 7.057,97 €                          |
| 11           | 1485                   | 7.410,87 €                          |
| 12           | 1559                   | 7.781,42 €                          |
| 13           | 1637                   | 8.170,49 €                          |
| 14           | 1719                   | 8.579,01 €                          |
| 15           | 1805                   | 9.007,96 €                          |
| 16           | 1895                   | 9.458,36 €                          |
| 17           | 1990                   | 9.931,28 €                          |
| 18           | 2090                   | 10.427,84 €                         |
| 19           | 2194                   | 10.949,23 €                         |
| 20           | 2304                   | 11.496,69 €                         |
| 21           | 2419                   | 12.071,53 €                         |
| 22           | 2540                   | 12.675,11 €                         |
| 23           | 2667                   | 13.308,86 €                         |
| 24           | 2800                   | 13.974,30 €                         |


Por tanto, los ingresos totales (tanto de transacciones como de la tarifa premium) de la aplicación del caso optimista a lo largo de 24 meses serían los siguientes:

| Número de mes | Ingresos de la aplicación | Ingresos acumulados |
|--------------|--------------------------|----------------------|
| 1            | 19.960,81 €               | 19.960,81 €         |
| 2            | 20.958,85 €               | 40.919,67 €         |
| 3            | 22.006,80 €               | 62.926,46 €         |
| 4            | 23.107,14 €               | 86.033,60 €         |
| 5            | 24.262,49 €               | 110.296,09 €        |
| 6            | 25.475,62 €               | 135.771,71 €        |
| 7            | 26.749,40 €               | 162.521,10 €        |
| 8            | 28.086,87 €               | 190.607,97 €        |
| 9            | 29.491,21 €               | 220.099,18 €        |
| 10           | 30.965,77 €               | 251.064,95 €        |
| 11           | 32.514,06 €               | 283.579,01 €        |
| 12           | 34.139,76 €               | 317.718,78 €        |
| 13           | 35.846,75 €               | 353.565,53 €        |
| 14           | 37.639,09 €               | 391.204,62 €        |
| 15           | 39.521,04 €               | 430.725,66 €        |
| 16           | 41.497,10 €               | 472.222,76 €        |
| 17           | 43.571,95 €               | 515.794,71 €        |
| 18           | 45.750,55 €               | 561.545,26 €        |
| 19           | 48.038,08 €               | 609.583,33 €        |
| 20           | 50.439,98 €               | 660.023,31 €        |
| 21           | 52.961,98 €               | 712.985,29 €        |
| 22           | 55.610,08 €               | 768.595,36 €        |
| 23           | 58.390,58 €               | 826.985,95 €        |
| 24           | 61.310,11 €               | 888.296,06 €        |






-------------------------------------------------






 #### 4.3.1 Cálculos del TCO optimista ####

En el siguiente apartado se realizará el cálculo del TCO, junto con la estimación de los beneficios netos, considerando los ingresos generados y descontando los costes asociados. 

Para los costos de Firebase, se ha estimado en el escenario pesimista  un tráfico de 21,000 imágenes, cada una con un peso aproximado de 5 MB, y 23,000 mensajes de 1 KB cada uno para el primer mes. Este gasto aumentará un 5% cada mes respecto al mes anterior, siguiendo el crecimiento de artistas en la plataforma y las comisiones realizadas.

**Nota**: En en Opex mensual se ha considerado un gasto fijo de firebase para dar una cifra exacta de costes de mantenimiento mensuales. Se ha realizado un repoarto equitativo de los gastos considerando los incurridos a lo largo de 2 años. Sin embargo, para los costes del Opex en una fecha determinada se ha considerado el gasto acumulado que se ha hecho hasta esa fecha.


**TCO a los 6 meses** 


| CapEx        | OpEx mensual | OpEx lo largo de 6 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|-------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.550,38 €  | 51.245,50 €            | 165.717,44 € | 135.771,71 €   | -29.945,73 €   |


**TCO a al año** 


| CapEx        | OpEx mensual | OpEx lo largo de 12 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.550,38 €  | 102.521,39 €            | 216.993,33 € | 317.718,78 €   | 100.725,44 €   |



**TCO a a los 2 años** 


| CapEx        | OpEx mensual | OpEx lo largo de 24 meses | TCO         | Ingresos totales | Beneficios       |
|-------------|-------------|--------------------------|------------|----------------|----------------|
| 114.471,94 € | 8.550,38 €  | 205.209,24 €            | 319.681,18 € | 888.296,06 €   | 568.614,88 €   |

Según los datos obtenidos, se estima que la aplicación comenzará a ser rentable a los 8 meses.  

Para determinar el momento exacto, hemos realizado un estudio detallado, cuyo resumen se presenta en la siguiente gráfica. En ella se muestra el punto en el que recuperaremos la inversión inicial y, considerando los gastos mensuales asociados, comenzaremos a generar beneficios.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s1/caso_optimista.png" alt="Universidad de Sevilla " width="700"/>
</p>

Como se puede apreciar en la gráfica, la aplicación ampezará a ser rentable a los 12 meses, es decir, al año.

## 5. Rentabilidad (Resumen)

- **Caso pesimista**: A los 23 meses.
- **Caso neutro**: A los 13 meses.
- **Caso optimista**: A los 8 meses.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/costes_s1/resumen.png" alt="Universidad de Sevilla " width="700"/>
</p>

## 6. Bibliografía

Sueldos en Indeed: [https://es.indeed.com/career/salaries?from=gnav-homepage]

Licencia Render: [https://render.com/pricing#compute]

Licencia MySQL: [https://www.mysql.com/products/enterprise/compare/]

Licencia Java Oracle: [https://oraclelicensingexperts.com/types-of-oracle-java-licenses-a-comprehensive-overview/] 

Licencia GitHub Copilot: [https://github.com/features/copilot/plans?cft=copilot_li.features_copilot]

Licencia para Docker: [https://www.docker.com/pricing/]

Licencia para GitHub: [https://github.com/pricing#compare-features]

Comisión Google Play Store: [https://support.google.com/googleplay/android-developer/answer/112622?hl=es-419] 

Comisión Paypal: [https://www.paypal.com/es/business/paypal-business-fees]

Planes de precios de Firebase: [https://firebase.google.com/docs/projects/billing/firebase-pricing-plans?hl=es-419]
