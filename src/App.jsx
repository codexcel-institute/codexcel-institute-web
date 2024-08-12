import { } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { FormProvider } from './components/Context'

function App() {

  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  )
}

export default App
