const firebaseConfig = {
    apiKey: "AIzaSyBt0IKOonklyxeAjQF6cZaWlwRMkZRcb7A",
    authDomain: "letschat-38491.firebaseapp.com",
    projectId: "letschat-38491",
    storageBucket: "letschat-38491.appspot.com",
    messagingSenderId: "885152338706",
    appId: "1:885152338706:web:dad166b102df84d2f259cb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  document.getElementById("da_Username").innerHTML = "Welcome " + user_name + "!";

  function addRoom(){
    RoomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(RoomName).update({
          purpose : "Adding Room Name"
    });

    localStorage.setItem("Room Name", RoomName);
    window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room names: " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "kwitter_page.html"