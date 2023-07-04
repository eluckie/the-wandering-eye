import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
// }

const firebaseConfig = {
  apiKey: "AIzaSyDUGVmvrQoibTPe9L4IA2kzWANDu7GdilU",
  authDomain: "the-wandering-eye.firebaseapp.com",
  projectId: "the-wandering-eye",
  storageBucket: "the-wandering-eye.appspot.com",
  messagingSenderId: "585232906331",
  appId: "1:585232906331:web:3f96850385f06d048a677e",
  measurementId: "G-YT5MT6EWNP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;