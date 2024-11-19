// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAS8ZLM3tHIIO8HRyUXRl8klik_mzOaOp0",
  authDomain: "database-9380a.firebaseapp.com",
  projectId: "database-9380a",
  storageBucket: "database-9380a.firebasestorage.app",
  messagingSenderId: "727572765529",
  appId: "1:727572765529:web:acdf9d21f051d9250d0a48",
  measurementId: "G-4344SEJFHP",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore para usarlo en toda la app
const db = getFirestore(app);

export { db };
