import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY  ,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
 
  // console.log("p->", process.env.FIREBASE_API_KEY);
  
   // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
   const database=firebase.database()

   const GoogleAuthProvider=new firebase.auth.GoogleAuthProvider();


   export { firebase ,GoogleAuthProvider, database as default}
//      database.ref().set({
//       name:"Amit",
//       age:20,
//       isSingle:true,
//       location:{
//           city:"Delhi",
//           country:"India"
//       },
//   }).then(()=>{
//       console.log("Success");
      
//   }).catch((e)=>{
//       console.log("Error occured :",e);
      
//   })


