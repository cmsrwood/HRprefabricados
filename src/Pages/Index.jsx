import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className=''>
            <div className="container-fluid px-5">
                <div className="row align-items-center px-0 px-lg-5 text-center text-lg-start">
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0 ">
                        <h1 className="display-3 wow animate__animated animate__fadeInDown text-danger fw-bold">HR Prefabricados</h1>
                        <p className="fs-4 my-5 opacidad wow animate__animated animate__fadeInUp">En HR Prefabricados diseñamos y construimos viviendas prefabricadas personalizadas, adaptadas a tus necesidades y presupuesto.</p>
                        <Link className='btn btn-danger fs-5' target='_blank' to="https://wa.me/573134549961">Contactanos</Link>
                    </div>
                    <div className="col-6 d-none d-lg-block containerzoom zoomhover2 text-center py-5">
                        <img src="/index/index_foto.jpg" alt="launcherAndi" className="rounded w-75 wow animate__animated animate__fadeInRight shadow" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h2 className='text-center'> Nosotros </h2>
            </div>
        </div >
    )
}
