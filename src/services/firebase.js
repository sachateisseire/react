
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxskqky5WreXyp3MrzPHWYRrS3OuCawmo",
  authDomain: "reactteisseire.firebaseapp.com",
  projectId: "reactteisseire",
  storageBucket: "reactteisseire.appspot.com",
  messagingSenderId: "582212333426",
  appId: "1:582212333426:web:f88f9bf554947cf428b7eb"
};

const FirebaseApp = initializeApp(firebaseConfig);
export default FirebaseApp