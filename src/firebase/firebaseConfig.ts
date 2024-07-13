import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdHNPNxtjbb3erwav1zobM_JeciQV1oEM",
  authDomain: "chat-app-b2216.firebaseapp.com",
  projectId: "chat-app-b2216",
  storageBucket: "chat-app-b2216.appspot.com",
  messagingSenderId: "974192686778",
  appId: "1:974192686778:web:542520c97c3da488b9f483",
  measurementId: "G-RH724TRJ4J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
