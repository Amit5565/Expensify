import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhpLQVSxdzdVytcY_02G_d9yh4ZcFE_qA",
    authDomain: "expensify-768b6.firebaseapp.com",
    databaseURL: "https://expensify-768b6.firebaseio.com",
    projectId: "expensify-768b6",
    storageBucket: "expensify-768b6.appspot.com",
    messagingSenderId: "458383824312",
    appId: "1:458383824312:web:5e57250fa873e999"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database=firebase.database()
  database.ref().set({
      name:"Amit",
      age:19,
      isSingle:true,
      location:{
          city:"Delhi",
          country:"India"
      },
  })

  database.ref('age').set(20)
   database.ref('location/city').set("New Delhi");

   database.ref('attributes/height').set("176 cm");
   database.ref('attributes/weight').set("76 kg");