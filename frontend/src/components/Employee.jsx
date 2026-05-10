import { useLocation } from "react-router"
import { useContext } from 'react';
import { counterContextObj } from "../contexts/ContextProvider";

function Employee() {

  //read state recieved in navigation 
  const { state } = useLocation();
  const { counter, changeCounter } = useContext(counterContextObj);


  return (
    <div className="p-16 text-center text-2xl  ">
      <h1 className="text-red-700 text-center p-2">Employee Details</h1>
         <h1 className='text-4xl'> Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Change</button>
      <p>Name: {state?.name}</p>
      <p>Email: {state?.email}</p>
      <p>Mobile Number: {state?.mobile}</p>
      <p>Designation: {state?.designation}</p>
      <p>Company Name:{state?.companyName}</p>
    </div>
  )
}

export default Employee