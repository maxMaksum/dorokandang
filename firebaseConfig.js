import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsdXahPE0QFBjqkii8FeGrv7U5jt6sQ6U",
  authDomain: "lasem-bdbe0.firebaseapp.com",
  projectId: "lasem-bdbe0",
  storageBucket: "lasem-bdbe0.appspot.com",
  messagingSenderId: "1002457586670",
  appId: "1:1002457586670:web:1844c2f1cff29d341accff"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage }