import db from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

const mapSnapshot = (snapshot) => ({
  id: snapshot.id,
  ...snapshot.data(),
});

export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  const products = [];
  snapshot.forEach((document) => products.push(mapSnapshot(document)));
  return products;
};

export const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) return null;
  return mapSnapshot(snapshot);
};

export const createProduct = async (productData) => {
  const docRef = await addDoc(productsCollection, productData);
  return {
    id: docRef.id,
    ...productData,
  };
};

export const updateProduct = async (id, updates) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) return null;
  await updateDoc(productRef, updates);
  return {
    id,
    ...snapshot.data(),
    ...updates,
  };
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const snapshot = await getDoc(productRef);
  if (!snapshot.exists()) return false;
  await deleteDoc(productRef);
  return true;
};