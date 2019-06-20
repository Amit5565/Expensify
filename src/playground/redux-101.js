import {createStore} from 'redux'

//Action generators -functions that return action objects

// const add=({a,b})=>{

//     return a+b;
// }
// console.log(add({a:2,b:3}));

const incrementCount=({incrementby=1}={})=>({
  
    type:'INCREMENT',
    incrementby:incrementby
})


const decrementCount=({decrementby=1}={})=>({

    type:'DECREMENT',
    decrementby:decrementby
})


//Reducers
//1.Reducers are pure functions(does not interact with outside things)

//2.Never change state or action


const countReducer=(state={count:0},action)=>{
    switch(action.type){
       
     case 'INCREMENT':   
         return{
     
         count:state.count+action.incrementby
        }
        case 'DECREMENT':
            return{
                 count:state.count-action.decrementby
            }
        default:
            return state;
    }
   
 
 }
const store=createStore(countReducer)

console.log(store.getState());

//Incrementing count

store.subscribe(()=>{
    console.log(store.getState());
    
})
// store.dispatch({
//     type:'INCREMENT',
//     incrementby:5

// });

store.dispatch(incrementCount({incrementby:5}))

store.dispatch(incrementCount());


// store.dispatch({
//     type:'DECREMENT',

// });

store.dispatch(decrementCount({decrementby:2}));
store.dispatch(decrementCount());

