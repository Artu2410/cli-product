import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

const productsSeeders = [
  {
    name: "Mini bosu",
    description: "Producto de rehabilitación ideal para equilibrio y estabilidad.",
    price: 35000,
    stock: 10,
    categoria: "rehabilitación",
  },
  {
    name: "Pelota de rehabilitación",
    description: "Pelota suave para ejercicios de movilidad y fortalecimiento.",
    price: 9000,
    stock: 15,
    categoria: "rehabilitación",
  },
  {
    name: "Set de bandas de tela",
    description: "Conjunto de bandas resistentes para entrenamiento y rehabilitación.",
    price: 18000,
    stock: 20,
    categoria: "rehabilitación",
  },
];

const createProducts = async () => {
  for (const product of productsSeeders) {
    await addDoc(productsCollection, product);
  }
};

createProducts()
  .then(() => {
    console.log("Productos sembrados correctamente en Firestore.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error al sembrar productos:", error);
    process.exit(1);
  });