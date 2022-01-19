import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1DickifBDDDc4dX9k2RvYFQp7a6WYkiA",
  authDomain: "zostel-clone.firebaseapp.com",
  projectId: "zostel-clone",
  storageBucket: "zostel-clone.appspot.com",
  messagingSenderId: "121709864253",
  appId: "1:121709864253:web:20b30654334c9ea4a11154",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
