import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    function card(icono, titulo, texto) {
        return (
            <div className="card border border-secondary col-12 col-sm-6 col-md-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
                <i className={`bi bi-${icono} fs-1 text-danger p-5 containerzoom zoomhover`}></i>
                <div className="card-body">
                    <h5 className="card-title naranja fw-bold">
                        {titulo}
                    </h5>
                    <p className="card-text">{texto}</p>
                </div>
            </div>
        )
    }
    return (
        <div className=''>
            <div className="container-fluid px-5 pb-5 border-bottom">
                <div className="row align-items-center px-0 px-lg-5 text-center text-lg-start">
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0 ">
                        <h1 className="display-3 wow animate__animated animate__fadeInRight text-danger fw-bold">HR Prefabricados</h1>
                        <p className="fs-4 my-5 opacidad wow animate__animated animate__fadeInLeft">En HR Prefabricados diseñamos y construimos viviendas prefabricadas personalizadas, adaptadas a tus necesidades y presupuesto.</p>
                        <Link className='btn btn-danger fs-5' target='_blank' to="https://wa.me/573134549961">Contactanos</Link>
                    </div>
                    <div className="col-6 d-none d-lg-block containerzoom zoomhover2 text-center py-5">
                        <img src="/index/index_foto.jpg" alt="launcherAndi" className="rounded w-75 wow animate__animated animate__fadeInRight shadow" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="container text-center mt-5">
                    <h3 className="py-2 ">Soluciones constructivas rápidas y eficientes</h3>
                    <p className=" ">Nuestras estructuras prefabricadas te ofrecen la calidad y durabilidad que buscas, en menos tiempo y con menos complicaciones.</p>
                </div>

                <div className="container-fluid text-center my-5 px-5">
                    <div className="row justify-content-center ">
                        {card("house-door", "Diseño y Construcción Personalizada", "Diseñamos y construimos estructuras prefabricadas a medida para satisfacer tus necesidades específicas.")}
                        {card("speedometer2", "Instalación Rápida y Eficiente", "Contamos con un equipo altamente capacitado para instalar tus estructuras en tiempo récord y con la máxima calidad.")}
                        {card("bricks", "Materiales de Primera Calidad", "Construimos con materiales de la más alta calidad para garantizar durabilidad y resistencia.")}
                        {card("house-fill", "Ampliación y Remodelación", "Adaptamos y ampliamos tus estructuras existentes para que se ajusten a tus nuevas necesidades.")}
                    </div>
                </div>
            </div>
        </div >
    )
}
