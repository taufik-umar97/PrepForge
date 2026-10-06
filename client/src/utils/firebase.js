import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepforge-ddfba.firebaseapp.com",
  projectId: "prepforge-ddfba",
  storageBucket: "prepforge-ddfba.firebasestorage.app",
  messagingSenderId: "978176669740",
  appId: "1:978176669740:web:4410fdf4e575ac95e9b989"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider};