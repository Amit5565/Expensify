import {
    createStore,
    combineReducers
} from 'redux'
import uuid from 'uuid'
//ADD EXPENSE

//destruction 
const addExpense = ({
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}

) => ({

    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//REMOVE EXPENSE

const removeExpense = ({
    id
}) => ({

    type: 'REMOVE_EXPENSE',
    id

})

//EDIT EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//SET TEXT FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


//SORT BY DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})


//SET START DATE
const setStartDate = (num = undefined) => ({

    type: 'SET_START_DATE',
    num
})
//SET END DATE
const setEndDate = (num = undefined) => ({

    type: 'SET_END_DATE',
    num
})

//Expense Reducer

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {

        case 'ADD_EXPENSE':
            return (
                [...state, action.expense]
            )

        case 'REMOVE_EXPENSE':
            return state.filter(({
                id
            }) => {
                return (id !== action.id)

            })

        case 'EDIT_EXPENSE':
            return state.map((expense) => {

                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {

    text: '',
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.num
                }
                case 'SET_END_DATE':
                    return {
                        ...state,
                        endDate: action.num
                    }
                    default:
                        return state
    }
}

//Get Visible Expenses
const getVisibleExpenses=(expenses,{text,sortBy,endDate,startDate})=>{

    return expenses.filter((expense)=>{

        const startDateMatch= typeof startDate!=='number' || expense.createdAt>=startDate;

        const EndDateMatch=typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text);

        return startDateMatch && EndDateMatch && textMatch
    }).sort((a , b)=>{
              
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}



//STORE CREATION

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })

);


store.subscribe(() => {
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);

})

const expenseOne=store.dispatch(addExpense({description:"RENT",note:"IAS Amit Kumar Singh",createdAt:-21000,amount:1000}));

const expenseTwo=store.dispatch(addExpense({description:"asdfgh",note:"IPS Amit Kumar Singh",createdAt:-1000,amount:500}));

//  store.dispatch(removeExpense({id:expenseTwo.expense.id}));

//  store.dispatch(editExpense(expenseOne.expense.id,{amount:500}))

//   store.dispatch(setTextFilter('rent'));
//  store.dispatch(setTextFilter());

  store.dispatch(sortByAmount());//set string sortBy to amount
// store.dispatch(sortByDate());//set string sortBy to date


//  store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(200));
// store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: 'jlsjfjdljf',
        description: 'Rent',
        note: 'Final payment made',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
}