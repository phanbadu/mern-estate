// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-estate-26b28.firebaseapp.com',
    projectId: 'mern-estate-26b28',
    storageBucket: 'mern-estate-26b28.appspot.com',
    messagingSenderId: '968867415920',
    appId: '1:968867415920:web:c3a47d3f5435ac33b0b1b5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
