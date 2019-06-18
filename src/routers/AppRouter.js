import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"

import AddExpensePage from "../components/AddExpensePage"

import EditExpensePage from "../components/EditExpensePage"

import ExpenseDashboardPage from "../components/ExpenseDashboardPage"


import Header from "../components/Header"

import HelpPage from "../components/HelpPage"

import NotFoundPage from "../components/NotFoundPage"
const AppRouter=()=>(

    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route  path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create"  exact={true} component={AddExpensePage}/>
    <Route path="/help" exact={true}  component={HelpPage} />

    <Route path="/edit/:id" exact={true} component={EditExpensePage} />
    <Route component={NotFoundPage} exact={true}/>
    </Switch>
    </div>
   
    </BrowserRouter>
)

export default AppRouter

