import { ProductService } from "../services/product.service.js";

const formatError = (error) => ({
  status: error.status || 500,
  body: { error: error.message || "Error interno del servidor" },
});

export const getProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    const { status, body } = formatError(error);
    res.status(status).json(body);
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    const { status, body } = formatError(error);
    res.status(status).json(body);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    const { status, body } = formatError(error);
    res.status(status).json(body);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductService.updateProduct(req.params.id, req.body);
    res.json({ message: "Producto actualizado", product: updatedProduct });
  } catch (error) {
    const { status, body } = formatError(error);
    res.status(status).json(body);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const result = await ProductService.deleteProduct(req.params.id);
    res.json(result);
  } catch (error) {
    const { status, body } = formatError(error);
    res.status(status).json(body);
  }
};