# 2. Estructura del repositorio

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

## **1. Estructura del Proyecto**

/src\
 ├── [/components](#components---componentes-reutilizables)        # Componentes reutilizables\
 ├── [/screens ](#screens---pantallas-principales)          # Pantallas principales\
 ├── [/services](#services---llamadas-a-apis-y-lógica-de-negocio)          # Llamadas a APIs y lógica de negocio\
 ├── [/hooks](#hooks---hooks-personalizados)             # Hooks personalizados\
 ├── [/contexts](#contexts---manejo-de-estado-global)          # Manejo de estado global\
 ├── [/utils](#utils---funciones-auxiliares)             # Funciones auxiliares\
 ├── [/constants](#constants---valores-estáticos)         # Valores estáticos (colores, tamaños, URLs)\
 ├── [/styles](#styles---estilos-y-temas-globales)            # Estilos y temas globales\
 ├── [/navigation](#navigation---configuración-de-navegación)        # Configuración de navegación\
 ├── [App.tsx](#apptsx---componente-raíz)            # Componente raíz\

### `/components` - Componentes Reutilizables
Esta carpeta almacena [componentes](./1-Fundamentos.md#3-componentes) reutilizables, como botones, inputs o modales.
#### Ejemplo: `Button.tsx`
```tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
```

---
### `/screens` - Pantallas Principales
Aquí se almacenan las pantallas principales de la app.
#### Ejemplo: `HomeScreen.tsx`
```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Holos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

---
### `/services` - Llamadas a APIs y Lógica de Negocio
Aquí se definen las [funciones para hacer llamadas a la API](./1-Fundamentos.md#5-funciones-api) y manejar datos.
#### Ejemplo: `userService.ts`
```tsx
import axios from 'axios';
import { API_URL } from '../constants/config';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
```

---
### `/hooks` - Hooks Personalizados
Aquí se crean [hooks](./1-Fundamentos.md#7-hooks) para reutilizar lógica de estado o efectos secundarios.
#### Ejemplo: `useAuth.ts`
```tsx
import { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers().then(setUser).catch(console.error);
  }, []);

  return { user };
};
```

---
### `/contexts` - Manejo de Estado Global
Se guardan los [contextos](./1-Fundamentos.md#7-hooks) de React para manejar el estado global.
#### Ejemplo: `AuthContext.tsx`
```tsx
import React, { createContext, useState, ReactNode } from 'react';

type AuthContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
```

---
### `/utils` - Funciones Auxiliares
Funciones generales reutilizables en varias partes del proyecto.
#### Ejemplo: `formatDate.ts`
```tsx
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('es-ES');
};
```

---
### `/constants` - Valores Estáticos
Valores como colores, tamaños, URLs, etc.
#### Ejemplo: `colors.ts`
```tsx
export const COLORS = {
  primary: '#6200ea',
  secondary: '#03dac6',
  background: '#f5f5f5',
};
```

---
### `/styles` - Estilos y Temas Globales
Se pueden definir estilos globales o temas de la app.
#### Ejemplo: `globalStyles.ts`
```tsx
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
```

---
### `/navigation` - Configuración de Navegación
Definición de la estructura de navegación en la app.
#### Ejemplo: `AppNavigator.tsx`
```tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";

// Definir el tipo de las rutas disponibles en la navegación
type RootStackParamList = {
  Home: undefined; // No recibe parámetros
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

---
### `App.tsx` - Componente Raíz
El punto de entrada de la aplicación.
#### Ejemplo:
```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from "./src/contexts/AuthContext";
import { HomeScreen } from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
```