import firebase from 'Firebase';

export const firebaseConfig = {
	apiKey: "AIzaSyA9gb24ngr-q6lR-sKds_CJHf-zZ0XMnrU",
	authDomain: "quicknotes-fa315.firebaseapp.com",
	projectId: "quicknotes-fa315",
	storageBucket: "quicknotes-fa315.appspot.com",
	messagingSenderId: "121078564223",
	appId: "1:121078564223:web:a8838575638c34b5ec864a",
	databaseURL: "https://quicknotes-fa315-default-rtdb.firebaseio.com",
	measurementId: "G-W2Z0VYRT"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
/* firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();*/