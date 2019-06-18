import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"


const Header=()=>(
    <header>
    <h1>Expenify</h1>
    <ul>
   
    <li> <NavLink  exact={true} to="/" activeClassName="is-active"  >Go Home</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Go To Add Expense Page</NavLink></li>
    <li><NavLink to="/help" activeClassName="is-active">Go To Help Page</NavLink></li>
    </ul>
    </header>
)
export default Header;