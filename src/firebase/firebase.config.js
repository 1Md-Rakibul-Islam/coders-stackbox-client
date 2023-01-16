// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDdLrjAXvMppqqeeIb9BJ_Ebq2f44RT3pQ",
  // authDomain: "codersstackbox-c9449.firebaseapp.com",
  // projectId: "codersstackbox-c9449",
  // storageBucket: "codersstackbox-c9449.appspot.com",
  // messagingSenderId: "1008529656367",
  // appId: "1:1008529656367:web:6b3b28e2e4d709ad52d4da"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
