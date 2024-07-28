import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import LandingPage from './Pages/LandingPage';
import SecondarySchools from './Pages/SecondarySchools';
import Testimonials from './Pages/Testimonials';
import Faq from './Pages/Faq';
import Community from './Pages/Community';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='for-secondary-schools' element={<SecondarySchools />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='faqs' element={<Faq />} />
            <Route path='community' element={<Community />} />
        </Route>
    )
)