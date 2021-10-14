// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDGFF1aCh4LSGC4aSBZMgqE9eWKW_Mi1EE",
      authDomain: "kwitter-page-7ce47.firebaseapp.com",
      databaseURL: "https://kwitter-page-7ce47-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-7ce47",
      storageBucket: "kwitter-page-7ce47.appspot.com",
      messagingSenderId: "756530632438",
      appId: "1:756530632438:web:d3d528d85b656d043dfed7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
