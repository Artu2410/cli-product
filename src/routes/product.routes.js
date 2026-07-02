import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// Prefijo: /api/products
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken, createProduct);
router.put("/:id", verifyToken, updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;