import React from 'react';

import PerfumesRosca from "../../assets/PerfumesRosca.webp"
import AguaImageSection from "../../assets/AguaImageSection.webp"
import CosmeticosImagesection from "../../assets/CosmeticosImagesection.webp"
import JabonesImageSection from "../../assets/JabonesImageSection.png"
import shamppoImageSection from "../../assets/shamppoImageSection.webp"
import toallaImagesection from "../../assets/toallaImagesection.jpg"


export const ImageCardSection = () => {
  // You would replace these with your actual image URLs and descriptions
  const cards = [
    {
      image: PerfumesRosca,
      title: 'Perfumes',
      description: "Descubre la esencia de la elegancia y el encanto personal con nuestra exclusiva colección de perfumes. Cada fragancia está diseñada para capturar la esencia de la naturaleza, llevándote a un viaje olfativo inolvidable. Con notas que varían desde florales dulces hasta amaderadas y especiadas, nuestro perfume promete una presencia que no pasará desapercibida.",
    },
    {
      image: AguaImageSection,
      title: 'Agua Embotellada',
      description: "Experimenta la frescura y la pureza con nuestra agua embotellada. Proveniente de fuentes naturales y filtrada con los procesos más avanzados, garantizamos una hidratación segura y refrescante. Nuestra agua embotellada es el acompañante perfecto para tu vida activa y saludable.",
    },
    {
      image: CosmeticosImagesection,
      title: 'Esencias',
      description: "Nuestras esencias son concentrados puros de armonía y bienestar. Utilízalas para enriquecer tus espacios con aromas que calman la mente y elevan el espíritu. Desde la vivacidad cítrica hasta la serenidad de la lavanda, cada gota es una invitación a experimentar el placer y la paz interior.",
    },
    {
        image: JabonesImageSection,
        title: 'Jabones de Manos y Cuerpo',
        description: "Nuestros jabones de manos están enriquecidos con ingredientes naturales que limpian, nutren y protegen tu piel. Cada barra es una fusión de hidratación y terapia aromática que deja tus manos suaves, frescas y delicadamente perfumadas. Aprovecha el poder de la naturaleza para cuidar de tu piel todos los días.",
    },
    {
        image: shamppoImageSection,
        title: 'Shampoo',
        description: "Revitaliza tu cabello con nuestro shampoo nutritivo, formulado con extractos naturales y vitaminas esenciales. Diseñado para todos los tipos de cabello, limpia profundamente mientras hidrata y fortalece desde la raíz hasta las puntas. Disfruta de un cabello más saludable, brillante y lleno de vida.",
    },
    {
        image: toallaImagesection,
        title: 'Seccion de Blancos',
        description:"Transforma tu dormitorio en un santuario de descanso con nuestras sábanas de alta calidad. Hechas con los mejores materiales, como el algodón egipcio y la seda, nuestras sábanas prometen suavidad, confort y durabilidad. Elige entre una paleta de colores tranquilos y diseños elegantes para crear el ambiente perfecto para una noche de sueño reparador.",
    },
   
  ];

  return (
    <>
    <div className="container "style={{
        marginTop: "150px",
    }}>
    <h1 className='mt-5 mb-3'>Nuestros Productos</h1>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 my-3" key={index}>
            <div className="image-card">
              <img src={card.image} alt={card.title} className="img-fluid round" style={{
                    height: "300px",
                    width: "100%",
              }} />
              <div className="image-card-overlay">
                <div className="image-card-title">{card.title}</div>
                <p className="image-card-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr  style={{height:"5px", backgroundColor:"black"}}/>
    </div>
  
    </>
  );
};
