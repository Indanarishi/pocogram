import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRMSAyCm7VOKE7RGE2AVLrFF-sSoW5CeM",
    authDomain: "pocogram-abfe3.firebaseapp.com",
    databaseURL: "https://pocogram-abfe3.firebaseio.com",
    projectId: "pocogram-abfe3",
    storageBucket: "pocogram-abfe3.appspot.com",
    messagingSenderId: "426195275782",
    appId: "1:426195275782:web:4e2ceeca357bf3b8623387"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };