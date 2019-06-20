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

store.dispatch(addExpense({description:"water bill",amount:4500}))

store.dispatch(addExpense({description:"gas bill",createdAt:1000}))

store.dispatch(addExpense({description:"rent bill",amount:109500}))
store.dispatch(setTextFilter("water"));

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


