import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCfK3ac5YKslG8l5KQAvuZWP3PilFs4Mpw",
    authDomain: "wwwdesigner-2574a.firebaseapp.com",
    databaseURL: "https://wwwdesigner-2574a.firebaseio.com",
    projectId: "wwwdesigner-2574a",
    storageBucket: "wwwdesigner-2574a.appspot.com",
    messagingSenderId: "606341451634"
};

 let firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();

export default firebaseApp;
