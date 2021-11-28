import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp_zA9lBvuWQulfBOXKUDoIb-X4o4kTeA",
  authDomain: "purti-react-project.firebaseapp.com",
  projectId: "purti-react-project",
  storageBucket: "purti-react-project.appspot.com",
  messagingSenderId: "324680439533",
  appId: "1:324680439533:web:8bb90e8d8fdff7dbff1ee4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

