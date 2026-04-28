import fetch from "node-fetch";

const BASE_URL = "https://fakestoreapi.com";

const [, , method, resource, ...data] = process.argv;

console.log("CLI");

const main = async () => {
  try {

    // ----
    // GET
    // ----
    if (method === "GET") {

      if (resource === "products") {
        const res = await fetch(`${BASE_URL}/products`);
        const products = await res.json();

        console.log("Lista de productos:");
        products.forEach(p => {
          console.log(`${p.id} - ${p.title} - $${p.price}`);
        });
      }

      else if (resource && resource.startsWith("products/")) {
        const id = resource.split("/")[1];

        const res = await fetch(`${BASE_URL}/products/${id}`);
        const product = await res.json();

        console.log("Producto:");
        console.log(product);
      }
    }

    // ----
    // POST
    // ---
    else if (method === "POST" && resource === "products") {
      const [title, price, category] = data;

      if (!title || !price || !category) {
        console.log("Faltan datos: title price category");
        return;
      }

      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          category
        })
      });

      const result = await res.json();

      console.log("Producto creado:");
      console.log(result);
    }

    // ----
    // DELETE
    // ----
    else if (method === "DELETE" && resource && resource.startsWith("products/")) {
      const id = resource.split("/")[1];

      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE"
      });

      const result = await res.json();

      console.log("Producto eliminado:");
      console.log(result);
    }

    else {
      console.log("Comando no válido");
    }

  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();