// import { createStore,combineReducers} from'redux'

// import expensesReducer from '../reducers/expenses'
// import filtersReducer from '../reducers/filters'

// //STORE CREATION
// export default ()=>{

//     const store = createStore(
//         combineReducers({
//             expenses: expensesReducer,
//             filters: filtersReducer
//         })
    
//     );
//     return store;
// }


import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import authReducer from '../reducers/auth'


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth:authReducer
    }),

  applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

