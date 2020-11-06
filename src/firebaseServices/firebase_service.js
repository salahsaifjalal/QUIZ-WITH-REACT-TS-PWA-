import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPleKZV0Qm2wr3ysntG-tZVvc77z8_tcI",
    authDomain: "quiz-firebase-notification.firebaseapp.com",
    databaseURL: "https://quiz-firebase-notification.firebaseio.com",
    projectId: "quiz-firebase-notification",
    storageBucket: "quiz-firebase-notification.appspot.com",
    messagingSenderId: "38774926767",
    appId: "1:38774926767:web:5dad7a474c79af038e135a"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


export function initNotification() {

    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission==="granted") {

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
    if (currentToken) {
       console.log("Look here, Token in console is here",currentToken);
      // alert(currentToken);
       prompt(currentToken);
    } else {
      // Show permission request.
      console.log('No registration token available. Request permission to generate one.');
      
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    
  });



        }
    })

}