// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC9H6rHinAKX69cMFgi0qvZBUn-sy9Cqak",
    authDomain: "kwitter-5035f.firebaseapp.com",
    projectId: "kwitter-5035f",
    storageBucket: "kwitter-5035f.appspot.com",
    messagingSenderId: "960688892516",
    appId: "1:960688892516:web:87741e276ac78748c60d71",
    databaseURL:"https://kwitter-5035f-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function AddUser(){
      username=document.getElementById("Inputforpractice").value;
      firebase.database().ref("/").child(username).update({
          purpose:"AddingUser"
      }); 
  
  
    }