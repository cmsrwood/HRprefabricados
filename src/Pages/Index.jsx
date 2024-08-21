import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col">
                    <h1 className="display-2 rojo fw-bold"> HR Prefabricados</h1>
                    <p className="fs-4 my-5 opacidad">Descubre las ventajas de las casas prefabricadas: rapidez, eficiencia y personalización.</p>
                    <Link className='btn btn-danger fs-5'>Contactanos</Link>
                </div>
                <div className="col">
                    <img src="/index_foto.jpg" alt="logo" className="img-fluid" />
                </div>
            </div>
        </div >
    )
}
