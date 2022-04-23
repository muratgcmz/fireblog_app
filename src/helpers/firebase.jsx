import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey: "AIzaSyCJxbywqsZWqDaK9ndp2NlrXlGNDYhKxvk",
    authDomain: "fireblog-799aa.firebaseapp.com",
    projectId: "fireblog-799aa",
    storageBucket: "fireblog-799aa.appspot.com",
    messagingSenderId: "386258820700",
    appId: "1:386258820700:web:c8494ce736c4554263d099"
  
      
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
   let userCredential = await createUserWithEmailAndPassword(auth, email, password);
   console.log(userCredential);
   navigate("/")
  }catch (err) {
      alert(err.message)
  }
};

export const signIn = async (email, password, 
    navigate) => {
    try{
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        navigate("/")
    }catch (err) {
        alert(err.message)
    }
};