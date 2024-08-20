import React from 'react'

export default function Navegacion() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light fixed-top bg-light text-center align-items-center shadow">
                <div className="container-fluid">
                    <a className="navbar-brand p-1 me-5" href="#">
                        <img src="img/logo.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html"><i className="bi bi-house pe-1"></i>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/nosotros.html"><i className="bi bi-people pe-1"></i>Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/contacto.html"><i className="bi bi-telephone pe-1"></i>Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/blog.html"><i className="bi bi-shop-window pe-1"></i>Productos</a>
                            </li>
                        </ul>
                        <li className="nav-item dropdown list-unstyled px-5">
                            <a className="nav-link" href="#"><i className="bi bi-facebook"></i></a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}
