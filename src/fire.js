import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvInQ-OA_RXV1qGkl3v2Pf-bOc8i1LDCw",
  authDomain: "final-hackathon-d5fea.firebaseapp.com",
  projectId: "final-hackathon-d5fea",
  storageBucket: "final-hackathon-d5fea.appspot.com",
  messagingSenderId: "691184350541",
  appId: "1:691184350541:web:e8de5e41b53f13311e3304",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
