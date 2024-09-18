import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Proyecto() {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    // Cargar los datos del archivo JSON
    fetch('/proyectos.json')
      .then((response) => response.json())
      .then((data) => {
        const proyectoEncontrado = data.find((p) => p.id === parseInt(id));
        setProyecto(proyectoEncontrado);
      });
  }, [id]);

  if (!proyecto) {
    return <div>Este proyecto no existe.</div>;
  }

  const renderImages = () => {
    let images = [];
    for (let i = 1; i <= proyecto.num_imagenes; i++) {
      images.push(
        <div className="col">
          <img
            key={i}
            src={`/proyectos/${proyecto.id}/${i}.jpg`}
            alt={`Imagen ${i} del proyecto ${proyecto.titulo}`}
            className="img-fluid zoomhover2 containerzoom shadow rounded-5"
          />
        </div>
      );
    }
    return images;
  };

  return (
    <div className="container text-center mb-5">
      <h1 className="display-3 text-danger mb-5">{proyecto.titulo}</h1>
      <div className="row row-cols-1 row-cols-sm-2 g-5">
        {renderImages()}
      </div>
    </div>
  );
}
