import { NavLink} from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-end text-2xl p-7 bg-pink-200 gap-6">
            <NavLink to="/" className={({isActive})=>isActive? "text-indigo-400" : ""}>
              Home
              </NavLink>
          <NavLink to="/create-emp" className={({isActive})=>isActive ? "text-emerald-400" : ""}>
            CreateEmp
            </NavLink>
            <NavLink to="/list" className={({isActive})=>isActive ? "text-orange-500" : ""}>
              List of Employees
              </NavLink>
    </nav>
  )
}

export default Header