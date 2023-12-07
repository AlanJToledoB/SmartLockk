// src/components/Home.js
import React from 'react';
import backgroundImage from '../assets/caseTapa.jpeg'; // Ruta de la imagen de fondo
import '../componentes/home.css';

function Home() {
    return (
        <div className="home">
            <div className='fondo-container'>
                <div className="background-image">
                    <div className="content">
                        <div className="text-container">
                            <h1 className="site-title">Bienvenido, esto es</h1>
                            <h2 className="site-subtitle">SmartLock</h2>
                            <p className="site-parrafo">Tu mejor eleccion en el area de la <label className='Plabras-claves'>seguiridad </label> en tu hogar, siempre con el mejor compromiso y <label className='Plabras-claves'>confiabilidad</label></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
