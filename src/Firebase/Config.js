import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHXm0VAP4gPtNfU1cA5WPV0QI7bWKw04Y",
  authDomain: "breakfast-at-switzerland.firebaseapp.com",
  projectId: "breakfast-at-switzerland",
  storageBucket: "breakfast-at-switzerland.appspot.com",
  messagingSenderId: "594366307548",
  appId: "1:594366307548:web:75441c2595c90541d3e819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}