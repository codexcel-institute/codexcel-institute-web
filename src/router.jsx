import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import LandingPage from './Pages/LandingPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<LandingPage />} />

        </Route>
    )
)