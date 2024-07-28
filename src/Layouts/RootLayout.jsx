import {  } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomSection from '../components/BottomSection'
import ApplicationForm from '../components/ApplicationForm'
import { FormProvider } from '../components/Context'

function RootLayout() {
  
  return (
    <div className='inter'>
      <FormProvider>
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