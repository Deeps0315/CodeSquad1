// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo7ngRMef4pBiDJlKb3s2VTH9E-NMg5NQ",
  authDomain: "codesquad-173d6.firebaseapp.com",
  projectId: "codesquad-173d6",
  storageBucket: "codesquad-173d6.appspot.com",
  messagingSenderId: "542923401465",
  appId: "1:542923401465:web:a03e8b387d226b6e469a28",
  measurementId: "G-FM5D9ESSND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();