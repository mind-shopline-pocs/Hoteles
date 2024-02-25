import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { CartContext } from '../../context/ShoppingCartContext';
import { FaShoppingCart } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import { GiDelicatePerfume } from "react-icons/gi";
import { GiWaterGallon } from "react-icons/gi";
import { GiPerfumeBottle } from "react-icons/gi";
import { GiSoap } from "react-icons/gi";
import { GiTowel } from "react-icons/gi";

//Translation
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import CountryFlag from 'react-country-flag';


const languageOptions = [
  { value: 'en', label: 'English', flagCode: 'GB' },
  { value: 'es', label: 'Español', flagCode: 'ES' }
];

const customStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? 'lightgray'
        : null,
      color: '#525252',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  singleValue: (styles, { data }) => ({ ...styles, color: '#525252' }),
};

export const NavbarCustom = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //Shopping Cart Context
   const [cart, setCart] = useContext(CartContext);

     const quantity = cart.reduce((acc, curr) => {
       return acc + curr.quantity;
     }, 0);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  //Select lenguaje
  const [selectedOption, setSelectedOption] = useState(languageOptions[0]);

  const handleChange = (option) => {
    console.log(option.value);

    setSelectedOption(option);
    changeLanguage(option.value);
    localStorage.setItem('language', option.value);
  };



  return (
    <>
  <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
        <Container fluid>
          {(!isSidebarOpen) && <Button variant="dark" onClick={handleToggleSidebar} style={{fontSize:"35px"}}>
            ☰
          </Button> }
          {(isSidebarOpen) && <Button variant="dark" onClick={handleToggleSidebar} style={{fontSize:"35px"}}>
            X
          </Button>

          }
          
          
          <Link 
                className="navbar-brand" 
                to="/Home"
            >
               <img style={{width: '150px', height: '75px' , borderRadius: '100%'}}
               className='' src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><p className='NavLinkStyle ' style={{marginLeft: "50px"}}>{t('contact')}</p></Nav.Link>
              <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`} 
                        to="/aboutUs"
                    >
                       <p className='NavLinkStyle d-block' style={{marginLeft: "50px"}}>{t('aboutUs')}</p> 
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                   
                        <Link 
                        className="navbar-brand" 
                        to="/cart"
                        >
                          
                           <FaShoppingCart style={{color: 'white', fontSize: '40px'}} />
                           <span className="badge badge-pill badge-dark" style={{
                            color: 'white'
                           }}>{quantity}</span>
                        </Link>
                       
                    {/* <button className='nav-item nav-link btn'
                      
                    >
                        Logout
                    </button> */}
                     <Select
      value={selectedOption}
      onChange={handleChange}
      options={languageOptions}
      styles={customStyles}
      formatOptionLabel={({ label, flagCode }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CountryFlag countryCode={flagCode} svg style={{ marginRight: 8 }} />
          {label}
        </div>
      )}
    /> b
                    
                </ul>
            </div>
        </Container>
      </Navbar>



      <div className={`sidebar ${isSidebarOpen ? 'open' : ''} bg-dark`}>
        {/* Sidebar content */}
          <div className='d-flex flex-row-reverse sidebar'>
          <Button variant="light" className='' onClick={handleToggleSidebar}>
            ☰
          </Button>
          </div>
       
          <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home"></Nav.Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} `} 
                        to="/allProducts"
                        style={{marginTop: "50px"}}
                    >
                        <p className='NavLinkStyle m-3'><SiSmartthings style={{color:"white" ,fontSize:"25px"}} /> {t('AllProducts')}</p>
          </NavLink>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} NavLinkStyle`} 
                        to="/perfumes"
                    >
                         <p className='NavLinkStyle'><GiDelicatePerfume style={{color:"white" ,fontSize:"25px"}} /> {t('perfumery')}</p>
          </NavLink>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} NavLinkStyle`} 
                        to="/aguaEmbotellada"
                    >
                        <p className='NavLinkStyle'><GiWaterGallon style={{color:"white" ,fontSize:"25px"}} /> {t('bottledWater')}</p>
          </NavLink>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} NavLinkStyle`} 
                        to="/esencias"
                    >
                        <p className='NavLinkStyle'><GiPerfumeBottle style={{color:"white" ,fontSize:"25px"}} /> {t('cosmetics')}</p>
          </NavLink>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} NavLinkStyle`} 
                        to="/jabones"
                    >
                        <p className='NavLinkStyle'><GiSoap style={{color:"white" ,fontSize:"25px"}} /> {t('soaps')}</p>
          </NavLink>
          <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''} NavLinkStyle`} 
                        to="/blancos"
                    >
                        <p className='NavLinkStyle '><GiTowel style={{color:"white" ,fontSize:"25px"}} /> {t('sheetsAndTowels')}</p>
          </NavLink>

      
         
          {/* Add more sidebar links here */}
        </Nav>
      </div>
      {/* <Container fluid className="content">
      
       
      </Container> */}
    </>
  )
}
