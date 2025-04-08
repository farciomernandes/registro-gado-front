importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp( {
  apiKey: "AIzaSyBkEAZuC3iYnDeZFG21DmlxXNX6iI_2j58",
  authDomain: "registro-gado.firebaseapp.com",
  projectId: "registro-gado",
  storageBucket: "registro-gado.firebasestorage.app",
  messagingSenderId: "1030379429431",
  appId: "1:1030379429431:web:f8681207a5d71c3ba929b2",
  measurementId: "G-RLHRCMLWEE",
  vapidKey: "BFkKgTMDjYfNOQV_QpdA1tdkAb7JLxvJXawo3wTHF2YxwXtwNEofWb0wQLW4xohB9715vp3Jde-FextXLmlp_Ys",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/LogoFJSHorizontal.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
