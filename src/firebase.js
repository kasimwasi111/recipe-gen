import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABHhIE7mHepMsKx-ZMiMDKy6aA-AlIWq0",
  authDomain: "recipe-gen.firebaseapp.com",
  projectId: "recipe-gen",
  storageBucket: "recipe-gen.appspot.com",
  messagingSenderId: "428428068004",
  appId: "1:428428068004:web:c68077d9b9e31d99475231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
