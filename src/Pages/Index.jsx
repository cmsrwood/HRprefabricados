import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
    return (
        <div className=''>
            <div className="container-fluid py-5 ">
                <div className="text-center pb-5 my-5 row justify-content-center align-items-center">
                    <div className="col">
                        <h1 className="display-3 fw-bold text-danger"> HR Prefabricados</h1>
                        <p className="fs-4 my-5">En HR Prefabricados diseñamos y construimos viviendas prefabricadas personalizadas, adaptadas a tus necesidades y presupuesto.</p>
                    </div>
                    <div className="col">
                        <Link className='btn btn-dark fs-5' target='_blank' to="https://wa.me/573134549961">Contactanos</Link>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className='text-center'> Nosotros </h2>
            </div>
        </div >
    )
}
