import  * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDfG_pf3iqJbzzJcHpIKC3yoyn3ma950ZA",
    authDomain: "photogallery-7bd81.firebaseapp.com",
    projectId: "photogallery-7bd81",
    storageBucket: "photogallery-7bd81.appspot.com",
    messagingSenderId: "505798834146",
    appId: "1:505798834146:web:6d8af7a23c3ab9233a2bbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storageRef=firebase.storage();
  const firestoreRef=firebase.firestore();

  export {storageRef,firestoreRef};



