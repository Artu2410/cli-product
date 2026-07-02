import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productsRouter from "./src/routes/product.routes.js";
import usersRouter from "./src/routes/users.router.js";
import authRouter from "./src/routes/auth.router.js";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;