# API REST

API REST para gestionar productos de rehabilitación con Firebase Firestore y autenticación JWT.

## Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
npm install
```

3. Copia `.env-example` a `.env` y completa las variables de Firebase y JWT.

## Configuración de entorno

```env
PORT=3000
JWT_SECRET=ClaveSuperSecretaDeTechLab2026

FIREBASE_API_KEY=tu_api_key_aqui
FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

## Scripts

```bash
npm run start
npm run seed:products
```

- `npm run start`: inicia el servidor en `localhost:3000`
- `npm run seed:products`: carga productos iniciales de rehabilitación en Firestore

## Create Product

method: POST

endpoint: `/api/products`

body:

```json
{
  "name": "Mini bosu",
  "description": "Producto para equilibrio y estabilidad.",
  "price": 35000,
  "categoria": "rehabilitación",
  "stock": 10
}
```

response:

```json
{
  "id": "abc123",
  "name": "Mini bosu",
  "description": "Producto para equilibrio y estabilidad.",
  "price": 35000,
  "categoria": "rehabilitación",
  "stock": 10
}
```

status: 201

## Error Create Product

method: POST

endpoint: `/api/products`

body:

```json
{
  "name": "Mini bosu"
}
```

response:

```json
{
  "error": "El campo price es requerido"
}
```

status: 422

## List Products

method: GET

endpoint: `/api/products`

response:

```json
[
  {
    "id": "abc123",
    "name": "Mini bosu",
    "description": "Producto para mejorar equilibrio y estabilidad.",
    "price": 35000,
    "categoria": "rehabilitación",
    "stock": 10
  }
]
```

status: 200

## Get Product

method: GET

endpoint: `/api/products/:id`

response:

```json
{
  "id": "abc123",
  "name": "Mini bosu",
  "description": "Producto para mejorar equilibrio y estabilidad.",
  "price": 35000,
  "categoria": "rehabilitación",
  "stock": 10
}
```

status: 200

## Update Product

method: PUT

endpoint: `/api/products/:id`

body:

```json
{
  "price": 38000,
  "stock": 12
}
```

response:

```json
{
  "message": "Producto actualizado",
  "product": {
    "id": "abc123",
    "name": "Mini bosu",
    "description": "Producto para equilibrio y estabilidad.",
    "price": 38000,
    "categoria": "rehabilitación",
    "stock": 12
  }
}
```

status: 200

## Delete Product

method: DELETE

endpoint: `/api/products/:id`

response:

```json
{
  "message": "Producto con ID abc123 eliminado exitosamente"
}
```

status: 200

## Auth Login

method: POST

endpoint: `/api/auth/login`

body:

```json
{
  "email": "user@email.com",
  "password": "strongPass123"
}
```

response:

```json
{
  "message": "Login exitoso",
  "token": "<jwt>",
  "user": {
    "id": 1,
    "name": "User",
    "email": "user@email.com",
    "admin": true
  }
}
```

status: 200

## Estructura del proyecto

```text
cli-product/
├── src/
│   ├── config/
│   │   └── firebase.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   ├── auth.router.js
│   │   └── product.routes.js
│   ├── seeders/
│   │   └── product.seeder.js
│   └── utils/
│       └── token.generator.js
├── .env-example
├── index.js
├── package.json
└── README.md
```