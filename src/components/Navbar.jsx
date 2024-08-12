import { useContext, useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/codexlogo.png'
import Links from './Menu'
import { FormContext } from './Context'

function Navbar() {
  const {openForm} = useContext(FormContext)

  const [displayMenu, setDisplayMenu] = useState(false); 
  const menuRef = useRef(null);


  function toggleNav(){
    if(!displayMenu)
    setDisplayMenu(prev => !prev)
  }


  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setDisplayMenu(false)
  //   }
  // }

  // useEffect(() => {
  //   if (displayMenu){
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }else{
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   };
  // }, [displayMenu]);



  return (
    <header className="">
      <nav className="h-[80px] bg-white text-black inter flex  items-center md:justify-between pl-[3%] pr-[3%] md:pr-[4%] fixed top-0 left-0 w-full z-[40] shadow-xl">
        <span onClick={toggleNav} className='text-[25px] block md:hidden cursor-pointer mr-2' id="openHam">&#9776;</span>
        <Link to="/" className=''><img className='logo md:mr-0' src={logo} alt="logo" /></Link>
          <ul className='hidden md:flex items-center justify-between md:w-[400px] lg:w-[480px]'>
            <li className='nav-link'><NavLink to="for-secondary-schools">For Schools</NavLink></li>
            <li className='nav-link'><NavLink to="testimonials">Testimonials</NavLink></li>
            <li className='nav-link'><NavLink to="faqs">FAQ</NavLink></li>
            <li className='nav-link'><NavLink to="community">Community</NavLink></li>
          </ul>
          
        <button className="bg-[rgba(52,168,83,1)] text-white w-36 h-12 rounded-md ml-auto md:ml-0 font-semibold" onClick={() => openForm()}>Apply Now</button>

        {/* Pass ref to the Links component */}
        {/* <div className={`${displayMenu ? '' : ''} md:hidden`} ref={menuRef}> */}
          <Links displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />     
      </nav>
    </header>
  )
}

export default Navbar