# Guía de Buenas Prácticas en Docusaurus - Sprint 2

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
**Fecha:** 14/03/2025  
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
| Ignacio Warleta  |  Redactora                      |
| Gabriel Vacaro       |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios | Autor                 |
|---------|------------|------------------------|------------------------|
| v1.0    | 14/03/2025 | Creación del documento. | Ignacio Warleta   |

## **Índice** 
1. [Introducción](#1-introducción) 
2. [Problemas comunes en el índice](#2-problemas-comunes-en-el-índice)
3. [Probar antes de subir contenido](#3-probar-antes-de-subir-contenido)
4. [Subida de imágenes](#4-subida-de-imágenes)


## 1. Introducción

Docusaurus es una herramienta poderosa para la creación de documentación de proyectos. Sin embargo, los usuarios pueden enfrentar problemas comunes que afectan su experiencia. A continuación, se presentan buenas prácticas enfocadas en solucionar estos inconvenientes:

## 2 Problemas comunes en el índice

Los problemas relacionados con el índice normalmente rompen el despliegue en Vercel, por eso es importante tener cuidado con estos fallos comunes:

### 2.1 Referencias

El índice de Docusaurus es sensible a mayúsculas, tildes y caracteres especiales. Esto significa que un título «## Introducción» deberá tener una referencia «#introducción». Es decir, todos los índices deben escribirse en minúsculas y mantener las tildes.

### 2.2 Evitar negrita en títulos y subtítulos

Debemos evitar el uso de caracteres de negrita (**) en títulos o subtítulos, ya que Docusaurus interpreta estos caracteres como -- en el índice, lo que puede generar errores al referenciar secciones.
Por ejemplo, si tenemos el subtítulo «## **Apartado 2**», docusaurus referenciará este apartado como «#--apartado-2» en lugar de «#apartado-2».

### 2.3 Solución

Para evitar estos fallos en el índice, es recomendable hacerlo manualmente escribiendo # y seleccionando el título que se quiere referenciar.

<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/guiadocusaurus.png" alt="Guia docusaurus" width="550"/>
</p>

## 3. Probar antes de subir contenido:

Otro fallo común que hemos detectado es que se sube contenido a docusaurus sin comprobar antes si este genera problemas en el despliegue, para solucionar esto podemos:

### 3.1 Probar localmente

Antes de realizar cambios en la documentación, se recomienda probar localmente ejecutando el siguiente comando:

```sh
npm run build
```

De haber cualquier problema con el despliegue ese comando nos lo hará saber. El comando

```sh
npx docusaurus start
```
ya no es suficiente para esta tarea, ya que soluciona de forma temporal ciertos errores de referencia que podrían causar fallos en el despliegue final.

### 3.2 Crear una pull request

Otra opción siempre es trabajar en otra rama y al finalizar solicitar una pull request. De esta manera, Vercel realizará un despliegue previo de la rama y notificará si hay errores antes de introducir los cambios en main. De haber fallos, el equipo docusaurus se encargaría de resolverlos antes de subirlos a main.

## 4. Subida de imágenes

Otro aspecto que ha causado más dolores de cabeza es la subida de imágenes en Docusaurus. Existen varias formas de hacerlo, pero nosotros utilizamos la siguiente:  

```html
<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/NOMBRE.png" 
       alt="DESCRIPCIÓN" width="TAMAÑO"/>
</p>
````
Esta manera permite que la imagen se muestre tanto en docusaurus como en github. Importante mencionar que hasta que no se suba la imagen a github no se podrá ver, por lo que no hay que alarmarse si no se ve la imagen cuando probemos en local.

A la hora de subir imágenes, de ser de un apartado concreto o ser muchas imagenes (más de dos) se debería crear una carpeta dentro de /img con el nombre que se considere y, por supuesto, no olvidarse de hacer referencia a esta nueva carpeta en el enlace.

```html
<p align="center">
  <img src="https://raw.githubusercontent.com/Holos-INC/Docusaurus-Holos/main/static/img/CARPETA/NOMBRE.png" 
       alt="DESCRIPCIÓN" width="TAMAÑO"/>
</p>
````