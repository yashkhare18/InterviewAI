
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "interviewiq-47ee6.firebaseapp.com",
  projectId: "interviewiq-47ee6",
  storageBucket: "interviewiq-47ee6.firebasestorage.app",
  messagingSenderId: "492705324118",
  appId: "1:492705324118:web:7a283b64cae3a4a839eff7"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}