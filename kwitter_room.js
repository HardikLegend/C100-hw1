var firebaseConfig = {
    apiKey: "AIzaSyAl6eR42I73ys-Fe_RAH35a5egxIwM_LGM",
    authDomain: "kwitter-aec0d.firebaseapp.com",
    databaseURL: "https://kwitter-aec0d-default-rtdb.firebaseio.com",
    projectId: "kwitter-aec0d",
    storageBucket: "kwitter-aec0d.appspot.com",
    messagingSenderId: "634533709280",
    appId: "1:634533709280:web:3d872866431d8cb4311785"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
