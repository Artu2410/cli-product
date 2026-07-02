# Catálogo de Productos de Rehabilitación

API REST para administrar productos de rehabilitación con Firebase Firestore y autenticación JWT.

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
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   ├── data/
│   │   └── rehabilitation-products.js
│   └── seeders/
│       └── product.seeder.js
├── .env
├── index.js
├── package.json
└── README.md
```

## Instalación

1. Clona el repositorio.
2. Ejecuta:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con tus credenciales de Firebase y la clave JWT.

## Variables de entorno

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

`npm run seed:products` inserta productos de rehabilitación base en Firestore usando la colección `products`.

## Productos incluidos en el seeder

- Mini bosu
- Pelota de rehabilitación
- Set de bandas de tela

## Rutas disponibles

### Autenticación

`POST /api/auth/login`

Body:

```json
{
  "email": "user@email.com",
  "password": "strongPass123"
}
```

### Productos

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (requiere JWT)
- `PUT /api/products/:id` (requiere JWT)
- `DELETE /api/products/:id` (requiere JWT)

Ejemplo para crear un producto:

```json
{
  "name": "Mini bosu",
  "description": "Producto para mejorar equilibrio y estabilidad.",
  "price": 35000,
  "category": "rehabilitación",
  "stock": 10
}
```

> `GET` es público. `POST`, `PUT` y `DELETE` requieren el header `Authorization: Bearer <token>`.

## Notas

- `src/models/Product.js` gestiona el acceso a Firestore.
- `src/controllers/` define la lógica de las APIs.
- `src/middlewares/auth.middleware.js` protege las rutas con JWT.
- `index.js` arranca el servidor y configura Express.
