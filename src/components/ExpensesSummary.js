import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'

//Here we are calling a file in selectors to add all the values of expenses 
import selectExpensesTotal from '../selectors/expenses-total'

//This is a component to look into the need of getting to know how many items we are viewing and what are their cumulative cost
 const ExpensesSummary=({expenseCount,expenseTotal})=>{

    const expenseWord=expenseCount===1 ? "expense":"expenses"

    const formattedExpensesTotal=numeral(expenseTotal/ 100).format('$0,0.00')
    return(
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}


const mapStateToProps=(state)=>{

    const visibleExpenses=selectExpenses(state.expenses,state.filters)
    return {

        expenseCount:visibleExpenses.length,
        expenseTotal:selectExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary);