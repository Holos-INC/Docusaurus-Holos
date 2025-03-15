# Ejemplos de handles

## 1. Obtener usuarios (GET)
```tsx
const handleFetchUsuarios = async (): Promise<void> => {
    const data = await fetchUsuarios(token);
    setUsuarios(data);
};
```
## 2. Crear nuevo usuario (POST)
```tsx
const handleCreateUsuario = async (): Promise<void> => {
    const nuevoUsuario: Usuario = { id: Math.random(), name: nombre, email };

    const usuarioCreado = await createUsuario(token, nuevoUsuario);
    if (usuarioCreado) {
        setUsuarios([...usuarios, usuarioCreado]); // Agregamos el nuevo usuario a la lista
        setNombre(""); // Limpiamos los inputs
        setEmail("");
    }
};
```
## 3. Actualizar usuario existente (PUT)
```tsx
const handleUpdateUsuario = async (): Promise<void> => {
    if (!usuarioId) return;

    const usuarioActualizado: Usuario = { id: usuarioId, name: nombre, email };
    const usuarioModificado = await updateUsuario(token, usuarioActualizado);

    if (usuarioModificado) {
        setUsuarios(usuarios.map((user) => (user.id === usuarioId ? usuarioModificado : user)));
        setNombre("");
        setEmail("");
        setUsuarioId(null);
    }
};
```
## 4. Eliminar usuario (DELETE)
```tsx
const handleDeleteUsuario = async (id: number): Promise<void> => {
    const eliminado = await deleteUsuario(token, id);
    if (eliminado) {
        setUsuarios(usuarios.filter((user) => user.id !== id));
    }
};
```