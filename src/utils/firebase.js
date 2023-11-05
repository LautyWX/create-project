// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj1pKMQincmhp7fuODkin4A9yOzEfPcSs",
  authDomain: "project-manager-cf33e.firebaseapp.com",
  projectId: "project-manager-cf33e",
  storageBucket: "project-manager-cf33e.appspot.com",
  messagingSenderId: "849053740773",
  appId: "1:849053740773:web:b66b5c690a0ea6f208ee0c",
  measurementId: "G-6M05N9KB69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
