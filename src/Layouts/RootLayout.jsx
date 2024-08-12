import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomSection from '../components/BottomSection'
import ApplicationForm from '../components/ApplicationForm'
import { Toaster } from 'react-hot-toast'
import { FormContext } from '../components/Context'

function RootLayout() {

  const { displayForm } = useContext(FormContext)
  
  return (
    <div className={`inter pt-[80px] ${displayForm ? 'h-screen overflow-y-hidden' : ''}`}>
      
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}></Toaster>
      <ApplicationForm />
      <Navbar />
      <div>
          <Outlet />
      </div>
      <BottomSection />
    </div>
  )
}

export default RootLayout