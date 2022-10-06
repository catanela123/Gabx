
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyAhvtbpaF_JtVCzaKFiOwv2fZ5iLKw1WsU",
  authDomain: "picni82soumaya.firebaseapp.com",
  databaseURL: "https://picni82soumaya-default-rtdb.firebaseio.com",
  projectId: "picni82soumaya",
  storageBucket: "picni82soumaya.appspot.com",
  messagingSenderId: "508708978099",
  appId: "1:508708978099:web:e1a0eb5ed8ecedcebfdfc6"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
    
    }
    
    
    
    //AÑADE TUS ENLACES DE FIREBASE
    
    function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicio del código
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
     //Final del código
     });});}
    getRoom();
    
    
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
    }
    
    
    function redirectToRoomName(Room_names) {
      console.log(Room_names);
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_page.html";
    }