import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJBS57NiKt-lAZFL63Gtufi_FQwrvi9wE",
  authDomain: "hommies-74b5d.firebaseapp.com",
  databaseURL: "https://hommies-74b5d.firebaseio.com",
  projectId: "hommies-74b5d",
  storageBucket: "hommies-74b5d.appspot.com",
  messagingSenderId: "1011572208149",
  appId: "1:1011572208149:web:ce9dcaa891b1c4cbf6941c"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
