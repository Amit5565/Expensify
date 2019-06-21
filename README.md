# Expensify

# ES-6 destructuring

const person={
 
    name:"Amit",
    age:21,
    location:{
        city:"Delhi",
        temp:35
    }
}

const {name="ASDF",age}=person;
console.log(`${name} is ${age}`);

default name to object elemnts can also be given

const address=['Model Town','Delhi',110009];
const[city, state, pincode]=address;

console.log(`Amit lives in ${city} that is in ${state} and has pincode of ${pincode}`);



#Setting default values

const incrementCount=({incrementby=1}={})=>({
  
    type:'INCREMENT',
    incrementby:typeof incrementby==='number'?incrementby:1
})


#HOC(HIGHER ORDER COMPONENT)
-> A component that renders another component
-> Reuse Code
-> Prop Manipulation
-> Abstarct state



#{connect} from "react-redux" is used for dispatching elements from diff components


#Use of connect
const ExpenseList=(props)=>(
    <div>
    <h1>{props.expenses.length}</h1>
    <p>Expense List</p>
    </div>
)

const ConnectedExpenseList=connect((state)=>{

return {
    expenses:state.expenses
}

})(ExpenseList);

export default ConnectedExpenseList;

#Component connected to redux store gets refreshed all by itself

#DatePicker

import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';


            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            />
            <div>
            <textarea placeholder="Add a note for your expense (optional)"
            
            value={this.state.note}
            onChange={this.onNoteChange}
            >