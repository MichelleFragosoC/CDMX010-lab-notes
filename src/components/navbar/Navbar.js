import React from 'react';
import '../navbar/Navbar.css';
// import logo from '../../assets/logo.png';


const Navbar = () =>{
    return(
/*         <div className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            <h2>
                QUICK NOTES
            </h2>
            <p>
                Cerrar sesión
            </p>
        </div> */

<nav id="menu">
<div class="barra">
    <input type="checkbox"/>
        <label><i aria-hidden="true" class="fa fa-bars"></i></label>
        <ul class='principal'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/NoteForm">Categorías <i class="fa fa-chevron-down"></i></a>
            <ul class="menus">
            <li><a href="/Note">Añadir nota</a></li>
            </ul>
        </li>
        <li><a href="/">Cerrar Sesión</a></li>
        </ul>
</div>
</nav> 
    )
}


export default Navbar;