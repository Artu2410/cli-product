# CLI - Gestión de Productos

Herramienta de línea de comandos (CLI) desarrollada en Node.js para gestionar productos de una tienda en línea utilizando la API de FakeStore.

---

## 📌 Descripción

Este proyecto permite interactuar con una API externa para realizar operaciones básicas sobre productos, directamente desde la terminal.

Funcionalidades implementadas:

 - Obtener todos los productos
 - Obtener un producto por ID
 - Crear un nuevo producto
 - Eliminar un producto

---

##  Tecnologías utilizadas

 Node.js
 JavaScript (ESModules)
 node-fetch
 API: https://fakestoreapi.com

---

## Instalación

1. Clonar el repositorio o descargar el proyecto

2. Instalar dependencias:

```bash
npm install
```

---

##  Uso

El programa se ejecuta desde la terminal utilizando el siguiente formato:

```bash
npm run start <METHOD> <RESOURCE> [DATA]
```

---

## Comandos disponibles

### Obtener todos los productos

```bash
npm run start GET products
```

---

### Obtener un producto por ID

```bash
npm run start GET products/1
```

---

### Crear un nuevo producto

```bash
npm run start POST products <title> <price> <category>
```

Ejemplo:

```bash
npm run start POST products silla 15000 rehabilitacion
```

---

### Eliminar un producto

```bash
npm run start DELETE products/<id>
```

Ejemplo:

```bash
npm run start DELETE products/3
```

---

## Funcionamiento

El programa utiliza `process.argv` para capturar los comandos ingresados desde la terminal y ejecuta distintas acciones según el método (GET, POST, DELETE).

Las peticiones a la API se realizan de forma asíncrona utilizando `fetch` con `async/await`.

---

## Notas

Si no se ingresan comandos válidos, el programa mostrará un mensaje de error.
Los datos enviados en POST deben incluir título, precio y categoría.

---

## Autor

Jose Arturo Azocar Perez

---

## Licencia

MIT
