importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "",
  authDomain: "-gado..com",
  projectId: "-gado",
  storageBucket: "-gado..app",
  messagingSenderId: "",
  appId: "1::web:",
  measurementId: "G-",
  vapidKey: "=="
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
