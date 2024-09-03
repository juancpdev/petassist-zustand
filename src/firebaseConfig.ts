// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD040gl940_Tp6YIv9DuEKDXeiwVFfqWQc",
  authDomain: "doctorsassist.firebaseapp.com",
  projectId: "doctorsassist",
  storageBucket: "doctorsassist.appspot.com",
  messagingSenderId: "674670138497",
  appId: "1:674670138497:web:474d91f368401542eb6980"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar el servicio de autenticación
const auth: Auth = getAuth(app);

export { auth };
