import {} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/codexlogo.png'

function Navbar() {
  return (
    <header className="">
      <nav className="h-[80px] bg-white text-black inter flex items-center justify-between pl-[3%] pr-[5%]">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <ul className='flex items-center justify-between w-[580px]'>
          <li><NavLink to="for-secondary-schools">For Schools</NavLink></li>
          <li><NavLink to="testimonials">Testimonials</NavLink></li>
          <li><NavLink to="/">FAQ</NavLink></li>
          <li><NavLink to="/">Community</NavLink></li>
          <li><NavLink to="/"><button className="bg-[rgba(52,168,83,1)] text-white w-36 h-14 rounded-md font-semibold">Apply Now</button></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar