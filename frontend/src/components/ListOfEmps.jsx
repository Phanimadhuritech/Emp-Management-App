import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee component along with selected emp object
    navigate("/employee", { state: empObj });
  }

  const gotoEditEmployee = (empObj) => {
    //navigate to /EditEmployee component along with selected emp object
    navigate("/edit-emp", { state: empObj });
  }

  const deleteEmpByID = async (id) => {
    try {
      let res = await fetch(`https://emp-management-app.onrender.com/employee-api/employees/${id}`, {
        method: "DELETE"
      });
      if (res.status === 200) {
        //get latest emps data
        getEmps();
      } else {
        console.error("Failed to delete employee:", res.status);
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };
  async function getEmps() {
    try {
      let res = await axios.get("https://emp-management-app.onrender.com/employee-api/employees");
      if (res.status === 200) { // res.ok is a shorthand for status 200-299
        let resObj = res.data;
        // We use the 'payload' key from your Express res.json
        setEmps(resObj.payload);
      }
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    }
  }
  //get all emps
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="p-10 bg-purple-200 min-h-screen">
      <h1 className='text-4xl text-center font-bold mb-10 text-red-700'>List of Employees</h1>

      {/* If no employees found, show a message instead of a blank screen */}
      {emps.length === 0 ? (
        <p className="text-center text-lime-400">No employees found. Add some via the form!</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {emps.map((empObj) => (
            <div key={empObj._id} className='bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 text-center'>
              <h2 className="text-xl font-semibold text-gray-800">{empObj.name}</h2>
              {/* <p className="text-green-600 font-medium">{empObj.designation}</p> */}
              <p className="text-amber-700 text-sm mt-3 ">{empObj.email}</p>
              {/* <p className="text-gray-500 text-xs">{empObj.companyName}</p> */}

              {/* 3 buttons  */}
              <div className='flex justify-around'>
                <button onClick={() => gotoEmployee(empObj)} className='bg-green-500 p-2 rounded-2xl text-black'>
                  View
                </button>
                <button onClick={() => gotoEditEmployee(empObj)} className='bg-blue-500 p-2 rounded-2xl text-black'>
                  Edit
                </button>
                <button onClick={() => deleteEmpByID(empObj._id)} className='bg-red-500 p-2 rounded-2xl text-black'>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;