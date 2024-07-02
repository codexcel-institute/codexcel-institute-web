import {} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function RootLayout() {
  return (
    <div className='inter'>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout