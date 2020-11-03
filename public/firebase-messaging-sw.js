importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');




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
  firebase.messaging();