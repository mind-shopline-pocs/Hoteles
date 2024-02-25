import React from 'react';
import Slider from 'react-slick';

// No olvides importar los estilos de slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const SliderComponent = ({products}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const navigate = useNavigate()

  const navigateToProduct = (id) => {
   
    navigate(`/product/${id}`,{
        replace: true,
        relativeTo: true
    });
    // window.location.reload(true);
}


  return (
    <div style={{ margin: '0 auto', padding: '40px', maxWidth: '1200px', marginTop:"20px" }}>

      <div className='container'>
        <div className='row mt-5'>
            <div className='col-12'>
                <h1 style={{
                   color:"#000000",
                    marginBottom: "50px"
                }}>Productos Relacionados</h1>
            </div>
        </div>
      </div>  
      <Slider {...settings}>
        {/* Aquí irían tus tarjetas individuales */}

        {products.map((product) => {
          return(
            <div key={product.id}>
                <div className='d-flex justify-content-center'>
                    <img src={product.image.src} alt={product.title}  className='img-fluid round' style={{
                    maxWidth: "250px",
                    maxHeight: "300px",
                    }}  onClick={() => navigateToProduct(product.id)}/>
                </div>
              <p className='text-center mt-3'>{product.variants[0]?.price} MXN</p>
            </div>
          )
        })

        }
      </Slider>
    </div>
  );
}

export default SliderComponent;