import moment from 'moment'//For time formatting
import numeral from 'numeral'//for currency formatting
import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {Link} from 'react-router-dom'
 const ExpenseListItem=({dispatch,id,description,amount,createdAt})=>(
    <div>
    <Link to={`/edit/${id}`}>
   <h3>{description}</h3>
   </Link>
   <p>
   {numeral(amount/ 100).format('$0,0.00')} 
   - 
   {moment(createdAt).format("Do MMMM,YYYY")}</p>
    </div>
)


export default connect(state => {
   return {
     expenses: state.expenses
   };
 })(ExpenseListItem);


