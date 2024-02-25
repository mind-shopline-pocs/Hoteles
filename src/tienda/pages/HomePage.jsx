import React, { useEffect, useState } from 'react'
import { ImageSlider } from '../../ui/components/ImageSlider'
import { Propositosection } from '../../ui/components/propositosection'
import { ImageCard } from './ImageCard'
import { ImageCardSection } from '../../ui/components/ImageCardSection'
import CompanyValues from '../../ui/components/CompanyValues'
import BenefitsSubscription from '../../ui/components/BenefitsSubscription'


export const HomePage = () => {

  const [allProducts, setAllProducts] = useState([])


  //


  

  //Calling the API to get the products
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://arkusnexustest.myshopline.com/admin/openapi/v20240601/products/products.json', {
                  headers: {
                      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhcHBLZXkiOiI3MWNmMDJjNTE1NjRhMjJhM2IxOTJlMzZkNTg5ZmEzZTIwMzU5YjljIiwic2VsbGVySWQiOiIyMDE4NTg1NzQzIiwic3RvcmVJZCI6IjE3MDcxNzY3MTIwMjgiLCJ2ZXJzaW9uIjoiVjIiLCJkb21haW4iOiJodHRwczovL3NsLW9wZW4tdXMubXlzaG9wbGluZS5jb20iLCJ0aW1lc3RhbXAiOjE3MDcxODI2Mjk4ODIsImlzcyI6Inlzb3VsIiwiZXhwIjoxODAxNzkwNjI5fQ.Je8Z8w7yuo31XKE2X2DV7VfLCpmMvYR2ONiW5-WXCX6P9puufWbAdBx39B3Ka4uS_nWAL7_hBNWMKvsH8kfVdA',
                  },
              });
              const data = await response.json();
             setAllProducts(data?.products?.filter((product) => product.product_category === "Bathroom Suites"));
          } catch (error) {
              console.error('Error fetching products:');
          }
      };

      fetchData();
  }, []); 

  return (
    <>

        <ImageSlider />
        <Propositosection />
        <CompanyValues />
        <ImageCardSection />

        <div style={{ 
              width: "100%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              padding: "10px",
              marginTop: "150px",
              marginBottom:"150px"}}>
 <div className='container'>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 style={{
                        color:"#2a2a2a"
                    }}>Novedades</h1>
                </div>
            </div>
          </div>


          <div className='container'  style={{marginBottom:"100px"}}>
            <div className='row mt-5'>
                {allProducts?.slice(0,4).map((product) => {

                    return(
                        <div className="col-xl-3 col-lg-6 col-md-6" key={product.id}>
                            <ImageCard props={product} />
                        </div>
                    )
                })
                }
            </div>
          </div>

              </div>
         
        

       
        
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12'>
                    <h1 style={{
                        color:"#2a2a2a"
                    }}>Lo mas Vendido</h1>
                </div>
            </div>
          </div>

          <div className='container' style={{marginBottom:"150px"}}>
            <div className='row mt-5'>
                {allProducts?.slice(5,9).map((product) => {

                    return(
                        <div className="col-xl-3 col-lg-6 col-md-6" key={product.id}>
                            <ImageCard props={product} />
                        </div>
                    )
                })
                }
            </div>
          </div>

          <BenefitsSubscription/>
       
        
    </>
  )
}
