import React from "react"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom"
const EditExpensePage=(props)=>{
    console.log(props);
    
    return(
        <div>
    This is from edit page no {props.match.params.id}
    </div>
    )
}
export default EditExpensePage;