// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
            <div className="container-fluid">
                <a className="navbar-brand me-auto" href="#">SmartLock</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Que es</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hardware</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
