import React from 'react';
import backgroundImage from '../assets/caseTapa.jpg';
import videoSrc from '../assets/presentacion.mp4'; // Ajusta la ruta según tu estructura de carpetas
import '../componentes/home.css';

function About() {
    return (
        <div className='about'>
            <div className='detalle-about'></div>
            <h3 className='about-is'>¿Qué es?</h3>
            <p className='text-parraf'>SmartLock es un proyecto de seguridad del hogar en el que quisimos desempeñar los conceptos más usados de la informática.</p>
            
            {/* Agregar el elemento de video */}
            <video width="520" height="300" controls>
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
            
            <div className='imagenes-about'>
                <div>
                    <i className="bi bi-bug-fill"></i>
                    <h4>Hardware</h4>
                    <p></p>
                </div>
                <div>
                    <i className="bi bi-code-slash"></i>
                    <h4>Software</h4>
                </div>
                <div>
                    <i className="bi bi-robot"></i>
                    <h4>Lógica</h4>
                </div>
            </div>
            <p className='text-parraf'>Enfoquémonos más en los conceptos que usamos para este proyecto.</p>
        </div>
    );
}

export default About;
