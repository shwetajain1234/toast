import  firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCSwYKYZJaxlEXKXnjBZ4cZeUQznIPv1kA",
  authDomain: "wilyapp-4fce8.firebaseapp.com",
  projectId: "wilyapp-4fce8",
  storageBucket: "wilyapp-4fce8.appspot.com",
  messagingSenderId: "568262929299",
  appId: "1:568262929299:web:8fdf94e657413f19dcd666"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
