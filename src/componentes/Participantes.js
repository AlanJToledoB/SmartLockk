import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener React Router instalado
import imagen1 from '../assets/imgParticipantes/alan.jpg';
import imagen2 from '../assets/imgParticipantes/iara.jpg';
import imagen3 from '../assets/imgParticipantes/francisco.jpg';

function TresContenedores() {
    const contenedores = [
        {
            imagen: imagen1,
            titulo: 'Toledo Barrientos Alan Joel',
            descripcion: 'Tenico Informatico especializado en Software',
            portafolioLink: '/alan-portafolio', // Cambia esto por la ruta correcta
        },
        {
            imagen: imagen2,
            titulo: 'Lopez Zaupa Iara Aylen',
            descripcion: 'Tenico Informatico especializado en Software',
            portafolioLink: '/iara-portafolio', // Cambia esto por la ruta correcta
        },
        {
            imagen: imagen3,
            titulo: 'Ainiceder Francisco Luciano ',
            descripcion: 'Tenico Informatico especializado en hardware.',
            portafolioLink: '/contenedor3-portafolio', // Cambia esto por la ruta correcta
        },
    ];

    return (
        <div className='Participantes'>
            <h2 className='about-is'>Participantes</h2>
            <div className="contenedores-container">
                {contenedores.map((contenedor, index) => (
                    <div className="contenedor" key={index}>
                        <img src={contenedor.imagen} alt={`Imagen ${index + 1}`} className='participante-img' />
                        <h2>{contenedor.titulo}</h2>
                        <p>{contenedor.descripcion}</p>
                        <Link to={contenedor.portafolioLink}>
                            <button>
                                <span>
                                    Portafolio
                                </span>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TresContenedores;
