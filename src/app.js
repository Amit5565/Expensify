


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.js";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";

 import 'normalize.css/normalize.css'
 import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'

//Promises
// import './playground/promises'

//FIREBASE
import './firebase/firebase'
const store = configureStore();

 store.dispatch(addExpense({ description: "Water bill", amount: 156 }));
store.dispatch(addExpense({ description: "Gas bill" ,createdAt:1000}));
store.dispatch(addExpense({ description: "Rent", amount: 1234 }));

console.log("testing");


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


