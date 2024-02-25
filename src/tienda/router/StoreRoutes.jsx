import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from '../pages/HomePage'
import {  NavbarCustom } from '../../ui/components/NavbarCustom'
import { Footer } from '../../ui/components/Footer'
import { AllProductsPage } from '../pages/AllProductsPage'
import { PrivaciPolitics } from '../../ui/components/PrivaciPolitics'
import { BlancosPage } from '../pages/BlancosPage'
import { ShampooPage } from '../pages/ShampooPage'
import { PerfumesPage } from '../pages/PerfumesPage'
import { AguaPage } from '../pages/AguaPage'
import { EsenciaPage } from '../pages/EsenciaPage'
import AboutUs from '../pages/AboutUs'
import { ShoppingCartProvider } from '../../context/ShoppingCartContext'
import { ShoppingCart } from '../../ui/components/ShoppingCart'

export const StoreRoutes = () => {
  return (
    <>
            <ShoppingCartProvider>
            <NavbarCustom />
            <Routes>
              <Route path="Home" element={<HomePage />} />
              <Route path="allProducts" element={<AllProductsPage />} />
              <Route path="blancos" element={<BlancosPage />} />
              <Route path="jabones" element={<ShampooPage />} />
              <Route path="perfumes" element={<PerfumesPage />} />
              <Route path="aguaEmbotellada" element={<AguaPage />} />
              <Route path="esencias" element={<EsenciaPage />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="cart" element={<ShoppingCart />} />
              
              
              
              {/* <Route path="product/:id" element={<ProductPage />} />  
              <Route path="cart" element={<ShoppingCart />} />

              <Route path="aboutUs" element={<PresentationCard />} /> */}
  
              <Route path="/" element={<Navigate to={"/Home"} />} />
            </Routes>
            <PrivaciPolitics/>
            <Footer/>
            </ShoppingCartProvider>

    </>
  )
}
