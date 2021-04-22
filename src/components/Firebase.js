import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyA9gb24ngr-q6lR-sKds_CJHf-zZ0XMnrU",
    authDomain: "quicknotes-fa315.firebaseapp.com",
    databaseURL: "https://quicknotes-fa315-default-rtdb.firebaseio.com",
    projectId: "quicknotes-fa315",
    storageBucket: "quicknotes-fa315.appspot.com",
    messagingSenderId: "121078564223",
    appId: "1:121078564223:web:a8838575638c34b5ec864a",
    measurementId: "G-W2Z0VYRTHC"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const db = fb.firestore();