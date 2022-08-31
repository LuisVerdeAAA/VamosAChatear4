var firebaseConfig = {
    apiKey: "AIzaSyDlkktrJUe1NKYkIRFZS3BPIwptEiSEhow",
    authDomain: "vamos-a-chatear-chavos.firebaseapp.com",
    projectId: "vamos-a-chatear-chavos",
    storageBucket: "vamos-a-chatear-chavos.appspot.com",
    messagingSenderId: "903033516265",
    appId: "1:903033516265:web:cb4ab5eb1f29ed0acfc078"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name =localStorage.getItem("user_name");
room_name =localStorage.getItem("room_name");


function send () 
{
  msg= document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
  });
   
    document.getElementById("msg").value = "";
}


function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") {
              firebase_message_id = childKey;
              message_data = childData;
              //Start code
            
            }
          });
      });
  }
