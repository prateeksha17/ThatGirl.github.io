import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBKmuihFNDNBreGiTZ7d0YF7EBt5j_7Pb4",
  authDomain: "the-dojo-24d35.firebaseapp.com",
  projectId: "the-dojo-24d35",
  storageBucket: "the-dojo-24d35.appspot.com",
  messagingSenderId: "507411781986",
  appId: "1:507411781986:web:6310ea668ac8e3f1d6b43b"
};

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firestore()
  

  export { projectFirestore }