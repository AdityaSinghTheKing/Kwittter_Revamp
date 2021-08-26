
var firebaseConfig = {
      apiKey: "AIzaSyAlAsTBRwPh2nygJz3YEWE2ZpKMLzMb1Sc",
      authDomain: "kwitter-project-e26bf.firebaseapp.com",
      databaseURL: "https://kwitter-project-e26bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e26bf",
      storageBucket: "kwitter-project-e26bf.appspot.com",
      messagingSenderId: "1013963175679",
      appId: "1:1013963175679:web:e5d3a1da83f360165b7eca"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username")
document.getElementById("welcomingheader").innerHTML = "Welcome " + username + "!";
function AddRoom() {
      roomname = document.getElementById("Roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding Da Room Name"
      });
      localStorage.setItem("roomname" , roomname);
      window.location="Kwitterpage.html"
}





function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='roomname' id=" + Room_names + "onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML=row


                  //End code
            });
      });
}
getData();
function RedirectToRoomName(name){
      console.log(name)
      localStorage.setItem("roomname" , name);
      window.location="Kwitterpage.html"

      

}
function Logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location="index.html"

}