export const environment = {
  product: false,
  apiUrl: "https://registro-de-gado-backend.onrender.com",
}
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBkEAZuC3iYnDeZFG21DmlxXNX6iI_2j58",
  authDomain: "registro-gado.firebaseapp.com",
  projectId: "registro-gado",
  storageBucket: "registro-gado.firebasestorage.app",
  messagingSenderId: "1030379429431",
  appId: "1:1030379429431:web:f8681207a5d71c3ba929b2",
  measurementId: "G-RLHRCMLWEE",
  vapidKey: "BFkKgTMDjYfNOQV_QpdA1tdkAb7JLxvJXawo3wTHF2YxwXtwNEofWb0wQLW4xohB9715vp3Jde-FextXLmlp_Ys",
};

const firebaseApp = initializeApp(firebaseConfig);
