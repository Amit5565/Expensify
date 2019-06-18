import {createStore} from 'redux'

const store=createStore((state={count:0},action)=>{
   switch(action.type){
      
    case 'INCREMENT':
        const incrementby=typeof action.incrementby==='number'?action.incrementby:1    
        return{
    
        count:state.count+incrementby
       }
       case 'DECREMENT':
           return{
                count:state.count-1
           }
       default:
           return state;
   }
  

})

console.log(store.getState());

//Incrementing count

store.subscribe(()=>{
    console.log(store.getState());
    
})
store.dispatch({
    type:'INCREMENT',
    incrementby:5

});

store.dispatch({
    type:'INCREMENT',

});


store.dispatch({
    type:'DECREMENT',

});

