export const environment = {
  product: false,
  apiUrl: "https://registro-de-gado-backend.onrender.com",
  //apiUrl: "http://localhost:8080",
}
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "",
  authDomain: "-..",
  projectId: "registro-gado",
  storageBucket: "-gado..app",
  messagingSenderId: "",
  appId: "1:::",
  measurementId: "G-",
  vapidKey: "-",
};

const firebaseApp = initializeApp(firebaseConfig);
