# Ejemplos de tipado

## 1. Tipado en componentes

```tsx
import { TouchableOpacity, Text } from "react-native";

// Definiendo un tipo de propiedades para un botón
type ButtonProps = {
  label: string;
  onPress: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);
```

* **Type `ButtonProps`** define el tipo de las props.
* **React.FC`<ButtonProps>`** asegura que el componente espera esas props.

## 2. Tipado en useState

```tsx
import { useState } from "react";

// Definiendo un tipo de usuario
type User = { name: string; age: number };
const [user, setUser] = useState<User | null>(null);
```

## 3. Tipado en useEffect

```tsx
import { useState, useEffect } from "react";

const [userId, setUserId] = useState<number | null>(null);

useEffect(() => {
  if (userId !== null) {
    console.log(`Cargando datos para el usuario ${userId}`);
  }
}, [userId]);
```

## 4. Tipado en requests a API

```tsx
import { useEffect } from "react";

// Definiendo un tipo de usuario
type User = { id: number; name: string };

const fetchUser = async (): Promise<User> => {
  const response = await fetch("https://api.example.com/user/1");
  return response.json();
};

useEffect(() => {
  fetchUser().then((user) => console.log(user.name));
}, []);
```