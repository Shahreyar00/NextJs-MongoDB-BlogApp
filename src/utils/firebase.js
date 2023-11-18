// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "qwikblog-de167.firebaseapp.com",
    projectId: "qwikblog-de167",
    storageBucket: "qwikblog-de167.appspot.com",
    messagingSenderId: "808021040188",
    appId: "1:808021040188:web:e82562d46600cd9c68f739"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);