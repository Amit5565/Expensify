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

export const startRemoveExpense=({id} = {})=>{
    return(dispatch)=>{

        return database.ref(`expenses/${id}`).remove().then(()=>{
                      dispatch(removeExpense({id}));
        })
    }
} 

//EDIT EXPENSE

export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
})


const startEdit
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


//SET_EXPENSES
export const setExpenses=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})


export const startSetExpenses=()=>{
    return (dispatch)=>{   //function returning dispatch
        return database.ref('expenses').once('value').then((snapshot)=>{

               const expenses=[];
               snapshot.forEach((childSnapshot)=>{
                        expenses.push({
                            id:childSnapshot.key,
                            ...childSnapshot.val()
                        })
               })
               dispatch(setExpenses(expenses))

        })

    }
};