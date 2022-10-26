import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBkAb02xU8feo3q2gUO3lvsL4QkkDfziGU",
  authDomain: "shosamember.firebaseapp.com",
  projectId: "shosamember",
  storageBucket: "shosamember.appspot.com",
  messagingSenderId: "560570641363",
  appId: "1:560570641363:web:b6e3dfe4938e9c5d219d26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let signupname = document.getElementById("signup-email");
let signuppassword = document.getElementById("signup-password");
let signupBtn = document.querySelector("signup-login");

async function signUp(){
    try {
        let collectionRef = collection(db, "FirestoreDatabase")
        const docRef = await addDoc(collection(db, "users"), {
          username:signupname.value,
          userpassword:signuppassword.value
        });
        console.log("Document written with ID: ", docRef.id);
        username = ""
        password = ""
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

if(signupBtn){
    signupBtn.addEventListener("click", signUp)
}
