# Ejemplos de eventos
## 1. onPress

```tsx
export default const MiBoton = () => {
    const handlePress = () => {
        alert("¡Botón presionado!");
    };

    return <Button title="Presiona aquí" onPress={handlePress} />;
};
```

## 2. onChangeText

```tsx
export default const InputEjemplo = () => {
    const [texto, setTexto] = useState("");

    return (
        <View>
            <Text>Escribiste: {texto}</Text>
            <TextInput value={texto} onChangeText={setTexto} />
        </View>
    );
};
```

## 3. onSubmitEditing

```tsx
export default const Buscador = () => {
    const handleSubmit = () => {
        alert("Búsqueda enviada");
    };

    return <TextInput placeholder="Buscar..." onSubmitEditing={handleSubmit} />;
};
```

## 4. onFocus y onBlur

```tsx
export default const InputFoco = () => {
    const [borde, setBorde] = useState("gray");

    return (
        <View>
            <TextInput
                style={{ borderBottomWidth: 2, borderBottomColor: borde }}
                onFocus={() => setBorde("blue")}
                onBlur={() => setBorde("gray")}
            />
        </View>
    );
};
```

## 5. onScroll

```tsx
export default const ScrollEjemplo = () => {
    const handleScroll = (event: any) => {
        console.log("Desplazamiento:", event.nativeEvent.contentOffset.y);
    };

    return (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
            <Text>Contenido largo aquí...</Text>
        </ScrollView>
    );
};
```


## 6. onEndReached

```tsx
const datos = Array.from({ length: 20 }, (_, i) => `Elemento ${i + 1}`);

const ListaConCarga = () => {
    const handleEndReached = () => {
        console.log("Cargar más datos...");
    };

    return (
        <FlatList
            data={datos}
            renderItem={({ item }) => <Text>{item}</Text>}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5} // Detecta cuando el usuario está cerca del final
        />
    );
};
```
