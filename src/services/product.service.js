import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/Product.js";

const isValidId = (id) => typeof id === "string" && id.trim().length > 0;

export const ProductService = {
  async getAllProducts() {
    return await getProducts();
  },

  async getProductById(id) {
    if (!isValidId(id)) {
      const error = new Error("ID inválido: se requiere un identificador de producto válido");
      error.status = 400;
      throw error;
    }

    const product = await getProductById(id);
    if (!product) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }
    return product;
  },

  async createProduct(data) {
    if (!data || typeof data !== "object") {
      const error = new Error("Datos inválidos: se requiere un objeto con name, price y category");
      error.status = 400;
      throw error;
    }

    const name = String(data.name || "").trim();
    const category = String(data.category || "").trim();
    const price = Number(data.price);

    if (!name || !category || data.price === undefined || data.price === null) {
      const error = new Error("Argumentos faltantes: name, price y category son requeridos");
      error.status = 400;
      throw error;
    }

    if (Number.isNaN(price) || price < 0) {
      const error = new Error("El precio debe ser un número válido mayor o igual a cero");
      error.status = 400;
      throw error;
    }

    const stock = data.stock !== undefined ? Number(data.stock) : 0;
    if (data.stock !== undefined && Number.isNaN(stock)) {
      const error = new Error("El stock debe ser un número válido");
      error.status = 400;
      throw error;
    }

    return await createProduct({
      name,
      price,
      category,
      stock,
      description: data.description || "",
    });
  },

  async updateProduct(id, updates) {
    if (!isValidId(id)) {
      const error = new Error("ID inválido: se requiere un identificador de producto válido");
      error.status = 400;
      throw error;
    }

    if (!updates || typeof updates !== "object") {
      const error = new Error("Datos inválidos: se requiere un objeto con campos a actualizar");
      error.status = 400;
      throw error;
    }

    const sanitizedUpdates = {};
    if (updates.name !== undefined) sanitizedUpdates.name = String(updates.name).trim();
    if (updates.category !== undefined) sanitizedUpdates.category = String(updates.category).trim();
    if (updates.price !== undefined) {
      const priceValue = Number(updates.price);
      if (Number.isNaN(priceValue) || priceValue < 0) {
        const error = new Error("El precio debe ser un número válido mayor o igual a cero");
        error.status = 400;
        throw error;
      }
      sanitizedUpdates.price = priceValue;
    }
    if (updates.stock !== undefined) {
      const stockValue = Number(updates.stock);
      if (Number.isNaN(stockValue) || stockValue < 0) {
        const error = new Error("El stock debe ser un número válido mayor o igual a cero");
        error.status = 400;
        throw error;
      }
      sanitizedUpdates.stock = stockValue;
    }
    if (updates.description !== undefined) sanitizedUpdates.description = String(updates.description);

    if (Object.keys(sanitizedUpdates).length === 0) {
      const error = new Error("Debe enviar al menos un campo a actualizar");
      error.status = 400;
      throw error;
    }

    const updatedProduct = await updateProduct(id, sanitizedUpdates);
    if (!updatedProduct) {
      const error = new Error("Producto no encontrado");
      error.status = 404;
      throw error;
    }
    return updatedProduct;
  },

  async deleteProduct(id) {
    if (!isValidId(id)) {
      const error = new Error("ID inválido: se requiere un identificador de producto válido");
      error.status = 400;
      throw error;
    }

    const deleted = await deleteProduct(id);
    if (!deleted) {
      const error = new Error("No se pudo eliminar: Producto no encontrado");
      error.status = 404;
      throw error;
    }
    return { message: `Producto con ID ${id} eliminado exitosamente` };
  },
};
