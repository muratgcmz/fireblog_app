import { createContext,useState,useEffect } from "react";
import app from "../helpers/firebase";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import toastify from "../helpers/toastify";




export const AuthContext = createContext();



const AuthContextProvider = (props) => {
    
    const [currentUser, setCurrentUser] = useState()
    const auth = getAuth(app);

const createUser = async (email, password, navigate) => {
  try {
   let userCredential = await createUserWithEmailAndPassword(auth, email, password);
   console.log(userCredential);
   navigate("/")
  }catch (err) {
      alert(err.message)
  }
};

const signIn = async (email, password, 
    navigate) => {
    try{
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        
        navigate("/")
    }catch (err) {
        alert(err.message)
    }
    toastify("Sign in successfully")
};

const logOut = () =>{
    signOut(auth);
    toastify("Logout successfully")
};
 const signUpProvider = (navigate) => {
    
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
      toastify("Sign in successfully")
  };

 const userObserver = (setCurrentUser) => {
    
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };
  

    

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])
    
    return(
        <AuthContext.Provider value={{currentUser, signIn, logOut, userObserver, signUpProvider, createUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;