import React, { useEffect, useState } from 'react';

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Carga el archivo JSON
    fetch('/proyectos.json')
      .then((response) => response.json())
      .then((data) => setProyectos(data));
  }, []);

  function card(proyecto) {
    return (
      <div className="col" key={proyecto.id}>
        <div className="card border border-secondary wow animate__animated animate__fadeInUp">
          <img src={`/proyectos/${proyecto.id}/${proyecto.imagenes[0]}`} className="card-img-top" alt={proyecto.titulo} />
          <div className="card-body">
            <h5 className="card-title naranja fw-bold">{proyecto.titulo}</h5>
            <p className="card-text">{proyecto.texto}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center">
      <div className="my-5">
        <h1 className="display-3 text-danger wow animate__animated animate__fadeInUp">Proyectos</h1>
        <p className='my-5 fs-4'>Estos son algunos de los proyectos que nos hemos llevado.</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {proyectos.map(proyecto => card(proyecto))}
      </div>
    </div>
  );
}
