import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDvOwcc160-D4LF5sQp518-nrnBJTXtujE",
  authDomain: "skilful-webbing-352001.firebaseapp.com",
  projectId: "skilful-webbing-352001",
  storageBucket: "skilful-webbing-352001.appspot.com",
  messagingSenderId: "457117379347",
  appId: "1:457117379347:web:5bb9a6a6751c7c49adc8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }