import {  } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomSection from '../components/BottomSection'
import ApplicationForm from '../components/ApplicationForm'
import { FormProvider } from '../components/Context'
import { Toaster } from 'react-hot-toast'

function RootLayout() {
  
  return (
    <div className='inter'>
      <FormProvider>
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
        </FormProvider>
    </div>
  )
}

export default RootLayout