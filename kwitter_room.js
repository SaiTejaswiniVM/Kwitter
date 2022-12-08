
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDtArnWXgsITiFJoPUdmdplWu4jres2e_U",
      authDomain: "kwitter-e2d1c.firebaseapp.com",
      databaseURL: "https://kwitter-e2d1c-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2d1c",
      storageBucket: "kwitter-e2d1c.appspot.com",
      messagingSenderId: "816696902061",
      appId: "1:816696902061:web:2213098ce27dbac9baa124"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome " +  user_name + "!";

      function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update(
                  {
                        purpose : "adding room name"
                  }
            );
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> # "+Room_names+" </div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("name", name);
            window.location="kwitter_page.html";
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }