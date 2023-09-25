import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithEmailAndPassword,
  // signout,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFTeBB5Yh8_2m6p_DKo7Oaz3sytx1yHYA",
  authDomain: "littleliberators-game.firebaseapp.com",
  projectId: "littleliberators-game",
  storageBucket: "littleliberators-game.appspot.com",
  messagingSenderId: "836886277764",
  appId: "1:836886277764:web:43cfec99a438ae84c55cd1",
  measurementId: "G-1HH7FTV4WK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = "en";

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const signInBtn = document.getElementById("signIn-btn");
const googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./logged.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  console.log(signInEmail, signInPassword);

  createUserWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("your account has been created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};
signInBtn.addEventListener("click", userSignIn);

// console.log(app);
