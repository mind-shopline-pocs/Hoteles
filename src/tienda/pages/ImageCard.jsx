import React, { useContext, useState } from 'react';
import { Card, Button, Modal, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/ShoppingCartContext';

export const ImageCard = ({props}) => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate()

    const [cart, setCart] = useContext(CartContext)

    const [quantity, setQuantity] = useState(0);

    const[itemQuantity, setItemQuantity] = useState(1)

    const navigateToProduct = (id) => {
   
        navigate(`/product/${props.id}`,{
            replace: true,
            relativeTo: true
        });
        // window.location.reload(true);
    }

    function capitalize(str) {
      if (typeof str !== 'string' || str.length === 0) {
        return '';
      }
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log(props)


    //Functions to handle shopping Cart
  const src = props?.image?.src;
const title = props?.title;
const price = (props?.variants)?props?.variants[0].price: ""
const id = props?.id;

const addToCart = () => {
  setItemQuantity(1)
  setCart((currItems) => {
    const isItemsFound = currItems.find((item) => item.id === id);
    if (isItemsFound) {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: parseFloat(item.quantity) + parseFloat(itemQuantity) , src,title };
        } else {
          return item;
        }
      });
    } else {
      return [...currItems, { id, quantity: parseFloat(itemQuantity), price,src ,title}];
    }
  });
};

const removeItem = (id) => {
  setCart((currItems) => {
    if (currItems.find((item) => item.id === id)?.quantity === 1) {
      return currItems.filter((item) => item.id !== id);
    } else {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
};

const getQuantityById = (id) => {
  return cart.find((item) => item.id === id)?.quantity || 0;
};

const quantityPerItem = getQuantityById(id);
const addAquantity = (e) => {
 setItemQuantity(e.target.value)
}
  
    return (
      <>

{/* <Card
   
    key="primary"
    text= "white"
    style={{ width: '20rem', height: '30rem' ,background: "linear-gradient(45deg, #DEDEEE, #FFFFFF)", boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)"}}
    className="mb-2 border border-info  mr-2"
  >
    
    <Card.Body>
    <Card.Text className='d-flex justify-content-center'>
     
        <img variant="top" bg="white" className='' src={props.image.src}
          
          style={{
            maxWidth: "230px",
            maxHeight: "250px"
          }}

        onClick={() => navigateToProduct(props.id)}
        
        ></img>
    
      </Card.Text>

      <Card.Title className='text-center' style={
        {
          color:"black",
          fontWeight: "bold",
        }
      }> {capitalize(props?.title)} </Card.Title>
      <Card.Text className='text-center text-dark mt-4'style={
        {
          color:"black"
        }
      }>
        ${props.variants[0].price} MXN
      </Card.Text>

      <Card.Text className='mb-2 d-flex justify-content-center'>

            <Button variant="dark" onClick={() => setModalShow(true)} className="d-block rounded p-2 text-center btn btn-outline-success" style={{fontSize:"15px"}}
              >
              Ver Detalle
            </Button>
      </Card.Text>
    </Card.Body>
  </Card> */}

<div className="card" style={{width: '20rem', height: '30rem' , marginBottom:"100px"}}>
  <div className="card-image">
  <img variant="top" bg="white" className='' src={props.image.src}
          
          style={{
            width: "200px",
            height: "200px",
           
          }}

        onClick={() => navigateToProduct(props.id)}
        
        ></img>
  </div>
  <div className="card-text">
    <span className="date">{props?.tags}</span>
    <h4>{capitalize(props?.title)}</h4>
    <p style={{fontSize:"25px"}}><b>{props.variants[0].price} MXN</b></p>
  </div>
  <div className="card-stats">
    <div className="stat">
  
      <div className="type">Envio Gratis</div>
    </div>
    <div className="stat border">
    <Button variant="dark" onClick={() => setModalShow(true)} className="d-block rounded p-2 text-center btn btn-outline-light" style={{fontSize:"15px"}}
              >
              Detalle
            </Button>
    </div>
    <div className="stat">
      <div className="value">3 X</div>
      <div className="type">{props.variants[0].compare_at_price} MXN</div>
    </div>
  </div>
</div>
      
  
        <Modal  show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
          <Modal.Header closeButton style={{backgroundColor:"#000000",color:"#FFFFFF"}}>
            <Modal.Title id="contained-modal-title-vcenter" >
              {props?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='container' style={{background: "linear-gradient(45deg, #DEDEEE, #FFFFFF)", boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)"}}>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <Carousel>
                  <Carousel.Item className='d-flex justify-content-center'>
                    <img variant="top" bg="white" className='img-thumbnail' src={props.image.src}
          
                      style={{
                      maxWidth: "350px",
                      maxHeight: "350px",
                      cursor: "pointer"
                      }}

                      onClick={() => navigateToProduct(props.id)}
        
                    ></img>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='col-md-6 col-sm-12'>
                <p style={{fontSize:"20px"}}><b>{props?.title}</b></p>
                <p>En la compra de 3 cajas adquiere un precio especial de {props?.variants[0]?.compare_at_price} MXN en lugar de {props?.variants[0]?.price} MXN</p>
                <p className="d-block text-justify mt-5" style={{
                    color:"#000000"
                  }}><b>CANTIDAD ({quantityPerItem} EN EL CARRITO)</b></p>
                  <input type="number" id="tentacles" name="CANTIDAD" min="1" value={itemQuantity}  className='d-block text-center p-3 mb-4' style={{
                    width: "150px",
                    maxWidth: "100%",
                    
                  }}
                    onChange={(e)=>addAquantity(e)}
                  />
                  <div class="d-grid gap-2">
                    <button  className="p-2 shadow mb-2" onClick={() => addToCart()} style={{
                    backgroundColor: "black",
                    borderColor: "#DEB887",
                    color: "#FFFFFF",
                    display: "block",
              
                    }}>
                     <b>Agregar a carrito</b>
                      </button>
                  </div>
              </div>
            </div>
            
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#000000",color:"#FFFFFF"}}>
            <Button className="btn btn-outline-danger" onClick={() => setModalShow(false)} style={{fontSize:"15px"}}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
