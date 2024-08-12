import {React} from "react";
import { NavLink } from "react-router-dom";

export default function Links({ displayMenu, setDisplayMenu }){
    const closeMenu = () => {
        setDisplayMenu(false);
    };

    if (!displayMenu) {
        return null;
    }


    return(

        <div className={`nav-menu-parent fixed flex pt-[100px] justify-center top-0 left-0 w-full ${displayMenu ? 'block' : 'hidden'} h-svh`} onClick={closeMenu}>
            <ul className={`child  rounded-3xl flex flex-col md:hidden items-center justify-between py-[80px] w-[90%] md:w-[0] h-[60vh] sm:h-[70vh] md:h-[0] z-[1] bg-[white] ${displayMenu ? 'block' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
                <li className="gochi text-[30px]" onClick={closeMenu}><NavLink to="for-secondary-schools">For Schools</NavLink></li>
                <li className="gochi text-[30px]" onClick={closeMenu}><NavLink to="testimonials">Testimonials</NavLink></li>
                <li className="gochi text-[30px]" onClick={closeMenu}><NavLink to="/faqs">FAQ</NavLink></li>
                <li className="gochi text-[30px]" onClick={closeMenu}><NavLink to="/community">Community</NavLink></li>
            </ul>
        </div>
            
    )
}