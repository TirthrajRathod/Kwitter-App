
//ADD YOUR FIREBASE LINKS HERE
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAP8nr6DrFV_z06P0ytFSLzQxbkjA64ZWo",
    authDomain: "kwitter-app-69b55.firebaseapp.com",
    databaseURL: "https://kwitter-app-69b55-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-69b55",
    storageBucket: "kwitter-app-69b55.appspot.com",
    messagingSenderId: "130186512112",
    appId: "1:130186512112:web:f95a807a8ae1fdb1e02435"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);   
 
function addRoom()
{ room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room" });

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
}