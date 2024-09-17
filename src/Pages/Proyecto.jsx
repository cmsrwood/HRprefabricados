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
                <div class="carousel-item">
                    <img
                        key={i}
                        src={`/proyectos/${proyecto.id}/${i}.jpg`}
                        alt={`Imagen ${i} del proyecto ${proyecto.titulo}`}
                        className="d-block w-100"
                    />
                </div>
            );
        }
        return images;
    };

    return (
        <div className="container text-center">
            <h1>{proyecto.titulo}</h1>
            <div className="row">
                <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner">
                    {renderImages()}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
        </div>
    );
}
