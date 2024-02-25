import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { PiTruckDuotone } from "react-icons/pi";
import { ImCreditCard } from "react-icons/im";
import { FiPackage } from "react-icons/fi";

const BenefitsSubscription = () => {
  return (
    <div style={{ 
        width: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        padding: "8px",
        marginTop: "150px",}}>

<Container className="my-5">
      {/* Sección de beneficios */}
      <Row className="text-center">
        <Col md={4} sm={12} className="mb-3">
            
          <Card body>
            <PiTruckDuotone style={{fontSize: "150px"}} />
            <Card.Title>Aprovecha el beneficio del envío gratis</Card.Title>
            <Card.Text>Aplica en compras a partir de $299. Suma todo lo que quieras al carrito.</Card.Text>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card body>
            <ImCreditCard style={{fontSize: "150px"}} />
            <Card.Title>Elige tu medio de pago favorito</Card.Title>
            <Card.Text>Paga con tarjeta o en efectivo. Tu dinero está protegido con Mercado Pago.</Card.Text>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-3">
          <Card body>
            <FiPackage style={{fontSize: "150px"}} />
            <Card.Title>Recibe tus productos en menos de 48 hs</Card.Title>
            <Card.Text>Tus paquetes están seguros. Tienes el respaldo de los envíos con Mercado Libre.</Card.Text>
          </Card>
        </Col>
      </Row>
      
      {/* Sección de suscripción */}
      <Row className="mt-5 " style={{}}>
        <Col xs={12} className="subscription-section">
          <h2>Suscríbete y entérate de nuestras novedades.</h2>
          <Form>
            <Row className="align-items-center">
              <Col sm={8} className="my-1">
                <Form.Control placeholder="Escribe tu correo electrónico" />
              </Col>
              <Col sm={4} className="my-1">
                <Button type="submit">Enviar</Button>
              </Col>
            </Row>
          </Form>
          <p className="text-muted">Al suscribirte aceptas <a href="#terms">términos y condiciones</a>.</p>
        </Col>
      </Row>
    </Container>
        </div>
    
  );
};

export default BenefitsSubscription;