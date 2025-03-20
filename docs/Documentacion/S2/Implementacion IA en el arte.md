# Implementacion IA en el arte - Sprint 2

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
**Fecha:** 17/03/2025  
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
| Miguel Ángel Gómez Vela       |  Redactor                       |
|   |  Revisor                     |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


## Control de Versiones

| Fecha      | Versión | Descripción           | Autor                    |
|------------|---------|-----------------------|--------------------------|
| 17/03/2025 | v1.0    | Creación de documento | Miguel Ángel Gómez Vela       |


---

## Índice de Contenidos
1. [Introducción](#1-introducción)
2. [Métodos para Detectar Imágenes Generadas por IA](#2-métodos-para-detectar-imágenes-generadas-por-ia)
    1. [Análisis de Metadatos](#análisis-de-metadatos)
    2. [Detección de Artefactos Visuales](#detección-de-artefactos-visuales)
    3. [Análisis de Características de Ruido y Textura](#análisis-de-características-de-ruido-y-textura)
    4. [Uso de Redes Neuronales](#uso-de-redes-neuronales)
    5. [Análisis de Píxeles con Redes Convolucionales (CNN)](#análisis-de-píxeles-con-redes-convolucionales-cnn)
    6. [Técnicas de Detección de Manipulación (DeepFake)](#técnicas-de-detección-de-manipulación-deepfake)
    7. [Detección de Incoherencias en Estilos Visuales](#detección-de-incoherencias-en-estilos-visuales)
3. [Herramientas y APIs de Detección de IA](#3-herramientas-y-apis-de-detección-de-ia)
4. [Conclusiones](#4-conclusiones)

---

## 1. Introducción

Detectar la implicación de la IA en imágenes, específicamente para identificar si una imagen ha sido generada o manipulada por inteligencia artificial, es un área de investigación importante. 
Las imágenes creadas por IA pueden mostrar patrones, artefactos o características visuales distintas a las creadas por un fotógrafo humano o una pintura tradicional. 
Este fenómeno plantea un desafío no solo técnico, sino también ético y comercial, ya que el auge de la IA en el arte está modificando la forma en que se concibe la creatividad y el valor del arte. Para aquellos que venden arte, la proliferación de obras generadas por IA podría alterar las dinámicas del mercado, ya que la facilidad para crear imágenes visualmente atractivas a bajo costo podría disminuir la percepción de valor de las obras tradicionales creadas por humanos. 
Esta guía sobre la implementacion de la IA en el arte, explora métodos y herramientas que se utilizan para detectar la IA en fotos y en el arte, basándose en el análisis visual y el uso de técnicas avanzadas, además de reflexionar sobre cómo estos avances impactan a los creadores y vendedores de arte en un mundo cada vez más influenciado por la inteligencia artificial.


## 2. Métodos para Detectar Imágenes Generadas por IA

### 2.1. Análisis de Metadatos

Los metadatos de una imagen pueden contener información valiosa sobre su origen, el software utilizado para su creación, y otros detalles relacionados con el proceso de generación. En algunos casos, las imágenes generadas por IA incluyen información sobre el modelo o el algoritmo que ha sido empleado, lo cual podría servir como una pista inicial para identificar la implicación de la IA. Sin embargo, los metadatos no siempre están presentes, especialmente en imágenes generadas por IA.

Esto se debe a que muchos modelos de IA y herramientas generativas, por razones de privacidad o para evitar la identificación directa del software, pueden omitir o modificar los metadatos al crear la imagen. Por ejemplo, algunos generadores de imágenes como DALL·E o MidJourney no dejan huella en los metadatos, lo que dificulta aún más la tarea de identificación. Además, las imágenes pueden ser manipuladas para eliminar los metadatos o para ofrecer una apariencia de autenticidad, lo que limita la fiabilidad de los metadatos como única fuente de información.

Por tanto, aunque los metadatos pueden ofrecer una pista inicial sobre el origen de una imagen, no son una solución definitiva, y su presencia o ausencia no debe considerarse como un factor concluyente para identificar imágenes generadas por IA.

### 2.2. Detección de Artefactos Visuales

Las imágenes generadas por IA, especialmente aquellas creadas por redes generativas adversariales (GANs), a menudo contienen artefactos visuales que las diferencian de las imágenes creadas por humanos. Estos artefactos son patrones visuales que pueden no ser evidentes a simple vista, pero que, al ser analizados, revelan la naturaleza artificial de la imagen. Algunos de los artefactos más comunes incluyen:

**Patrones extraños o distorsionados**: Las imágenes generadas por IA a menudo presentan bordes irregulares, texturas artificiales o detalles que no siguen patrones naturales. Estos pueden incluir líneas discontinuas, bordes dentados, o variaciones inusuales en las texturas que no se corresponden con la forma en que se generan en la realidad, como la luz reflejada en superficies metálicas o en el cabello humano.

**Imperfecciones en las caras**: Las GANs pueden producir caras humanas o personajes en las que los detalles faciales no se alinean correctamente. Por ejemplo, puede haber desalineación en los ojos o las cejas, piel excesivamente suave o de aspecto plásticoso, y distorsiones en los rasgos faciales, como la forma y proporción de la nariz o la boca. Este tipo de imperfección es particularmente notoria en retratos generados por IA, ya que la representación de las emociones humanas es compleja y difícil de replicar para los algoritmos.

**Incoherencias en los detalles**: A menudo, las imágenes generadas por IA presentan incoherencias notables entre diferentes partes de la imagen. Mientras que algunas áreas pueden aparecer perfectamente definidas, otras pueden mostrar detalles extraños o inconsistentes, como sombras mal posicionadas, iluminación poco realista o superficies de textura repetitiva. Por ejemplo, un objeto puede tener sombras que no coinciden con la dirección de la fuente de luz, o un fondo puede mostrar patrones repetitivos o una falta de variación en la textura que no se ve en escenas reales.

**Errores en las manos y los dedos**: Las imágenes generadas por IA, especialmente cuando se intenta crear figuras humanas, a menudo cometen errores al representar manos y dedos. Las manos pueden aparecer extrañamente deformadas, con dedos fusionados, distorsionados o en posiciones no naturales, algo que es difícil de reproducir correctamente para los algoritmos.

**Errores en los reflejos o en la interacción con el entorno**: Otra señal de imágenes generadas por IA son los reflejos que no coinciden con la escena o interacción del sujeto con el fondo. Por ejemplo, una persona puede ser generada de forma perfecta, pero los reflejos en espejos o superficies metálicas pueden no coincidir con la postura o el ángulo de la persona..

### 2.3. Análisis de Características de Ruido y Textura

Las imágenes generadas por IA, en particular aquellas creadas mediante redes generativas como las GANs, a menudo presentan un tipo específico de "ruido" o patrones de textura que son característicos de la creación artificial. Estos patrones de ruido pueden manifestarse de formas muy sutiles o evidentes, dependiendo de la complejidad de la imagen y la capacidad del modelo generativo. Algunos de los patrones más comunes incluyen:

- **Ruido de fondo o texturas artificiales**: Las áreas de la imagen que tienen poco o ningún detalle, como los cielos, fondos o superficies lisas, pueden presentar un tipo de ruido que es difícil de encontrar en imágenes reales. Este ruido suele tener una textura homogénea o repetitiva que se genera al intentar crear áreas grandes de color sólido o de transiciones suaves. La IA, al no tener una "comprensión" del mundo real, puede generar una textura que parece digitalmente artificial, mostrando variaciones de color o patrones irregulares que no ocurren en la naturaleza. Esto es más evidente en fondos uniformes, donde la falta de detalles hace que cualquier irregularidad en el ruido sea fácil de identificar.

- **Patrones repetitivos o artefactos en áreas homogéneas**: Cuando la IA genera áreas que deberían ser suaves o continuas, como el cielo o un mar tranquilo, el modelo puede introducir patrones repetitivos de ruido o artefactos visuales. Estos patrones pueden aparecer como pequeñas manchas o líneas en zonas que deberían ser uniformes, como el cielo en una escena de atardecer, donde las nubes o el color del fondo se muestran de forma repetitiva o demasiado estructurada.

- **Desajustes de textura en objetos complejos**: A medida que la IA genera objetos con texturas complejas (como telas, piel o agua), puede presentar transiciones extrañas entre las texturas o detalles inconsistentes. Por ejemplo, los pliegues de una prenda de vestir pueden ser demasiado suaves, o la textura de la piel puede parecer plástica o artificial. Estos detalles pueden ser el resultado de un modelo que ha aprendido incorrectamente las variaciones de textura, lo que genera una apariencia poco natural.

- **Ruido en zonas de alto contraste**: En las áreas de una imagen donde hay transiciones abruptas de color o iluminación, como las sombras o los bordes de los objetos, el ruido generado por la IA puede hacerse más visible. Este ruido puede presentar una apariencia de "grano" o distorsión que no suele aparecer en imágenes reales. Las sombras, por ejemplo, pueden mostrar transiciones bruscas entre tonos, sin la suavidad que un fotógrafo humano normalmente captaría.

### 2.4. Uso de Redes Neuronales

Existen redes neuronales entrenadas específicamente para detectar imágenes generadas por IA. Estas redes pueden analizar patrones visuales complejos que no son evidentes a simple vista. Algunas redes como **XceptionNet**, **ResNet** y **VGG16** se pueden ajustar para distinguir entre imágenes generadas por IA y fotos reales.

### 2.5. Análisis de Píxeles con Redes Convolucionales (CNN)

Las redes convolucionales (CNN) son altamente efectivas para el análisis de imágenes. Se pueden entrenar modelos de CNN para detectar diferencias entre imágenes generadas por IA y fotos reales. Estas redes pueden identificar características sutiles, como imperfecciones de pixelado o detalles de textura que revelan la creación artificial de la imagen.

### 2.6. Técnicas de Detección de Manipulación (DeepFake)

Las técnicas de detección de **Deepfakes** no solo se aplican a videos manipulados, sino también a imágenes generadas por IA. Estas herramientas especializadas son capaces de identificar manipulaciones o alteraciones en las imágenes, lo cual resulta crucial para detectar fotos o gráficos creados o modificados por inteligencia artificial. 

Las herramientas de detección de Deepfakes funcionan analizando la consistencia de las características visuales de la imagen, como la iluminación, la anatomía de los sujetos, la sincronización de las sombras y el comportamiento de los objetos en la escena. Buscan señales sutiles de manipulación, como inconsistencias en los detalles faciales, irregularidades en las texturas o distorsiones en las transiciones de color.

Algunas de estas técnicas emplean modelos de redes neuronales entrenados para identificar patrones visuales artificiales, que pueden pasar desapercibidos para el ojo humano, pero que son características comunes en las imágenes generadas por IA. Estas herramientas pueden detectar diferencias en la textura de la piel, en la alineación de los ojos, en las sombras poco naturales o incluso en la sintaxis de los patrones visuales. De esta manera, se logra una mayor precisión en la identificación de imágenes manipuladas por IA.

### 2.7. Detección de Incoherencias en Estilos Visuales

Las imágenes generadas por IA a menudo carecen de sutilezas artísticas que se encuentran en las obras creadas por humanos. Por ejemplo:
- **Incoherencias en la iluminación**: Las sombras pueden no alinearse correctamente con la fuente de luz.
- **Detalles visuales artificiales**: Los bordes de los objetos pueden ser demasiado suaves o los patrones pueden no seguir reglas realistas, lo que es típico en las imágenes generadas por IA.

### 2.8. Reporte Manual por Parte del Equipo

A pesar de los avances tecnológicos en la detección de imágenes generadas por IA, es posible que se presenten casos complejos o ambiguos que no puedan ser resueltos únicamente a través de las herramientas automáticas. Para abordar estos casos, se habilitará una opción para el **reporte manual** por parte del equipo.

#### Proceso de Reporte Manual

1. **Identificación del Caso**:  
   Cuando un miembro del equipo detecte una imagen que sospeche que ha sido generada o manipulada por IA, se debe registrar el caso en el sistema con la siguiente información:  
   - Descripción de la sospecha (¿qué aspectos de la imagen levantaron dudas?).  
   - Análisis visual preliminar (detalles como incoherencias en las sombras, distorsiones en las caras, patrones repetitivos, etc.).  
   - Herramientas de IA usadas en la creación de la imagen (si es conocida).  
   - Referencias a la metodología utilizada para la detección.

2. **Formulario de Reporte**:  
   Se proporcionará un formulario estandarizado dentro de la plataforma para registrar los casos de reporte manual. Este formulario debe incluir:  
   - Nombre del miembro del equipo que realiza el reporte.  
   - Fecha de detección del caso.  
   - Descripción detallada del motivo del reporte.  
   - Archivos o capturas de pantalla relacionados.
   
3. **Revisión del Caso**:  
   Una vez que se haya registrado el caso, un revisor del equipo será encargado de evaluar la imagen y los informes adjuntos. El revisor debe seguir los métodos estándar de análisis (como la revisión de artefactos visuales o análisis de píxeles) y proporcionar un informe de validación.

4. **Validación y Acción**:  
   Si el reporte se valida, el caso se marcará como sospechoso de haber sido generado por IA. Dependiendo del contexto, se tomará la decisión correspondiente (por ejemplo, el rechazo de la imagen en un proyecto artístico o la notificación al creador). Si no se valida, el caso se cerrará.

El reporte manual se integrará en el flujo de trabajo automatizado, donde el sistema utilizará los informes manuales como un conjunto adicional de datos para mejorar el algoritmo de detección. Estos reportes pueden ayudar a refinar los modelos de IA, añadiendo más ejemplos de imágenes generadas por IA que no hayan sido detectadas inicialmente.


## 3. Herramientas y APIs de Detección de IA

Existen diversas herramientas y APIs que pueden ayudar a detectar imágenes generadas por IA. Algunas de las más populares incluyen:
- **DeepAI Image Recognition**: Proporciona análisis avanzados para identificar imágenes generadas por IA.
- **Google Vision API**: Ofrece análisis visual que puede ser útil para detectar patrones o artefactos generados por IA.
- **Clarifai**: Una API que se especializa en el reconocimiento de objetos y patrones visuales, útil para detectar imágenes manipuladas por IA.
- **RunwayML**: Ofrece modelos de detección de arte generado por IA, útil para proyectos creativos.

## 4. Conclusiones

Detectar imágenes generadas por IA es un desafío técnico, pero utilizando un enfoque combinado de análisis de metadatos, detección de artefactos visuales, redes neuronales y herramientas especializadas, se puede lograr un buen nivel de precisión. Es importante utilizar un enfoque multidimensional que incluya técnicas de análisis de texto, patrones visuales y herramientas de IA preentrenadas para obtener los mejores resultados. Las herramientas como APIs y redes neuronales son una opción eficaz, especialmente cuando se integran con aplicaciones en Java u otros lenguajes de programación.

