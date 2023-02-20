// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Kxv3TttjLdUHwQTmhka1xHutJtAtYTg",
  authDomain: "chat-76f03.firebaseapp.com",
  projectId: "chat-76f03",
  storageBucket: "chat-76f03.appspot.com",
  messagingSenderId: "854512482316",
  appId: "1:854512482316:web:b6f6665799c741c3299629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)


export const db = getFirestore(app)