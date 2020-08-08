import * as firebase from "firebase";
// import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyAQ7upIXiBzgZgtc_TTrgl4JcQ3zQPrOJ8",
  authDomain: "es-match-info.firebaseapp.com",
  databaseURL: "https://es-match-info.firebaseio.com",
  projectId: "es-match-info",
  storageBucket: "es-match-info.appspot.com",
  messagingSenderId: "633756263080",
  appId: "1:633756263080:web:c8dbe40cec084e702d989d",
};
firebase.initializeApp(firebaseConfig);
// export const storage = firebase.storage();
export const database = firebase.firestore();
