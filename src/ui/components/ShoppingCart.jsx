
import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from '../../context/ShoppingCartContext';
import SliderComponent from './SliderComponent';
import { PrivaciPolitics } from './PrivaciPolitics';




export const ShoppingCart = () => {

    const [cart, setCart] = useContext(CartContext);
    const [cartEmpty, setCartEmpty] = useState(null);
    const [subTotal, setSubtotal] = useState(0);

    const[itemQuantity, setItemQuantity] = useState(1)

    useEffect(() => {
        console.log("Carro"+ (cart.length>0));
        setCartEmpty(cart.length>0);
    })

    useEffect(() => {
      setCart(cart)
    }, [cart]);


    console.log(cart);

    

    const [check, setcheck] = useState(false)
    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    // const totalPrice = cart.reduce(
    //   (acc, curr) => acc + curr.quantity * curr.price,
    //   0
    // );

    const totalPrice =cart.reduce((acc, curr) => {
      // setSubtotal(acc + curr.quantity * curr.price);
      return  acc + curr.quantity * curr.price;
    }, 0);

    const getSubtotal = () => {
      setSubtotal(totalPrice)
    }

    const checkOut = () => {
       setcheck(true);
        console.log(check);
    }

    const clearCart = () => {
        setCart([]);
    }

    


    ///Remove and add more items
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

      const addToCart = (id) => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1,  };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1}];
          }
        });
      };

      const removeItemPerId = (id) => {
        setCart((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: 0 };
              } else {
                return item;
              }
            });
          }
        });
      };

      const removeItemPerId2 = (id) => {
        setCart((currItems) => {
          // Filter out the item with the given id
          return currItems.filter((item) => item.id !== id);
        });
      };

    

  return (
    <>

        {
            (!cartEmpty) && 
            <div className='container' style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              padding: "8px",
              marginTop: "150px",
          }}>
              <div className='row'>
                <div className="col-12" style={{
                  marginTop: "100px",
                  marginBottom: "20px"
                }}>
                  <h1 className=' text-center'>Tu carrito Es vacío</h1>
                </div>
              </div>
              <div className='row'>
                <div className="col-12 d-flex justify-content-center">
                <Link to="/allProducts" className=" rounded p-3  text-white text-center "
                style={{
                textDecoration: 'none',
                backgroundColor:"#000000",color:"#FFFFFF",
                marginBottom: "50px"
                }} ><b>Seguir Comprando</b></Link>
                </div>
              </div>
              <div className='row'>
                <div className="col-12">
                  <h3 className='text-center'>¿Tienes una cuenta?</h3>
                </div>
              </div>
              <div className='row'>
                <div className="col-12 mb-5">
                  <p className=' text-center'>Inicia sesión para finalizar tus compras con mayor rapidez.</p>
                </div>
              </div>
            </div>
           
        }

        { (cartEmpty) && 
          <div className='container' style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            marginTop: "150px",
            marginBottom: "20px"
          

        }}>

            <div className='row' >
              <div className='col-6 mt-4 mb-4 'style={{backgroundColor:"#000000" }}>
                <h1 className='m-5' style={{color:"white"}}>Tu carrito</h1>
              </div>
              <div className='col-6 mt-4 mb-4 d-flex justify-content-center align-items-center' style={{backgroundColor:"#000000" }}>
                <Link 
                        className="m-5" 
                        to="/allProducts"
                        style={{color:"white", fontSize:"20px"}}
                        >
                          <b>Seguir comprando</b>
                </Link>
              </div>
            </div>

            <Table responsive  variant='dark'>
                <thead>
                    <tr>
                        <th className='text-center'>PRODUCTO</th>
                        <th className='text-center'>CANTIDAD</th>
                        <th className='text-center'>TOTAL</th>
                       
                    </tr>
                </thead>
                <tbody className='mb-5'>
                    {
                        cart.map((item) => (
                            <tr key={item.id} className=''>
                                <td className='d-flex justify-content-center pt-4'> 
                                    {/* <Card style={{ width: '7rem' }} >
                                        <Card.Img  variant="top" src={item.src} />
                                    </Card> */}
                                    <img className='imgZoom' src={item?.src} alt="logo" style={{width: "7rem"}} />
                                   
                                </td>
                                <td className='text-center pt-5 '>
                                  <div className='container'>
                                    <div className='row'>
                                      <div className='col-md-6 col-sm-12'>
                                        <p className='d-block text-center'  style={{fontSize:"20px"}}>{item.title}</p>
                                        <p className='d-block text-center'  style={{fontSize:"20px"}}> ${item.price}</p>
                                      </div>
                                      <div className='col-md-6 col-sm-12 d-flex justify-content-beetween '>
                                        {/* <input type="number" id="tentacles" name="CANTIDAD" value={item.quantity}  min="1"  className='d-block text-center p-3 mb-4' style={{
                                        width: "150px",
                                        maxWidth: "100%",
                                        marginRight: "15px",
                                        }}
                                      /> */}
                                        <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)} >
                                          -
                                        </button>

                                        <input
                                          className="text-center"
                                          type="number"
                                          value={(item?.quantity)? item?.quantity : 1}
                                                 />

                                        <button className='btn btn-outline-success' onClick={() => addToCart(item.id)} >
                                        + 
                                        </button>

                                        <FaRegTrashAlt className='' style={{
                                          marginTop: "20px",
                                          marginLeft: "10px",
                                          fontSize: "30px"
                                        }} onClick={() =>removeItemPerId2(item.id)} />
                                       
                                      </div>
                                    </div>
                                  </div>
                                  </td>
                                <td className='pt-5' style={{fontSize:"20px"}}>${item.quantity * item.price} MXN</td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </Table>

            
            {/* <div className='row mt-5 pb-5'>
              <div className='col-6'>
                   
              </div>
              <div className='col-6'>
                <div class="d-grid gap-2">
                   
                      <p className='d-block text-center'>Subtotal: ${totalPrice} MXN</p>
                      <p className='d-block text-justify'>Impuesto incluido y los gastos de envío se calculan en la pantalla de pago</p>
                      <PaymentCheckout totalPrice={totalPrice}  />
                  </div>
              </div>
            </div> */}

        </div>
        }



<div className='simple-linear mt-5' style={{
        width: "100%",
        padding: "5px"
       }}>

            <div className='container bg-white' style={{
              marginTop: "100px",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            }}>
             
            </div>
    </div>
    
       
    </>
  )
}
