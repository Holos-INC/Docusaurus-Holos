# 3. Aspectos clave

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

1. [¿Cómo obtener el usuario loggeado?](#1-cómo-obtener-el-usuario-loggeado)
2. [¿Cómo se usa useState?](#2-cómo-se-usa-usestate)

## 1. ¿Cómo obtener el usuario loggeado?

El **Context API** permite gestionar el estado de autenticación de forma global en nuestra app. Con `useContext`, podemos compartir el estado del usuario en todas las pantallas sin necesidad de pasar props manualmente.

### 1.1. AuthenticationContext
Tenemos definido un [contexto](https://github.com/Holos-INC/Holos/blob/main/frontend/app/context/AuthContext.js) que almacena el usuario actual y las funciones de inicio y cierre de sesión.

### 1.2. Análisis de loggedInUser
El formato que tiene `loggedInUser` es el siguiente:

```json
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjbGllbnQxIiwiZXhwIjoxNzQyMDk4ODE3LCJpYXQiOjE3NDIwNDEyMTcsImF1dGhvcml0aWVzIjpbIkNMSUVOVCJdfQ.2XXptzlB0S2_EKsk94z5Xnz9dN90x94aZZumXrVQdzBJK-zdjk3oVVZTrWPcOmlcn8GENUX6PQTCQNtoiH-Jkw",
    "type": "Bearer",
    "id":4,
    "username": "client1",
    "roles": [
        "CLIENT"
    ]
}
```

### 1.3. Usar `AuthenticationContext` en un componente
Para acceder al usuario y a las funciones de autenticación, usamos `useContext` dentro de cualquier componente.

```tsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, Text, View } from 'react-native';

const ProfileScreen = () => {
    const { loggedInUser } = useContext(AuthContext); // Devuelve las credenciales de la persona que está usando la app en este momento
    const jwt = loggedInUser.token; // Se usa para autenticar a la hora de llamar a las funciones API
    const username = loggedInUser.username; // Devuelve el username del usuario
    const currentUserId = loggedInUser.id; // Devuelve el id del usuario

    return (
        <View>
            <Text>Bienvenido, {user?.name || 'Invitado'}</Text>
            {user && <Button title="Cerrar sesión" onPress={signOut} />}
        </View>
    );
};
```

## 2. ¿Cómo se usa useState?

`useState` en React Native permite manejar [estado](./1-Fundamentos.md) local en un componente funcional. Es útil cuando un valor cambia con las interacciones del usuario, como un contador, un input o el estado de un botón.

¡Vamos a poner un ejemplo para verlo de manera más explícita! A pesar de que [este código](https://github.com/Holos-INC/Holos/blob/main/frontend/app/src/screens/RequestCommission/form/RequestForm.tsx) puede mejorar en ciertos aspectos nos sirve para comprender cómo se debe usar la `AuthenticationContext`, `useState` y cómo crear formularios.

### 2.1. Uso de `AuthenticationContext`

```tsx
const { loggedInUser } = useContext(AuthenticationContext);
```

Aquí usamos `useContext` para acceder a `AuthenticationContext`, que proporciona información sobre el usuario autenticado. Esto nos permite obtener datos como su token de autorización:

```tsx
console.log("Logged In User:", loggedInUser);
console.log("Authorization Token:", loggedInUser?.token);
```

Estos `console.log` sirven para depuración, asegurando que la información del usuario está correctamente disponible en el formulario.

### 2.2. Manejo del estado con `useState`

El formulario usa `useState` para gestionar dos estados principales:

1. `selectedImage`: Almacena la imagen seleccionada por el usuario.
2. `commission`: Un objeto con los datos de la comisión a solicitar.

```tsx
const [selectedImage, setSelectedImage] = useState<string | null>(null);
const [commission, setCommission] = useState<Partial<Commission>>(emptyItem);
```

#### Función para actualizar el estado del formulario

Para actualizar los valores del formulario dinámicamente, usamos `handleChange`:

```tsx
const handleChange = (name: keyof Commission, value: string | number | Artist | null) => {
  setCommission((prev) => ({ ...prev, [name]: value }));
};
```

Cada vez que el usuario introduce un dato en un campo, la función actualiza la propiedad correspondiente en `commission`.

### 2.3. Selección de imágenes con `expo-image-picker`

La imagen se selecciona con la función `pickImage`, que usa `expo-image-picker`:

```tsx
const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
  }
};
```

Si el usuario selecciona una imagen, se guarda su URI en `selectedImage`, permitiendo mostrar una vista previa.

### 2.4. Envío del formulario

La función `handleSubmit` envía la solicitud de comisión llamando a `createCommission`:

```tsx
const handleSubmit = async () => {
  try {
    const commissionData = {
      name: commission.name,
      description: commission.description,
      price: Number(commission.price),
      numMilestones: Number(commission.numMilestones),
      paymentArrangement: "INITIAL"
    };

    const createdCommission = await createCommission(artist.id, commissionData, loggedInUser.token);
    Alert.alert("Success", "Commission request sent!");
  } catch (error) {
    Alert.alert("Error", "Failed to create commission.");
  }
};
```

Aquí se construye el objeto `commissionData`, asegurando que los valores numéricos sean convertidos correctamente. Si la petición es exitosa, se muestra un mensaje de éxito con `Alert.alert`.

### 2.5. Renderizado del formulario

Los componentes principales del formulario incluyen:

- **Inputs** para capturar el título, descripción, precio y número de hitos.
- **Vista previa de la imagen** seleccionada.
- **Botones** para seleccionar una imagen y enviar el formulario.

```tsx
<TextInput
  style={styles.title}
  placeholder="Title"
  value={commission.name}
  onChangeText={(text) => handleChange("name", text)}
  />

<TextInput
  style={styles.input}
  placeholder="Describe your request..."
  multiline
  value={commission.description}
  onChangeText={(text) => handleChange("description", text)}
/>

<TouchableOpacity style={styles.imageButton} onPress={pickImage}>
  <Icon name={cameraIcon} size={24} />
</TouchableOpacity>

<Button title="Submit" onPress={() => handleSubmit()} />
```

Cada `TextInput` está vinculado a un campo del estado `commission`, y los eventos `onChangeText` aseguran que los datos sean actualizados dinámicamente.

