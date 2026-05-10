import { useForm } from "react-hook-form"
import { useLocation , useNavigate } from "react-router"
import { useEffect ,useContext } from "react"
import axios from "axios";
import { counterContextObj } from "../contexts/ContextProvider";
function EditEmployee() {
const{ counter, changeCounter } = useContext(counterContextObj);
 const {
  register,
  handleSubmit,
  setValue,
  formState: { errors },
} = useForm();

//get data from empOm navigate hook
 const {state}=useLocation();
 const navigate = useNavigate();


 useEffect(()=>{
  if (state !== null) {
  setValue("name",state.name);
  setValue("email",state.email);
  setValue("mobile",state.mobile);
  setValue("designation",state.designation);
  setValue("companyName",state.companyName);
  }
 },[state,setValue]);

 const saveModifiedEmp=async(modifiedEmp)=>{
  console.log(modifiedEmp)
  //make http PUT req install anxios 
  const res = await axios.put(`http://localhost:5000/employee-api/employees/${state._id}`, modifiedEmp)
  if(res.status===200){
    //navigate to ListOgEmps
    navigate("/list");
  }

 }
  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
         <h1 className='text-4xl'> Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Change</button>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input type="text" placeholder="Enter name" {...register("name")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="email" placeholder="Enter Email" {...register("email")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="number" placeholder="Enter mobile number" {...register("mobile")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" placeholder="Enter designation" {...register("designation")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <input type="text" placeholder="Enter name of the company" {...register("companyName")} className="mb-3 border-2 p-3 w-full rounded-2xl" />
        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">Save</button>
      </form>
    </div>
  )
}

export default EditEmployee