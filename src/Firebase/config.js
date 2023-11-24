import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBK1_7DkCn1ydLGeLi2eXtIfCixU9uvyyg",
  authDomain: "es-shopi.firebaseapp.com",
  projectId: "es-shopi",
  storageBucket: "es-shopi.appspot.com",
  messagingSenderId: "595033668623",
  appId: "1:595033668623:web:6a242c03e2c2e8a782777a"
};

export const FirebaseApp = initializeApp( firebaseConfig )
export const storage = getStorage( FirebaseApp )