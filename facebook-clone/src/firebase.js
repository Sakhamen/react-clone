import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcHp9cXobH0LwIIGfIHswOWO_nq02wa-Y",
  authDomain: "facebook-clone-7cbea.firebaseapp.com",
  databaseURL: "https://facebook-clone-7cbea.firebaseio.com",
  projectId: "facebook-clone-7cbea",
  storageBucket: "facebook-clone-7cbea.appspot.com",
  messagingSenderId: "47312063366",
  appId: "1:47312063366:web:0d6c257e5be04bcf113a07",
  measurementId: "G-J370SCGY7E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
