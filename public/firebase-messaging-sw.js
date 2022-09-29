// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAlxCML_nj0d4-vpHvUeWZfj0YQJmRv9bA",
    authDomain: "fiap-shift-react.firebaseapp.com",
    projectId: "fiap-shift-react",
    storageBucket: "fiap-shift-react.appspot.com",
    messagingSenderId: "876725561248",
    appId: "1:876725561248:web:eff110752fc3465ff5a6c5",
    measurementId: "G-3ZJ2Q3HHTR"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});