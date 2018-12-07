import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAprew3hLBK2i8V-WPq5_0sOIS9t8mlhYM",
    authDomain: "spacetourist-bf250.firebaseapp.com",
    databaseURL: "https://spacetourist-bf250.firebaseio.com",
    projectId: "spacetourist-bf250",
    storageBucket: "spacetourist-bf250.appspot.com",
    messagingSenderId: "473577103601"
  };
  export default firebase.initializeApp(config);