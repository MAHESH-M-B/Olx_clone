import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBRYmBsIrhltioZ5KGmONnhfTsBe9dHVy4",
    authDomain: "olxclone-95308.firebaseapp.com",
    projectId: "olxclone-95308",
    storageBucket: "olxclone-95308.appspot.com",
    messagingSenderId: "504863345131",
    appId: "1:504863345131:web:835795a9c57a737db871ae",
    measurementId: "G-E2TNN5FY77"
  };


  export const Firebase = firebase.initializeApp(firebaseConfig)