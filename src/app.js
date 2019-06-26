


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter,{history} from "./routers/AppRouter.js";
import { startSetExpenses } from "./actions/expenses.js";
// import { setTextFilter } from "./actions/filters";

 import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";

 import 'normalize.css/normalize.css'
 import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'

//Promises
// import './playground/promises'



//FIREBASE
import {firebase} from './firebase/firebase'
const store = configureStore();

//  store.dispatch(addExpense({ description: "Water bill", amount: 156 }));
// store.dispatch(addExpense({ description: "Gas bill" ,createdAt:1000}));
// store.dispatch(addExpense({ description: "Rent", amount: 1234 }));



// store.dispatch(setTextFilter("gas"))
const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading....</p>, document.getElementById("app"));



//To prevent multiple reloading when log in and log out are clicked

let hasRendered=false;
const renderApp=()=>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered=true;
  }
}

//To know whether user logins in or logs out
firebase.auth().onAuthStateChanged((user)=>{

  if(user){

    console.log("uid",user.uid);
    
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(()=>{
     renderApp();
     
     if(history.location.pathname=== '/'){
         history.push('/dashboard')
     }
    });

    
  }else{
    console.log("Logout");
    store.dispatch(logout())
   renderApp();
    history.push('/')
  }
})