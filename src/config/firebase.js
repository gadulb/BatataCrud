// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvlICeLdGvahS5u9LQJsZ509Pq3d-Nkn4",
  authDomain: "aulafirebase-21d61.firebaseapp.com",
  projectId: "aulafirebase-21d61",
  storageBucket: "aulafirebase-21d61.appspot.com",
  messagingSenderId: "539412120576",
  appId: "1:539412120576:web:d1557f293e21424a2104e5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);