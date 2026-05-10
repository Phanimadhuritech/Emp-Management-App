import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  const navigate = useNavigate();

  // Zustand store logic
  const { newCounter, incrementCounter } = useCounterStore()

  // Context API logic
  const { counter, changeCounter } = useContext(counterContextObj)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16 px-6 shadow-sm">
        <div className="max-w-5xl mx-auto text-center">
          {/* Removed the extra characters after font-bold */}
          <h1 className="text-5xl md:text-6xl text-emerald-900 font-serif font-bold leading-tight mb-6">
            Employee Management System
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic">
            "Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships."
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/create-emp')}
              className="px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-800 transition duration-300"
            >
              Add New Employee
            </button>
            <button
              onClick={() => navigate('/list')}
              className="px-8 py-3 bg-white text-emerald-700 border border-emerald-700 font-semibold rounded-lg shadow-md hover:bg-emerald-50 transition duration-300"
            >
              View Employee List
            </button>
          </div>
        </div>
      </div>

      {/* Feature/Stats Section */}
      <div className="max-w-4xl mx-auto mt-12 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Context Counter Card */}
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Context Session Counter</h2>
          <p className="text-4xl font-bold text-amber-600 mb-4">{counter}</p>
          <button
            onClick={changeCounter}
            className="bg-amber-400 hover:bg-amber-500 text-amber-950 px-6 py-2 rounded-full font-medium transition"
          >
            Update Context
          </button>
        </div>

        {/* Zustand Counter Card */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Zustand Global Counter</h2>
          <p className="text-4xl font-bold text-blue-600 mb-4">{newCounter}</p>
          <button
            onClick={incrementCounter}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition"
          >
            Increment Store
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto mt-8 pb-16 px-6">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500">
            This system allows you to easily manage employee information, including their name, email, mobile number, and designation.
            All changes are synced with your secure backend database.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home 