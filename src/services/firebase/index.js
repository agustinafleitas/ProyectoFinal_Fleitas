import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAG9n4ehvqHAIHwGVVE-rbAx-WCwbfB58",
  authDomain: "puppiesshop-8da53.firebaseapp.com",
  projectId: "puppiesshop-8da53",
  storageBucket: "puppiesshop-8da53.appspot.com",
  messagingSenderId: "467807577200",
  appId: "1:467807577200:web:e221a48b85bc2474c740b5"
};


const app = initializeApp(firebaseConfig);
export const DataBase = getFirestore(app);