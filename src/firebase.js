import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4SLVgdJ33DsbDEhXdj6Xt14Hg406AsXM",
  authDomain: "linkedin-clone-f4e25.firebaseapp.com",
  projectId: "linkedin-clone-f4e25",
  storageBucket: "linkedin-clone-f4e25.appspot.com",
  messagingSenderId: "62104087730",
  appId: "1:62104087730:web:8755ef4b5808127df32dab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
