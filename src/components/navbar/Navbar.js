import React from 'react';
import '../navbar/Navbar.css';
import logo from '../../assets/Logo.png';

const Navbar = () =>{
    return(
        <div className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            <h2>
                QUICK NOTES
            </h2>
            <p>
                Cerrar sesión
            </p>
        </div>
    )
}

export default Navbar;