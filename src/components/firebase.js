import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
    }
  }
  
  export default Firebase;
