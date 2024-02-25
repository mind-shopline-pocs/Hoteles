import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CompanyValues = () => {
  return (
    <div style={{ 
              width: "100%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              padding: "8px",
              marginTop: "150px",}}>
        <Container className="my-5">
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src="https://static.wixstatic.com/media/fa1eea_00a586c6b5ec476f82956cfc56a882c7~mv2.jpg/v1/fill/w_441,h_666,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fa1eea_00a586c6b5ec476f82956cfc56a882c7~mv2.jpg" alt="Product Image" fluid />
        </Col>
        <Col md={6}>
          <Row>
            <Col xs={12} className="mb-4">
              <h3>INVENTARIO</h3>
              <p>Actualizado, en tendencia, con una probada calidad y siempre disponible.</p>
            </Col>
            <Col xs={12} className="mb-4">
              <h3>COSTO-BENEFICIO</h3>
              <p>Que les permite a nuestros clientes excelentes márgenes para hacer negocio.</p>
            </Col>
            <Col xs={12} className="mb-4">
              <h3>SERVICIO OMNICANAL</h3>
              <p>Soportado por un equipo humano, procesos y sistemas que garantizan la eficacia.</p>
            </Col>
            <Col xs={12} className="mb-4">
              <h3>VISIÓN</h3>
              <p>De negocios que conecta con la necesidad de crecer de nuestros clientes.</p>
            </Col>
            <Col xs={12} className="mb-4">
              <h3>VALORES</h3>
              <p>Como la honestidad, el respeto, la equidad y la confianza en los involucrados.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};

export default CompanyValues;