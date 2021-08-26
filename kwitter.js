function AddUser(){
user_name=document.getElementById("input4name").value
localStorage.setItem("username" , user_name);
window.location="kwitter_room.html"
}