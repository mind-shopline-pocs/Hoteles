import React from 'react'
import logo from '../../assets/logo.jpg';

export const PrivaciPolitics = () => {
  return (
    <>
        <div className='mt-5 mb-2' style={{
            height: "20px",
            width: "100%",
            backgroundColor: "#000000",
        }}></div>
        <div className='favoritesBackGround d-flex justify-content-center p-3 '>
            <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center mt-5 mb-3'>
                <img style={{width: '200px', height: '100px'}}
                className='rounded' src={logo} alt="logo" />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center title'>Política de Privacida  Terminos y Condiciones</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center title'>Hoteleria y productos de haceo personal</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center'  style={{
                    color: "#DAA520",
           
                    }}> © 2023 . Derechos reservados.</p>
                </div>
            </div>
           
            </div>
           
        </div>
    </>
  )
}
