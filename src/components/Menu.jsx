import React from "react";
import { NavLink } from "react-router-dom";

export default function Links({displayMenu}){
    return(
        <div>
            <ul className={`nav-links  rounded-3xl flex flex-col md:hidden items-center justify-between py-[80px] w-[90%] md:w-[0] h-[70vh] md:h-[0] absolute top-[100px] left-[5%] z-[1] bg-[white] ${displayMenu ? 'block' : 'hidden'}`}>
                <li className="gochi text-[30px]"><NavLink to="for-secondary-schools">For Schools</NavLink></li>
                <li className="gochi text-[30px]"><NavLink to="testimonials">Testimonials</NavLink></li>
                <li className="gochi text-[30px]"><NavLink to="/">FAQ</NavLink></li>
                <li className="gochi text-[30px]"><NavLink to="/">Community</NavLink></li>
            </ul>
        </div>
    )
}