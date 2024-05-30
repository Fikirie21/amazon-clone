
// //auth
// import { getAuth } from "firebase/auth";
// import "firebase.compat/firestore";
// import "firebase/compat/auth";

// import firebase from "firebase/compat/app";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzWmY8eHVad49Vu6-JoDLyAmNLmbmkaZc",
//   authDomain: "clone-6a997.firebaseapp.com",
//   projectId: "clone-6a997",
//   storageBucket: "clone-6a997.appspot.com",
//   messagingSenderId: "516678463747",
//   appId: "1:516678463747:web:743b13a85acea2def7f936",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const bd = app.firestore();

//********* */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzWmY8eHVad49Vu6-JoDLyAmNLmbmkaZc",
  authDomain: "clone-6a997.firebaseapp.com",
  projectId: "clone-6a997",
  storageBucket: "clone-6a997.appspot.com",
  messagingSenderId: "516678463747",
  appId: "1:516678463747:web:743b13a85acea2def7f936",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };





