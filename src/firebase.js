import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiWSeNE7Ec9bBCn26if4RgJ6IY8bErudg",
  authDomain: "uploading-files-8f29f.firebaseapp.com",
  databaseURL: "https://uploading-files-8f29f-default-rtdb.firebaseio.com",
  projectId: "uploading-files-8f29f",
  storageBucket: "uploading-files-8f29f.appspot.com",
  messagingSenderId: "799176730689",
  appId: "1:799176730689:web:0b82c119a56ecc1e2cfec0"
};
 
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
