// src/components/Software.js
import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../assets/imgSoftware/arduinoide.jpg';
import card2 from '../assets/imgSoftware/paginaweb.png';
import card3 from '../assets/imgSoftware/word.png';
import backgroundImage4 from '../assets/imgSoftware/arduinologo.png';
import backgroundImage5 from '../assets/imgSoftware/javascriptlogo.png';
import backgroundImage6 from '../assets/imgSoftware/phplogo.png';
import '../componentes/home.css';

function Software() {
    return (
        <div className='software'>
            <h3 className='about-is'>Software <i className="bi bi-code-slash"></i></h3>
            <div className="image-container">
                <Link to="/ruta1" className="image-link" style={{ backgroundImage: `url(${card1})` }}>
                    <div className="hover-overlay" style={{ backgroundColor: 'rgb(0, 174, 232)' }}>
                        <p>Codigo Arduino</p>
                    </div>
                </Link>
                <Link to="/ruta2" className="image-link" style={{ backgroundImage: `url(${card2})` }}>
                    <div className="hover-overlay" style={{ backgroundColor: 'rgb(0, 174, 232)' }}>
                        <p>Pagina WEB</p>
                    </div>
                </Link>
                <a href="https://github.com/AlanJToledoB/Documentacion-SmartLock" target="_blank" rel="noopener noreferrer" className="image-link" style={{ backgroundImage: `url(${card3})` }}>
                    <div className="hover-overlay" style={{ backgroundColor: 'rgb(0, 174, 232)' }}>
                        <p>Documentacion</p>
                    </div>
                </a>
            </div>
            {/* <div className='lenguajes-usados'>
                <h3 className='subtitle'>Lenguajes</h3>
                <p className='text-parraf'>Lenguajes y tecnologias que usamos para desempeñar este proyecto</p>
                <div className="image-container2">
                    <Link to="/ruta4" className="image-link">
                        <img src={backgroundImage4} alt="Python" />
                    </Link>
                    <Link to="/ruta5" className="image-link">
                        <img src={backgroundImage5} alt="JavaScript" />
                    </Link>
                    <Link to="/ruta6" className="image-link">
                        <img src={backgroundImage6} alt="React" />
                    </Link>
                </div>
            </div> */}
        </div>
    );
}

export default Software;
