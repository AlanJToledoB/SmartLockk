import React, { useState } from 'react';
import esp8266Img from '../assets/imgSlider/esp8266.png';
import modulorfidImg from '../assets/imgSlider/modulorfid.png';
import releImg from '../assets/imgSlider/rele.png';
import '../componentes/home.css';

const hardwareData = [
    { imgSrc: esp8266Img, title: 'Esp8266', text: 'Este microcontrolador lo usamos para controlador todos los componentes del proyecto y unas de las funcionalidades mas importantes de conectarse a internet' },
    { imgSrc: modulorfidImg, title: 'Modulo RFID', text: 'Lo usamos para poder detectar una llave de acceso correcta o incorrecta para abrir la cerradura.' },
    { imgSrc: releImg, title: 'Relé', text: 'El modulo rele lo usamos para poder enviarle una señal para abrir o cerrar la cerradura cuando se le asignaba la accion' },
];

function Hardware() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='about'>
            <div className='detalle-about'></div>
            <h3 className='about-is mt-n1'>
                Hardware <i className='bi bi-bug-fill'></i>
            </h3>
            <p className='text-parraf'>
                En esta sección mostraremos todos los elementos más importantes que
                usamos para la creacion del <label className='Plabras-claves'>prototipo. </label>
            </p>

            <div
                id='carouselExampleInterval'
                className='carousel slide'
                data-bs-ride='carousel'
                onChange={handleSlide}
            >
                <div className='carousel-inner'>
                    {hardwareData.map((item, index) => (
                        <div
                            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                            key={index}
                            data-bs-interval='10000'
                        >
                            <div className='d-flex flex-column align-items-center'>
                                <img
                                    src={item.imgSrc}
                                    className='d-block w-50 mx-auto'
                                    alt={item.title}
                                />
                                <h4 className='mt-2'>{item.title}</h4>
                                <p className='text-parraf'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='prev'
                >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='next'
                >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

            <p className='text-parraf'></p>
        </div>
    );
}

export default Hardware;
