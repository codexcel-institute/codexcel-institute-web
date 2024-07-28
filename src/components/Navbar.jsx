import {useContext, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/codexlogo.png'
import Links from './Menu'
import { FormContext } from './Context'

function Navbar() {

  const {openForm} = useContext(FormContext)

  const [displayMenu, setDisplayMenu] = useState(false); 

    function toggleNav(){
        setDisplayMenu(prev => !prev)
        console.log('my menu')
    }

  return (
    <header className="">
      <nav className="h-[80px] bg-white text-black inter flex  items-center justify-between pl-[3%] pr-[3%] md:pr-[4%] relative">
        <span onClick={toggleNav} className='text-[25px] block md:hidden' id="openHam">&#9776;</span>
        <Link to="/"><img className='logo mr-[270px] md:mr-0' src={logo} alt="logo" /></Link>
        <ul className='flex items-center justify-between w-auto md:w-[75%] lg:w-[70%]'>
          <ul className='hidden md:flex items-center justify-between w-[330px] md:w-[400px]'>
            <li className='nav-link'><NavLink to="for-secondary-schools">For Schools</NavLink></li>
            <li className='nav-link'><NavLink to="testimonials">Testimonials</NavLink></li>
            <li className='nav-link'><NavLink to="faqs">FAQ</NavLink></li>
            <li className='nav-link'><NavLink to="community">Community</NavLink></li>
          </ul>
          <li><button className="bg-[rgba(52,168,83,1)] text-white ml-auto w-36 h-12 rounded-md font-semibold" onClick={() => openForm()}>Apply Now</button></li>
        </ul>


        <Links displayMenu={displayMenu}/>
      </nav>
    </header>
  )
}

export default Navbar