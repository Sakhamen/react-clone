import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk_UWTGQ_qRtjpEVgcg3uMxFPn53phOkk",
  authDomain: "instagram-reels-clone-e4846.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-e4846.firebaseio.com",
  projectId: "instagram-reels-clone-e4846",
  storageBucket: "instagram-reels-clone-e4846.appspot.com",
  messagingSenderId: "969447240367",
  appId: "1:969447240367:web:197eb5479c7349a86b1a5a",
  measurementId: "G-DKYM9MBCTG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
