Investigación de la ley y adición de tecnologías y licencias
# Legislatura y Licencias - Sprint 2

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
**Fecha:**  22/03/2025
**Versión:**  v1.1

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
| Miembro                          | Responsabilidad                 |
|----------------------------------|---------------------------------|
| Juan Antonio Moreno Moguel       |  Redactor                       |

**Repositorio:** [https://github.com/Holos-INC](https://github.com/Holos-INC)

---

## Control de Versiones

| Fecha       | Versión | Descripción              | Autor|
|-------------|---------|--------------------------|------|
| 22/03/2025  | v1.0    | Creación del documento   | Juan Antonio Moreno Moguel|


---

## Índice  

0. [Introducción](#0-introducción)
1. [Metodología](#1-Metodología)
2. [Licencias](#2-Licencias)
3. [Implicaciones legales](#3-Implicaciones-legales)


---

## 0. Introducción

En el desarrollo de este documento, se enumeran tecnologías que tienen licencias específicas y leyes que deben ser consultadas previas al despliegue oficial y legal de la aplicación para no incurrir en delitos.
Es crucial conocer las restricciones y derechos de cada una para garantizar el cumplimiento legal y evitar posibles sanciones.
A continuación, se presenta un análisis detallado de las tecnologías utilizadas y sus respectivas licencias.

---
### Metodología

La metodología utilizada a lo largo de este proceso se resume en tres pasos:
1. La busqueda de leyes referentes como la GDPR y las licencias de los softwares utilizados.
2. Documentación sobre las leyes y el impacto sobre nuestra aplicación.
3. Aplicación de los metodos necesarios para cumplir con la legislatura actual

---
### Licencias

A continuacion se presenta una tabla con todas las licencias y lo que esto implica para nuestra aplicación

| Licencia | Implicación |
|-|-|
|GitHub Actions|50000 minutos de ejecucion para repositorios publicos, excederlo puede suponer costes|
|Spring Boot (Apache License 2.0 Software Libre) | Uso libre mientras se mantenga la atribucion original |
|React Native (MIT License Software Libre)| Uso libre|
|Docker Apache License 2.0 (Software libre para Docker CE)| Ninguna debido a ser un pequeño grupo y no una gran empresa |
|Google Cloud|Costes asociados en caso de exceder métricas|
|Render| Ninguna |
|VSCode (MIT License)| Ninguna debido a ser codigo abierto|
|Java (GPL v2 Software Libre)| Ninguna ya que se usa OpenJDK |

---
### Implicaciones legales

El cumplimiento legal en el desarrollo de software es fundamental para evitar infracciones que puedan derivar en sanciones económicas 
o responsabilidad penal. 
A continuación, se presentan aspectos clave que deben ser considerados.

## Propiedad Intelectual y Uso de Software de Terceros

El uso de software de terceros debe realizarse conforme a sus respectivas licencias. En este sentido, es imprescindible:

- Verificar licencias de dependencias: Cada biblioteca o framework utilizado debe estar debidamente documentado,
asegurando el cumplimiento de su licencia.
- Evitar la inclusión de software propietario sin autorización:
Cualquier software de código cerrado solo puede utilizarse con la debida licencia.
- Respetar las condiciones de atribución:
Algunas licencias, como Apache 2.0 y MIT, requieren que se mencione a los autores originales en la documentación del proyecto.

## Protección de Datos y Cumplimiento de Normativas

El manejo de datos personales dentro de la aplicación debe cumplir con normativas internacionales de protección de datos, como:

# Reglamento General de Protección de Datos (GDPR) de la UE:
El GDPR es una de las normativas más estrictas en términos de protección de datos personales dentro de la Unión Europea. 
Si el sistema maneja información de ciudadanos europeos, es obligatorio garantizar el cumplimiento de los siguientes principios:

- Licitud, lealtad y transparencia: Los datos deben ser procesados de manera justa, legal y con total transparencia para el usuario.
- Limitación de la finalidad: Solo se pueden recopilar datos para fines específicos y legítimos, y no pueden ser utilizados posteriormente para propósitos distintos sin consentimiento adicional.
- Minimización de datos: Solo se deben recolectar los datos estrictamente necesarios para los fines declarados.
- Exactitud: La información almacenada debe mantenerse precisa y actualizada.
- Limitación del almacenamiento: Los datos personales no pueden conservarse por más tiempo del necesario.
- Integridad y confidencialidad: Se deben implementar medidas técnicas y organizativas para garantizar la seguridad de los datos.

Además, es obligatorio implementar medidas clave como:

- Consentimiento explícito del usuario:
El usuario debe otorgar su consentimiento informado antes de que sus datos sean procesados.
Esto significa que no se pueden recopilar datos sin una aceptación clara y verificable.
- Derecho al olvido: Cualquier usuario puede solicitar la eliminación de sus datos personales
cuando estos ya no sean necesarios o si desea retirar su consentimiento.
- Derecho a la portabilidad de datos: El usuario debe poder descargar sus datos y transferirlos a otro servicio.
- Notificación de brechas de seguridad:
En caso de una violación de seguridad que afecte datos personales,
la empresa debe informar a la autoridad reguladora y a los usuarios en un plazo máximo de 72 horas.
- Designación de un Delegado de Protección de Datos (DPO): 
Si el sistema maneja grandes volúmenes de información personal, se debe asignar un responsable para supervisar el cumplimiento del GDPR.

Medidas de seguridad recomendadas:

- Cifrado de datos en reposo.
- Restricción del acceso a información confidencial.

## Seguridad Informática y Prevención de Ciberataques

Las mejores prácticas de seguridad informática deben implementarse en todas las fases del desarrollo para evitar vulnerabilidades explotables. 
Algunas acciones esenciales incluyen:

- Gestión segura de credenciales: Evitar la inclusión de claves de API o credenciales en el código fuente; en su lugar, utilizar variables de entorno o gestores de secretos.
- Monitoreo y auditoría de accesos: Registrar intentos de acceso sospechosos y generar alertas de seguridad.

Implementación de medidas contra ataques comunes:

- Protección contra inyección SQL mediante ORM seguro y validaciones estrictas.
- Prevención de Cross-Site Scripting (XSS) sanitizando entradas de usuario.

## Uso Ético de Recursos y Servicios en la Nube

El abuso o uso indebido de servicios en la nube puede resultar en la suspensión de cuentas o incluso en acciones legales. Para garantizar un uso adecuado de los servicios en la nube se recomienda:

- Respetar los términos de servicio de GitHub Actions, Google Cloud y Render.
- Evitar automatizaciones excesivas o maliciosas, como el scraping sin permiso de sitios web.
- Optimizar los recursos consumidos para evitar costos inesperados y reducir el impacto ambiental del procesamiento en la nube.

## Documentación de Licencias y Cumplimiento Legal

Para mantener un estado legal se tomaran las siguientes medidas:

- Incluir un archivo LICENSE en el repositorio, indicando la licencia del software desarrollado.
- Revisar periódicamente los términos de servicio de las herramientas y servicios utilizados, ya que pueden cambiar con el tiempo.
- Realizar auditorías internas para asegurar el cumplimiento de normativas y buenas prácticas.
