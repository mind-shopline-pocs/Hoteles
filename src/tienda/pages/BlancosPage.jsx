import React, { useEffect, useState } from 'react'

import { Card, Button, Row, Col, Pagination } from 'react-bootstrap';
import { ImageCard } from './ImageCard';
import SliderComponent from '../../ui/components/SliderComponent';

export const BlancosPage = () => {

    const itemsPerPage = 8;
    const [items, setItems] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);
    
    // const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('title-asc');


      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://arkusnexustest.myshopline.com/admin/openapi/v20240601/products/products.json', {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhcHBLZXkiOiI3MWNmMDJjNTE1NjRhMjJhM2IxOTJlMzZkNTg5ZmEzZTIwMzU5YjljIiwic2VsbGVySWQiOiIyMDE4NTg1NzQzIiwic3RvcmVJZCI6IjE3MDcxNzY3MTIwMjgiLCJ2ZXJzaW9uIjoiVjIiLCJkb21haW4iOiJodHRwczovL3NsLW9wZW4tdXMubXlzaG9wbGluZS5jb20iLCJ0aW1lc3RhbXAiOjE3MDcxODI2Mjk4ODIsImlzcyI6Inlzb3VsIiwiZXhwIjoxODAxNzkwNjI5fQ.Je8Z8w7yuo31XKE2X2DV7VfLCpmMvYR2ONiW5-WXCX6P9puufWbAdBx39B3Ka4uS_nWAL7_hBNWMKvsH8kfVdA',
                    },
                });
                const data = await response.json();

               
               setItems(data?.products?.filter((product) => product?.tags === "blancos"));
               setFilteredProducts(data?.products);
              
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []); 


    useEffect(() => {
      let sortedProducts = [...items];
  
      if (searchTerm) {
        sortedProducts = sortedProducts.filter(product =>
          product?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
        );
      }
  
      sortedProducts.sort((a, b) => {
        if (sortType === 'title-asc') {
          return a.title.localeCompare(b.title);
        } else if (sortType === 'title-desc') {
          return b.title.localeCompare(a.title);
        } else if (sortType === 'price-asc') {
          return a.variants[0]?.price - b.variants[0]?.price;
        } else if (sortType === 'price-desc') {
          return b.variants[0]?.price - a.variants[0]?.price;
        }
        return 0;
      });
  
      setFilteredProducts(sortedProducts);
    }, [searchTerm, sortType, items]);

    const handleClick = (page) => {
        setCurrentPage(page);
      };
    
      const pages = [];
      for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
        pages.push(i);
      }
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    
      const renderPageNumbers = pages.map((number) => {
        if (number < maxPageLimit + 1 && number > minPageLimit) {
          return (
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
              {number}
            </Pagination.Item>
          );
        } else {
          return null;
        }
      });
    
      // Navigate to the next page
      const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
    
        if (currentPage + 1 > maxPageLimit) {
          setMaxPageLimit(maxPageLimit + itemsPerPage);
          setMinPageLimit(minPageLimit + itemsPerPage);
        }
      };
    
      // Navigate to the previous page
      const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);
    
        if ((currentPage - 1) % itemsPerPage === 0) {
          setMaxPageLimit(maxPageLimit - itemsPerPage);
          setMinPageLimit(minPageLimit - itemsPerPage);
        }
      };


      //Filter Options
      console.log(filteredProducts)
  


  return (
    <>
        

        <div className='container ' style={{
            marginTop: "150px",
        
        }}>
          <div className="row mt-3">
            <div className="col-10 d-flex justify-content-center">
              <input
              type="text"
              className="form-control"
              placeholder="Buscar por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="form-control">
                <option value="title-asc">Título Ascendente</option>
                <option value="title-desc">Título Descendente</option>
                <option value="price-asc">Precio Ascendente</option>
                <option value="price-desc">Precio Descendente</option>
              </select>
            </div>
          </div>
          
      

            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 style={{
                       color:"#000000"
                    }}>Blancos</h1>
                </div>
            </div>
        </div>

        <div style={{ 
              width: "100%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              padding: "10px",
              marginTop: "15px",
              marginBottom:"15px"}}>
        <div className='container'>
            <div className='row mt-5'>
                {currentItems.map((product) => {

                    return(
                        <div className="col-xl-3 col-lg-6 col-md-6" key={product.id}>
                          <ImageCard props={product} />
                        </div>
                    )

                })

                }
                {/* <div className="col-lg-3 col-md-6">
                    
                </div> */}
            </div>
            <Pagination>
        <Pagination.Prev onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false} />
        {renderPageNumbers}
        <Pagination.Next onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false} />
      </Pagination>
        </div>
        </div>

        <SliderComponent products={items}/>
    </>
  )
}
