# 1. Fundamentos de React Native

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
**Fecha:** 15/03/2025  
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
| Julia Ángeles        |  Redactora                      |
| []       |  Revisor                        |

**Repositorio:** [GitHub - Holos-INC](https://github.com/Holos-INC/Docusaurus-Holos)


**Tabla de versiones**

| Versión | Fecha       | Descripción de cambios | Autor           |
|---------|-------------|------------------------|-----------------|
| v1.0    | 15/03/2025  | Creación del documento.| Julia Ángeles   |

---

## 0. Índice

1. [Introducción](#1-introducción)
2. [Props y estado (useState)](#2-crear-un-contexto-de-autenticación)
3. [Componentes](#3-componentes)
4. [Eventos y manejo de eventos](#4-eventos-y-manejo-de-eventos)
5. [Funciones API](#5-funciones-api)
6. [Handles](#6-handles)
7. [Hooks en React Native](#7-hooks)
8. [Tipado en React Native con TypeScript](#8-tipado-con-typescript)
9. [Navegación segura y gestión de permisos](#9-navegación-segura-y-gestión-de-permisos)

## 1. Introducción
En esta sección explicaremos la estructura y las buenas prácticas en un proyecto de React Native con TypeScript (.tsx).

Cada parte del código sigue un formato definido para asegurar claridad, reutilización y mantenibilidad.
Se indican el formato de las peticiones y cómo deben estructurarse.
Este mismo principio se aplica a componentes reutilizables, hooks personalizados y otras partes del código, asegurando una organización consistente en todo el proyecto.

## 2. Props y estado (useState)

### 2.1. ¿Qué es un prop?

Son los **datos/funciones** que pasamos a los componentes. Vienen dados por el padre del componente.

### 2.2. ¿Qué es un estado?

El estado es el **valor actual de los datos** dentro del componente, y cambia con el tiempo.

### Ejemplo
- **likes** es el estado actual del componente.
- **setLikes** permite actualizar el estado.
- **nombre** es un prop.

```tsx
const Tarjeta = ({ nombre }: { nombre: string }) => {

    const [likes, setLikes] = useState(0);

    return (
        <View>
            <Text>{nombre}\</Text>
            <Text>Likes: {likes}\</Text>
            <Button title="Me gusta" onPress={() \=\> setLikes(likes \+ 1)} />
        </View>
    );
};
```

## 3. Componentes

Es una **parte reutilizable** de la interfaz, como un botón, un texto o una pantalla, que se usa para construir la app.

| **Tipo**               | **Descripción** |
|------------------------|----------------|
| **\<View\>**          | Contenedor que agrupa elementos. |
| **\<SafeAreaView\>**  | Igual que View, pero evita zonas no visibles en móviles. |
| **\<Text\>**          | Mostrar texto en pantalla. |
| **\<TextInput\>**     | Entrada de texto para el usuario. |
| **\<Button\>**        | Botón simple con `onPress`. |
| **\<TouchableOpacity\>** | Botón flexible con cambio de opacidad al tocar. |
| **\<TouchableHighlight\>** | Botón como TouchableOpacity pero con fondo resaltado. |
| **\<ScrollView\>**    | Permite scroll en mucho contenido. |
| **\<FlatList\>**      | Lista optimizada para muchos elementos. |
| **\<Image\>**             | Mostrar imágenes en la app. |
| **\<ImageBackground\>**   | Usar una imagen como fondo. |
| **\<StyleSheet\>**        | Definir estilos en React Native. |


## 4. Eventos y manejo de eventos

Un evento es **algo que hace el usuario**, como tocar un botón, escribir en un campo de texto o deslizar la pantalla.\
Van dentro de los [componentes](#3-componentes) que hemos hablado y proporcionan funcionalidad.

|Evento |Descripción|Ejemplo|
|-|-|-|
|onPress|Cuando el usuario toca un botón o un elemento.|[Ejemplo](./Ejemplos/Eventos.md#1-onpress)|
|onChangeText|Cuando el usuario escribe en un campo de texto.	Puede servir para guardar lo que el usuario escribe.|[Ejemplo](./Ejemplos/Eventos.md#2-onchangetext)|
|onSubmitEditing|Cuando el usuario presiona "Enter" en el teclado.|[Ejemplo](./Ejemplos/Eventos.md#3-onsubmitediting)|
|onFocus y onBlur|Cuando un campo de texto gana el foco. Cuando un campo de texto pierde el foco.|[Ejemplo](./Ejemplos/Eventos.md#4-onfocus-y-onblur)|
|onScroll|Cuando el usuario desliza una lista. Detectar el desplazamiento en un ScrollView.|[Ejemplo](./Ejemplos/Eventos.md#5-onscroll)|
|onEndReached|Cuando el usuario llega al final de una lista. Cargar más datos en un FlatList.|[Ejemplo](./Ejemplos/Eventos.md#6-onendreached)|

## 5. Funciones API
Las funciones de API [`fetchEntity`](./Ejemplos/Funciones%20API.md), [`createEntity`](./Ejemplos/Funciones%20API.md), [`updateEntity`](./Ejemplos/Funciones%20API.md), [`deleteEntity`](./Ejemplos/Funciones%20API.md) gestionan la comunicación con el backend.\
Su funcionamiento es similar a React.js, con la diferencia de que debemos especificar su [tipado](#8-tipado-con-typescript) correctamente.\
Utilizamos `axios` para manejar las llamadas.

**Ejemplos completos de código:** [Ver ejemplos de funciones API](./Ejemplos/Funciones%20API.md)

## 6. Handles
Se encargan de gestionar la interacción del usuario en el [componente](#3-componentes), se ejecutan cuando ocurre un [evento](#4-eventos-y-manejo-de-eventos).\
Es similar a React.js, con la diferencia de que se debe especificar su [tipado](#8-tipado-con-typescript) para un uso correcto.\

> ⚠️ **¡Hay que tener en cuenta la forma en la que backend recibe los datos!**  
> Nos debemos adecuar o comunicar nuestra sugerencia a la persona responsable de dicha API.

**Ejemplos completos de código:** [Ver ejemplos de handles](./Ejemplos/Handles.md)

## 7. Hooks

Para obtener más información sobre cada hook, puedes consultar la [documentación oficial de React](https://react.dev/reference/react/hooks).

|Hook|Descripción|Ejemplo de Uso|
|-|-|-|
| **`useState`**   | Permite agregar estado local a componentes funcionales.| ```const [contador, setContador] = useState(0)```|
| **`useEffect`**  | Gestiona efectos secundarios en componentes funcionales, similar a los métodos de ciclo de vida en componentes de clase. | ```useEffect(() => { <Lógica aquí>}, []);```|
| **`useContext`** | Accede al contexto de React, facilitando el paso de datos sin necesidad de props.| ```const valor = useContext(MiContexto);```|
| **`useReducer`** | Maneja el estado de componentes complejos mediante un reducer, útil para lógica de estado avanzada. | ```const [estado, dispatch] = useReducer(reducer, estadoInicial);```|
| **`useCallback`**| Memoriza funciones para evitar recrearlas en cada renderizado, mejorando el rendimiento.| ```const funcionMemorizada = useCallback(() => {<Lógica aquí>}, [dependencias]);```|
| **`useMemo`**    | Memoriza valores calculados para evitar cálculos innecesarios en cada renderizado.| ```const valorMemorizado = useMemo(() => calcularValor(), [dependencias]);```|
| **`useRef`**     | Crea una referencia mutable que persiste durante el ciclo de vida completo del componente, útil para acceder a elementos del DOM o mantener valores persistentes. | ```const miRef = useRef(null);```|
| **`useLayoutEffect`** | Similar a `useEffect`, pero se ejecuta sincrónicamente después de todas las mutaciones del DOM, ideal para realizar mediciones del DOM antes de que se renderice en pantalla. | ```useLayoutEffect(() => {<Lógica aquí>}, []);```|
| **`useImperativeHandle`** | Personaliza la instancia de referencia que se expone cuando se usa `ref` en componentes funcionales. | ```useImperativeHandle(ref, () => ({<Métodos expuestos>}));```|
| **`useDebugValue`** | Muestra una etiqueta en las DevTools de React para facilitar la depuración de hooks personalizados. | ```useDebugValue(valor, formato => `Valor: ${formato}`);```|


## 8. Tipado con TypeScript
Para evitar pasar datos incorrectos y errores de ejecución debemos definir qué tipo de datos puede tener una variable, función o componente. Es como definir la entidad en frontend.

### ¿Cómo se define el tipado?

1. Analizamos en backend la entidad a definir.
```java
@Entity
@Data
public class Usuario {
  @Unique
  private Integer id;

  @NotNull
  private String nombre;

  private Integer edad;

  @ManyToOne
  private Rol rol;
}
```

2. En frontend hacemos el tipado de dicha entidad, siguiendo el formato de backend.
```tsx
type Rol = {
  id: number;
  nombre: string;
};

type Usuario = {
  id: number;
  nombre: string;
  edad?: number, // Es opcional
  rol: Rol; // Reflejamos el ManyToOne
};
```
**Ejemplos completos de código:** [Ver ejemplos de tipado](./Ejemplos/Tipados.md)

## 9. Navegación segura y gestión de permisos
| **Concepto** | **Descripción** | **Ejemplo** |
|----------|---------------|------------|
| **Definir los roles y permisos** | Definimos los roles de usuario y las acciones permitidas para cada uno. | [`roles.ts`](./Ejemplos/Navegación.md#1-rolests) |
| **Crear un contexto de autenticación** | Almacena el usuario actual y su rol dentro de un contexto global. | [`AuthContext.tsx`](./Ejemplos/Navegación.md#2-authcontexttsx) |
| **Crear un HOC para proteger pantallas** | Verifica los permisos antes de renderizar una pantalla, asegurando que solo usuarios autorizados accedan. | [`withPermission.tsx`](./Ejemplos/Navegación.md#3-withpermissiontsx) |
| **Proteger rutas en el navegador** | Usamos `WithPermission` para restringir acceso a pantallas según el rol del usuario. | [`AppNavigator.tsx`](./Ejemplos/Navegación.md#4-appnavigatortsx) |
| **Verificar los permisos en la API** | Se validan permisos tanto en backend como en frontend antes de realizar llamadas a la API. | [`userService.ts`](./Ejemplos/Navegación.md#5-userservicets) |
