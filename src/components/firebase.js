import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHzZB_HLY6ZiV-14G4iIz1U2kb3JC9PDo",
    authDomain: "login2-4a4fd.firebaseapp.com",
    databaseURL: "https://login2-4a4fd.firebaseio.com",
    projectId: "login2-4a4fd",
    storageBucket: "login2-4a4fd.appspot.com",
    messagingSenderId: "190833033056",
    appId: "1:190833033056:web:33dae81cf9dd9281"
  };

  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
    }
  }
  
  export default Firebase;