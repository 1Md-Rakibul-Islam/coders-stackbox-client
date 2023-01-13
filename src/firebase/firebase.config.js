// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Coders_StackBox_apiKey,
  authDomain: process.env.Coders_StackBox_authDomain,
  projectId: process.env.Coders_StackBox_projectId,
  storageBucket: process.env.Coders_StackBox_storageBucket,
  messagingSenderId: process.env.Coders_StackBox_messagingSenderId,
  appId: process.env.Coders_StackBox_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;