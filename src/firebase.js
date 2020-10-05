import firebase from 'firebase';
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAGLFKa0FkMmseGGKhQytyrgEAiJ_ne1iI",
    authDomain: "movie-app-d1225.firebaseapp.com",
    databaseURL: "https://movie-app-d1225.firebaseio.com",
    projectId: "movie-app-d1225",
    storageBucket: "movie-app-d1225.appspot.com",
    messagingSenderId: "996261318933",
    appId: "1:996261318933:web:443572195fa3793f3b991c",
    measurementId: "G-EFVR4PST32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
