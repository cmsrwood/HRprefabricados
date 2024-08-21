import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className=''>
            <div className="container-fluid py-5">
                <div className="text-center">
                    <h1 className="display-3 text-danger fw-bold"> HR Prefabricados</h1>
                    <p className="fs-4 my-5">En HR Prefabricados diseñamos y construimos viviendas prefabricadas personalizadas, adaptadas a tus necesidades y presupuesto.</p>
                    <Link className='btn btn-danger fs-5' target='_blank' to="https://wa.me/573134549961">Contactanos</Link>
                </div>
            </div>
        </div >
    )
}
