import React from 'react';
import { Carousel } from 'react-bootstrap';
import carruseltoallas from "../../assets/carrusel-toallas.jpg";
import hotelcarrusel from "../../assets/hotelcarrusel.jpeg";
import jabonesCarrusel from "../../assets/jabonesCarrusel.webp";
export const ImageSlider = () => {
    return (
      <Carousel className="image-slider" style={{marginTop:""}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carruseltoallas}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Los mejores productos</h3>
            <p>Ofrecemos los productos de la mas alta calidad y amigables con elmedio ambiente.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hotelcarrusel}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Todo producto para tu empresa</h3>
            <p>Contamos con un amplio catalogo de productos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jabonesCarrusel}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Inventario</h3>
            <p>Actualizado, en tendencia, con una probada calidad y siempre disponible.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
  