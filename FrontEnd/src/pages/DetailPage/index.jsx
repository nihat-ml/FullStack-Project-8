import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Helmet from "react-helmet"
import { useNavigate, useParams } from 'react-router'

function Detail() {

  let [product, setProduct] = useState([])
  let { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/services/${id}`)
      .then(res => {
        (setProduct(res.data.data))
        console.log(res.data.data);
      })
  }, [])

  return (
    <>
    <Helmet>
            <title>Detail</title>
      </Helmet>
      <Helmet>
        <title>Detail Page</title>
        <meta name='description' content='Detail' />
      </Helmet>
      <>
        <div className='products contain '>
          {
            <div key={product._id} className='product'>
              <img src={product.image} alt="" />
              <p>
                Title: {product.title}
              </p>
              <p>
                About: {product.description}
              </p>
              Price: ${product.price}
              <button className='backBtn'onClick={()=> navigate("/")}>Back to Home</button>
            </div>
          }
        </div>
      </>
    </>
  )
}

export default Detail