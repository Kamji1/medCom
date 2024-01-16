// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBelfsSq4PVUYlpXRxo5C9MYnzDgxyM_W0",
    authDomain: "medcom-938ea.firebaseapp.com",
    projectId: "medcom-938ea",
    storageBucket: "medcom-938ea.appspot.com",
    messagingSenderId: "875458554742",
    appId: "1:875458554742:web:228f212fb2e75abfd7a857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }