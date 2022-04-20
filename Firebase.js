// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhGdYvrJIeOc5JMmMqJx3FdvjOm-888ic",
  authDomain: "nycfood-555cc.firebaseapp.com",
  projectId: "nycfood-555cc",
  storageBucket: "nycfood-555cc.appspot.com",
  messagingSenderId: "358022289242",
  appId: "1:358022289242:web:6feebe14b0ef34e3950563",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
      console.log("there as an error");
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
      localStorage.clear();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
