// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-fb.firebaseapp.com",
  projectId: "insta-next-fb",
  storageBucket: "insta-next-fb.appspot.com",
  messagingSenderId: "190933314953",
  appId: "1:190933314953:web:efe81ffbb344ea87e98558",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
