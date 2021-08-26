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
var username = localStorage.getItem = ("username")
var roomname = localStorage.getItem = ("roomname")
function Send() {
    msg = document.getElementById("Inputforpost").value
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        like: 0,
    })
    document.getElementById("Inputforpost").value = "";

}
function getData() {
    firebase.database().ref("/" + roomname).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData=childSnapshot.val()
            if(childkey!="purpose"){
                firebasemessageid=childkey
                messagedata=childData
                console.log(firebasemessageid);
                console.log(messageData);
                name=messagedata['name']
                message=messageData['message']
                like=messageData['like'] 
                namewithtag="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>"
                messagewithtag="<h4 class='message_h4'> " + message + "</h4>"
                likebutton="<button class='btn-warning' id= " + firebasemessageid + "value=" + like + "onclick='updatelike(this.id)' >" 
                spanwithtag="<span class='glyphicon-glyphicon-thumbs-up'>Like: " + like + "</span> </button> <h4>"
                row=namewithtag + messagewithtag + likebutton + spanwithtag ;
                document.getElementById("output").innerHTML=row


            }
             



        });
    });
}
getData()
function updatelike(message_id){
    console.log(message_id)
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatedlikes=Number(likes) + 1 ;
    console.log(updatedlikes)
    firebase.database().ref(roomname).child(message_id).update({
        like:updatedlikes
    });
}

function Logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("roomname")
    window.location="index.html"

}