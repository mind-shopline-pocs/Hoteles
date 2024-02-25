import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { PrivaciPolitics } from '../../ui/components/PrivaciPolitics';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
  const { t, i18n } = useTranslation();

useEffect(() => {

  const languaje = localStorage.getItem('language') || 'es';
 
}, [])



  return (
    <>
    <Container className="about-us-section" style={{ marginTop:"150px"}}>
      <Row className="my-5">
        <Col xs={12}>
          <h1 className="text-center">{t('aboutUs')}</h1>
          <p className="text-center">{t('presentation')}</p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{t('misionTitle')}</Card.Title>
              <Card.Text>{t('mison')}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{t('visionTitle')}</Card.Title>
              <Card.Text>{t('vision')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Image src="https://www.mews.com/hs-fs/hubfs/viajeres%20de%20negocios%20tipos%20de%20huespedes.jpg?width=800&name=viajeres%20de%20negocios%20tipos%20de%20huespedes.jpg" alt="Imagen Corporativa" className="w-100" />
        </Col>
      </Row>

      <Row className="services-section my-5">
        <Col xs={12}>
          <h2>{t('services')}</h2>
          <Row>
            <Col md={4} sm={6} className="service-item">
              <Image src="https://amenitieshotel.com/wp-content/uploads/2018/08/Tendence_Amenities_Hotel2.jpg" alt="Servicio 1" className="service-image" />
              <h3>{t('option1')}</h3>
              <p>{t('text1')}</p>
            </Col>
            <Col md={4} sm={6} className="service-item">
              <Image src="https://1.bp.blogspot.com/-V18srPNpdDQ/Xc9M1Z4BGMI/AAAAAAAAKB0/-u3zSb8QTwwKnG-PuCzX8zS5qT7H0rA0wCLcBGAsYHQ/s1600/9.%2BTRS%2BCORAL%2BHOTEL%2BPLAYA%2BMUJERES%2B-%2BMARIANA%2BOREJEL%2BNIETO.jpg" alt="Servicio 2" className="service-image" />
              <h3>{t('option2')}</h3>
              <p>{t('text2')}</p>
            </Col>
            <Col md={4} sm={6} className="service-item">
              <Image src="https://www.serrentis-hotelsupplies.com/media/fc/03/7e/1679553620/pla-eco-friendly-cardboard-amenities-box-40edbaa3f5d948ada187737aba016c88.jpg" alt="Servicio 3" className="service-image" />
              <h3>{t('option3')}</h3>
              <p>{t('text3')}</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-5">
        <Col xs={12}>
          <h2>{t('clients')}</h2>
          <Row>
            {/* Aquí se podrían mapear los clientes si se tienen en un arreglo */}
            <Col md={3} sm={6} className="client-item">
              <Image src="https://1000marcas.net/wp-content/uploads/2020/01/Marriott.jpg" alt="Cliente 1" className="client-logo" />
            </Col>
            <Col md={3} sm={6} className="client-item">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Gran_Hotel_Ciudad_de_M%C3%A9xico.jpg" alt="Cliente 2" className="client-logo" />
            </Col>
            <Col md={3} sm={6} className="client-item">
              <Image src="https://cdn.worldvectorlogo.com/logos/hilton-international-1.svg" alt="Cliente 3" className="client-logo" />
            </Col>
            <Col md={3} sm={6} className="client-item">
              <Image src="data:image/png;base64,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" alt="Cliente 4" className="client-logo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
    </>
  );
};

export default AboutUs;