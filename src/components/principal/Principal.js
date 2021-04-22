import React from 'react';
import logo from '../../assets/logo.png';
import '../principal/Principal.css';

export const Principal = () => {
    return (
        <div className="containerPrincipal" >
            <div className="principal-logo">
                <img src={logo} className="App-logo" alt="logo" />
                <p>QuickNotes</p>
            </div>
            <div className="formLogin">
                <h2>INICIA SESIÓN</h2>
                <h3>CORREO ELÉCTRONICO</h3>
                <input type="email" placeholder="ejemplo@outlook.com" />
                <h3>CONTRASEÑA</h3>
                <input type="password" placeholder="Contraseña" />
                <input type="button" value="INICIAR SESIÓN" />
                <h3>o unirse con</h3> 
                <button type="submit"><img src="gmail.png" alt="Gmail" /></button>
                <button type="submit"><img src="facebook.png" alt="Facebook" /></button>
            </div>
        </div>
    );
}

export default Principal;
