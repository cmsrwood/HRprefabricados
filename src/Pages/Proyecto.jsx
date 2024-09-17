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
        for (let i = 2; i <= proyecto.num_imagenes; i++) {
            images.push(
                <div class="carousel-item">
                    <img
                    key={i}
                    src={`/proyectos/${proyecto.id}/${i}.jpg`}
                    alt={`Imagen ${i} del proyecto ${proyecto.titulo}`}
                    className="img-fluid"
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
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={`/proyectos/${proyecto.id}/1.jpg`} class="d-block w-100" alt="...">
                    </div>
                    {renderImages()}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                
            </div>
        </div>
    );
}
