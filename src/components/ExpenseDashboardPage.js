import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"

import ExpenseList from './ExpenseList'
const ExpenseDashboardPage=()=>(

    <div>
    This is from dasboard
    <ExpenseList />
    </div>
 
    )
    export default ExpenseDashboardPage;