import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light text-center align-items-center shadow mb-5"></nav>
            <nav className="navbar navbar-expand-xl navbar-light fixed-top bg-light text-center align-items-center shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand p-1 me-5" to="/">
                        <img src="/logo.png" alt="logo" width={100} height={"40"}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house pe-1"></i>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros"><i className="bi bi-people pe-1"></i>Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto"><i className="bi bi-telephone pe-1"></i>Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/productos"><i className="bi bi-shop-window pe-1"></i>Productos</Link>
                            </li>
                        </ul>
                        <li className="nav-item dropdown list-unstyled px-5 text-center">
                            <div className="row justify-content-center align-items-center g-2">
                                <div className="col">
                                    <Link className="nav-link col" to="https://www.facebook.com/profile.php?id=61560268858154"><i className="bi bi-facebook"></i></Link>
                                </div>
                                <div className="col">
                                    <Link className="nav-link col" to="#"><i className="bi bi-instagram"></i></Link>
                                </div>
                                <div className="col">
                                    <Link className="nav-link col" to="#"><i className="bi bi-tiktok"></i></Link>
                                </div>
                                <div className="col">
                                    <Link className="nav-link col" to="#"><i className="bi bi-whatsapp"></i></Link>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}
