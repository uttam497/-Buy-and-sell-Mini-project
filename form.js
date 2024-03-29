import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAfPwxnmdyJPYtHTNvAFWuJzx5tspx_Cck",
    authDomain: "fir-auth-5986e.firebaseapp.com",
    projectId: "fir-auth-5986e",
    storageBucket: "fir-auth-5986e.appspot.com",
    messagingSenderId: "1063924366127",
    appId: "1:1063924366127:web:ebed39cafa07fd40e6ffda",
    measurementId: "G-MD1CT8CGDW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);


document.getElementById("reg-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";

});


document.getElementById("login-btn").addEventListener('click',function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword= document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
     
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    
  });
});



  document.getElementById("register-btn").addEventListener('click',function(){
    const registerEmail= document.getElementById("register-email").value;
    const registerPassword= document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
     
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    
  });
});


document.getElementById("log-out-btn").addEventListener('click',function(){

    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
    document.getElementById("login-div").style.display="inline";
    
      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    
      });
});






