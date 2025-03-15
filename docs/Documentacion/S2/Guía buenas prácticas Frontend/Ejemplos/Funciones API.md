# Ejemplos de funciones API
Usaremos la entidad ficticia de `Usuario` para explicar su funcionamiento:
```tsx
export interface Usuario {
    id: number;
    name: string;
    email: string;
}
```

## 1. Crear instancia de axios con la URL base
```tsx
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", // Aquí va la URL de la API
    headers: {
        "Content-Type": "application/json", // Especificamos que enviamos JSON
    },
});
```

## 2. Obtener información de backend (GET)
```tsx
export const fetchUsuarios = async (token: string): Promise<Usuario[]> => {
    try {
        const response = await api.get<Usuario[]>("/users", {
            headers: { Authorization: `Bearer ${token}` }, // Enviamos el token de autenticación
        });

        return response.data;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return [];
    }
};
```

## 3. Enviar datos a backend (POST)
```tsx
export const createUsuario = async (token: string, nuevoUsuario: Usuario): Promise<Usuario | null> => {
    try {
        const response = await api.post<Usuario>("/users", nuevoUsuario, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return null;
    }
};
```

## 4. Editar datos de backend (PUT)

```tsx
export const updateUsuario = async (token: string, usuarioActualizado: Usuario): Promise<Usuario | null> => {
    try {
        const response = await api.put<Usuario>(`/users/${usuarioActualizado.id}`, usuarioActualizado, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return null;
    }
};
```

## 5. Eliminar datos de backend (DELETE)
```tsx
export const deleteUsuario = async (token: string, id: number): Promise<boolean> => {
    try {
        await api.delete(`/users/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return true;
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        return false;
    }
};
```