import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDSTQWxFhE2L8_ZZ3gC4yl5GIr0y6N22ZQ",
    authDomain: "simple-social-media-68aa7.firebaseapp.com",
    projectId: "simple-social-media-68aa7",
    storageBucket: "simple-social-media-68aa7.appspot.com",
    messagingSenderId: "129417448419",
    appId: "1:129417448419:web:dd4bd4068deeee95c22ed6",
    measurementId: "G-JXVE1BQVVX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;