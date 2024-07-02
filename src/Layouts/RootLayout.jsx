import {} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomSection from '../components/BottomSection'

function RootLayout() {
  return (
    <div className='inter'>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <BottomSection />
    </div>
  )
}

export default RootLayout