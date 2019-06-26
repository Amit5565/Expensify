# Expensify

#Promise

const promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        // resolve({
        //     name:"Amit",
        //     age:19
        // })

        reject("Something went wrong");
    },1500)
    
})

console.log('before');


promise.then((data)=>{

    console.log(data);
    
}).catch((error)=>{

    console.log("error: ",error);
    
})

console.log('after');


#Setting google authentication

->In firebase.js file
 const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

 #history command

 for redirecting to login and logout page use npm install history command

 import createHistory from 'history/createBrowserHistory'

 Also change BrowserRouter to Router

 #...rest
 It provides all the remaining components of an object