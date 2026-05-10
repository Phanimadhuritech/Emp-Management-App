import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    // add user state(name,age,email)
    user:{name:"ravi",email:"ravi@gmail.com",age:21},
    //function to change email
    changeEmail:()=>set({...user,email:"test@gmail.com"}),
    // function to change name and age 
    changeName:()=>set({...user,name:"Ram"}),
    changeAge:()=>set({...user,age:25}),
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),  //for increm and decrem set is taking a callback function
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),   // set is not taking a callback function it directly resets 
    //fucntions to change newCounter to 500
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+500})),
    //function to decrement newCounter1 by 20 
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20}))

}));