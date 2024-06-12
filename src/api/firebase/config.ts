import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from 'firebase/firestore';


// Define la interfaz para la configuración de Firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Configuración de Firebase usando variables de entorno para mayor seguridad
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY ?? "defaultValue",
  authDomain: process.env.AUTH_DOMAIN ?? "DOMAIN",
  projectId: process.env.PROJECT_ID ?? "projectID",
  storageBucket: process.env.STORAGE ?? " storageBucket ",
  messagingSenderId: process.env.MESSA ?? " messagingSenderId ",
  appId: process.env.APP_ID ?? " appId"
};

// Inicializa Firebase App
const app: FirebaseApp = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db: Firestore = getFirestore(app);