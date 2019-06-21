import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"


const Header=()=>(
    <header>
    <h1>Expensify</h1>
    <ul>
   
    <li> <NavLink  exact={true} to="/" activeClassName="is-active"  >DashBoard</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
    <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
    </ul>
    </header>
)
export default Header;