import uuid from 'uuid'
//ADD EXPENSE


//components calls action generator
// action generator return object
// component dispatches object
// redux store changes


//With firebase

//components calls action generator
// action generator return function
// component dispaches function
// function runs (has the ability to dispach other actions and do whatever it wants)

import database from '../firebase/firebase'
//destruction 
export const addExpense = (expense) => ({

type: 'ADD_EXPENSE',
expense
})

export const startAddExpense=(expenseDate={})=>{
    return (dispatch)=>{

        const {
         
            description='',
            note='',
            amount=0,
            createdAt=0
        } = expenseDate;

        const expense={description,note,amount,createdAt}
        database.ref('expenses').push(expense).then((ref)=>{
            //dispatch action to redux store

            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        })
    }
}
//REMOVE EXPENSE

export const removeExpense = ({
id
}) => ({

type: 'REMOVE_EXPENSE',
id

})

//EDIT EXPENSE

export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
})

// import uuid from "uuid";

// // ADD_EXPENSE
// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// // REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id
// });

// // EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates
// });