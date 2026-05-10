import Header from './Header'
import { Outlet } from 'react-router'


function RootLayOut() {
  return (
    <div>
        <Header />
        <div className='mx-20 o-20 bg-fuchsia-300'></div>
        <Outlet />
    </div>
  )
}

export default RootLayOut
