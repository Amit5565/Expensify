// //install -> import->use


// import React from "react"
// import ReactDOM from "react-dom"
// import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
// import {Provider} from 'react-redux'
// import 'normalize.css/normalize.css'
// import "./styles/styles.scss"

//  import AppRouter from "./routers/AppRouter"

//  import configureStore from './store/configureStore'
//  import {addExpense} from './actions/expenses'
//  import {setTextFilter} from './actions/filters'
//  import selectExpenses from './selectors/expenses'

//  const store=configureStore();
// const state=store.getState();
// //addExpense

// store.dispatch(addExpense({description:"water bill",amount:4500}))

// store.dispatch(addExpense({description:"gas bill",createdAt:1000}))

// store.dispatch(addExpense({description:"rent bill",amount:109500}))
// // store.dispatch(setTextFilter("water"));

// const visibleExpenses=(selectExpenses(state.expenses,state.filters));
// console.log(visibleExpenses);

// const Jsx=()=>(
//     <Provider store={store}>
//     <AppRouter />
//     </Provider>
// )


//  console.log(store.getState()); 
//     ReactDOM.render(
//         <Jsx />
//         ,document.getElementById("app"))



import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/Approuter";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";

const store = configureStore();

 store.dispatch(addExpense({ description: "Water bill", amount: 156 }));
store.dispatch(addExpense({ description: "Gas bill" ,createdAt:1000}));
store.dispatch(addExpense({ description: "Rent", amount: 1234 }));

store.dispatch(setTextFilter("gas"))
const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));


