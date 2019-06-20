//install -> import->use


import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import "./styles/styles.scss"

 import AppRouter from "./routers/AppRouter"

 import configureStore from './store/configureStore'
 import {addExpense} from './actions/expenses'
 import {setTextFilter} from './actions/filters'
 import getVisibleExpenses from './selectors/expenses'

 const store=configureStore();
const state=store.getState();
//addExpense

store.dispatch(addExpense({description:"water bill"}))

store.dispatch(addExpense({description:"gas bill"}))

store.dispatch(setTextFilter("bill"));

const visibleExpenses=(getVisibleExpenses(state.expenses,state.filters));
console.log(visibleExpenses);

const Jsx=()=>(
    <Provider store={store}>
    <AppRouter />
    </Provider>
)


 console.log(store.getState()); 
    ReactDOM.render(
        <Jsx />
        ,document.getElementById("app"))


