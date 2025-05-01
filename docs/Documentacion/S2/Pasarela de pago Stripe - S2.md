# Documentación de la Pasarela de Pago - Stripe - S2

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
| Miguel Ángel Gómez   |  Redactor                       |
| José María Portela Huerta    |  Revisor                       |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


## Control de Versiones

| Fecha       | Versión | Descripción              | Autor|
|-------------|---------|--------------------------|------|
| 26/03/2025  | v1.0    | Creación del documento   | Miguel Gómez Vela|



## Índice de Contenidos

1. [Introducción](#1-introducción)
2. [Arquitectura de la Pasarela de Pago](#2-arquitectura-de-la-pasarela-de-pago)
3. [Integración con Stripe](#3-integración-con-stripe)
   - [Proceso de Pago](#31-proceso-de-pago)
   - [Proceso de Retiro de Ganancias](#32-proceso-de-retiro-de-ganancias)
4. [Flujo de Pagos Entre Clientes](#4-flujo-de-pagos-entre-clientes)
5. [Control de Transacciones y Seguridad](#5-control-de-transacciones-y-seguridad)
6. [Políticas de Uso y Gestión de Pagos](#6-políticas-de-uso-y-gestión-de-pagos)
7. [Evaluación y Registro del Uso de la Pasarela de Pago](#7-evaluación-y-registro-del-uso-de-la-pasarela-de-pago)

---

## 1. Introducción

La pasarela de pago implementada en este proyecto tiene como objetivo gestionar los pagos entre clientes dentro de la aplicación. A través de la integración con **Stripe**, los usuarios pueden realizar pagos entre sí, y las ganancias obtenidas por un cliente son depositadas en una cuenta interna de la aplicación. Además, los usuarios tienen la opción de retirar el dinero acumulado en cualquier momento.

Este sistema facilita la transferencia de fondos entre los clientes de manera rápida, eficiente y segura, utilizando la infraestructura robusta de **Stripe** para procesar pagos.

---

## 2. Arquitectura de la Pasarela de Pago

La pasarela de pago se implementa siguiendo una arquitectura de **microservicios**, donde cada componente tiene una responsabilidad específica en el proceso de gestión de pagos. La infraestructura incluye los siguientes elementos:

- **Cliente **: El cliente que realiza el pago hacia otro cliente.
- **Artista**: El cliente que recibe el dinero.
- **Aplicación Backend**: Encargada de gestionar las peticiones de pago y retiro, interactuar con Stripe, y actualizar las cuentas internas de los clientes.
- **Stripe API**: Proveedor de pagos que facilita la transferencia de fondos entre clientes.
- **Cuenta Interna**: La cuenta virtual dentro de la aplicación donde se almacenan las ganancias de cada cliente.

---

## 3. Integración con Stripe

### 3.1. Proceso de Pago

El proceso de pago se realiza utilizando la API de **Stripe**, donde el Cliente A paga al Cliente B. Los pasos detallados son los siguientes:

1. **Autenticación**: El Cliente  se autentica en la aplicación utilizando sus credenciales.
2. **Selección de Monto**: El Cliente A selecciona el monto que desea transferir al Artista.
3. **Generación del Pago**: La aplicación realiza una solicitud a Stripe para crear una **PaymentIntent** con el monto y la información del receptor (Artista).
4. **Confirmación del Pago**: Una vez que Stripe procesa el pago, se confirma la transacción y el dinero es transferido a la cuenta interna de Artista.
5. **Notificación**: Ambos reciben notificaciones sobre el estado de la transacción.

### 3.2. Proceso de Retiro de Ganancias

Una vez que las ganancias de un Artista han sido transferidas a su cuenta interna, pueden ser retiradas en cualquier momento a través de los siguientes pasos:

1. **Solicitud de Retiro**: El Artista solicita retirar el dinero disponible en su cuenta interna.
2. **Verificación de Fondos**: La aplicación verifica que el Artista tiene suficiente saldo disponible para realizar el retiro.
3. **Transferencia de Fondos**: La aplicación solicita a Stripe la transferencia del saldo de la cuenta interna del Artista a su cuenta bancaria asociada.
4. **Notificación**: El Artista es notificado sobre el estado del retiro (exitoso o fallido).

---

## 4. Flujo de Pagos Entre Clientes

El flujo de pagos entre clientes se basa en un modelo de **pago por transferencia directa**, donde los fondos se mueven de un cliente a otro a través de la pasarela de pago. La estructura básica del flujo es:

1. Cliente realiza el pago al Artista.
2. El monto pagado es depositado en la cuenta interna de Artista.
3. Artista puede solicitar el retiro de sus ganancias en cualquier momento.
4. El retiro se procesa y se transfiere a la cuenta bancaria de Artista a través de Stripe.

Desde el punto de vista de la aplicación, el proceso de pago sigue una secuencia de pasos que garantiza que el dinero primero llega a la cuenta de la aplicación antes de ser distribuido entre las partes involucradas.

1. **Pago Inicial del Comprador**: Cuando un comprador realiza un pago, este dinero es primero transferido a la **cuenta de la aplicación** y no directamente a los artistas. Esto asegura que la aplicación pueda verificar la transacción y retener la comisión antes de distribuir el dinero.

2. **Comisiones de la Aplicación**: Antes de cualquier otra distribución, la aplicación retiene su parte correspondiente de la comisión por el servicio prestado.

3. **Distribución de Fondos**: Una vez que se ha realizado el servicio y el trabajo ha sido entregado (o si la transacción es cancelada), el dinero restante se distribuye entre el **artista** y el **comprador** (si es el caso de una cancelación que implique devolución). 

4. **Cancelación y Reembolso**: Si el comprador decide cancelar la transacción, se realiza un reembolso correspondiente. Si el reembolso es total, el dinero será devuelto al comprador. 

Este flujo garantiza que todas las transacciones se gestionen de manera segura y clara, protegiendo tanto a los compradores como a los artistas, mientras que la aplicación mantiene un control total sobre las finanzas hasta la distribución final de los pagos.
---

## 5. Control de Transacciones y Seguridad

Para garantizar la **seguridad** y **transparencia** en todas las transacciones, la pasarela de pago implementa las siguientes medidas:

- **Autenticación de Usuarios**: Cada cliente debe autenticarse antes de realizar pagos o solicitar retiros.
- **Encriptación de Datos**: Toda la información sensible (como los detalles de pago) se cifra utilizando protocolos de seguridad estándar de la industria.
- **Logs de Transacciones**: Se lleva un registro detallado de todas las transacciones realizadas, incluyendo la fecha, el monto, y las partes involucradas.
- **Autorización de Retiro**: Los retiros solo pueden ser procesados si el Cliente B tiene fondos suficientes en su cuenta interna.

---

## 6. Políticas de Uso y Gestión de Pagos

Las políticas de uso de la pasarela de pago aseguran que las transacciones se realicen de manera ética, segura y conforme a las normativas legales. Algunas de las principales políticas son:

- **Política de Pagos**: Solo se permite el pago entre clientes registrados y autenticados.
- **Política de Retiros**: Los clientes solo pueden retirar el dinero disponible en su cuenta interna.
- **Cumplimiento con Normativas Financieras**: La pasarela de pago sigue las normativas locales e internacionales en cuanto a transferencias electrónicas de dinero y protección de datos personales.

---

## 7. Evaluación y Registro del Uso de la Pasarela de Pago

Para asegurar la eficiencia y mejorar continuamente el sistema de pagos, se implementará un **sistema de registro y evaluación** de las transacciones. Esto permitirá:

- **Monitorear el rendimiento de la pasarela de pago**.
- **Evaluar el tiempo de procesamiento de los pagos y retiros**.
- **Detectar posibles problemas o incidencias en las transacciones**.

### Registro de Transacciones

Cada transacción realizada será registrada con los siguientes datos:

- **ID de la Transacción**: Número único de la transacción.
- **Cliente Pagador**: Nombre del cliente que realiza el pago.
- **Cliente Receptor**: Nombre del cliente que recibe el pago.
- **Monto de la Transacción**: Cantidad de dinero transferida.
- **Estado de la Transacción**: Confirmada, pendiente, fallida.
- **Fecha de la Transacción**: Fecha y hora en que se realizó la transacción.

---