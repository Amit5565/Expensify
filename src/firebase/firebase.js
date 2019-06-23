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

   //Fetching data

//  1.
// database.ref()
// .once('value')
// .then((snapshot)=>{

//     const val=snapshot.val();
//     console.log(val);
    

// }).catch((e)=>{
//     console.log("Error fetching data",e);
    
// })



// const onValueChange=database.ref().on('value',(snapshot)=>{

//     console.log(snapshot.val());
    
// },(e)=>{
//     console.log("Error in fetching data",e);
    
// })

//To unsubscribe to on
//database.ref().off(onValueChange)




  //.set() return a promise

//   database.ref().set({
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


  //Removing data from database

//  1.database.ref().set(null)

// 2. database.ref().remove().then(()=>{
//     console.log("Success");
    
// }).catch((e)=>{

//     console.log("error :" ,e);
    
// })


// Updating data


// database.ref().update({
//     "location/city":"Model Town"
// })



database.ref().on('value',(snapshot)=>{

    const name=snapshot.val().name;
    const city=snapshot.val().location.city;
    console.log(`${name} lives in ${city} `);
    
})