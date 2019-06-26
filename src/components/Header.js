import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"

import {connect} from 'react-redux'
import {startLogOut} from '../actions/auth'


const Header=({startLogOut})=>(
    <header>
    <h1>Expensify</h1>
    <ul>
   
    <li> <NavLink  to="/dashboard" activeClassName="is-active"  >DashBoard</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
    <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
    </ul>
    <button onClick={startLogOut}>Logout</button>
    </header>
)

const mapDispatchToProps=(dispatch)=>({
    startLogOut:()=>dispatch(startLogOut())
})
export default connect(undefined,mapDispatchToProps)(Header);