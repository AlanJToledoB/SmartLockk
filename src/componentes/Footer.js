// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <h4> <label className='site-subtitle'>Smart</label>Lock</h4>
      <p>Grupo creado sin fines de lucro, con condiciones de pruebas</p>
      <div className='container-linkedin'>
        <div className='card-linkedin'>
          <a href="https://www.linkedin.com/in/alan-joel-toledo-barrientos-6a5353263" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>

          <p>Toledo <br /> Alan</p>
        </div>
        <div className='card-linkedin'>
          <a href=""><i class="bi bi-linkedin"></i></a>
          <p>Lopez <br /> Iara</p>
        </div>
        <div className='card-linkedin'>
          <a href=""><i class="bi bi-linkedin"></i></a>
          <p>Ainiceder <br /> Francisco</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
