import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics'



const firebaseConfig = {
    apiKey: "AIzaSyBhazJYNp6nL-815HaP2n7eC-qvXuy-Ofc",
    authDomain: "tutorshipproject.firebaseapp.com",
    projectId: "tutorshipproject",
    storageBucket: "tutorshipproject.appspot.com",
    messagingSenderId: "698637311643",
    appId: "1:698637311643:web:d4e4e26d1e3ff35ad5703e",
    measurementId: "G-49GKBXXD34"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    if(typeof window!== "undefined"){
        if("measurementId" in firebaseConfig){
            firebase.analytics();
        }
    }
  }


    // Initialize Firebase
//    firebase.initializeApp(firebaseConfig);
//    firebase.analytics()

//  for serverside rendering---abit different
// const app=!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()


//github solution for dublication
// if (!firebase.apps.length) {
//     firebase.initializeApp({});
// }
//You can check firebase.apps to see if its loaded. If your only loading it once, then you can just check the length. If you have multiple then you could check each apps name.
 export default firebase;