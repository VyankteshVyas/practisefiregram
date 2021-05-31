import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA3lGde8JqczJ5lzGudNRZABQAYbUXJdXQ",
    authDomain: "firegrampractis.firebaseapp.com",
    projectId: "firegrampractis",
    storageBucket: "firegrampractis.appspot.com",
    messagingSenderId: "620016488434",
    appId: "1:620016488434:web:4dcd88b7902e85380c256b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var storage = firebase.storage();
  var db = firebase.firestore();

  export {storage,db};


