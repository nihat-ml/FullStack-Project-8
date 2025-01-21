import React, { useEffect, useState } from 'react'
import { MdFavorite } from "react-icons/md";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';


function ServicesPage() {
  const [services, setServices] = useState([])
  const navigate = useNavigate();
  const { addFavorite } = useFavorites();

  function getServices(){
    axios.get("http://localhost:3000/services")
    .then((res)=>{
        setServices(res.data)
    })
  }
  useEffect(()=>{
    getServices()
  },[])
  const handleAddFavorite = (guest) => {
    addFavorite(guest); 
  };

  return (
    <>
     <div className='services'>
      <h1>Our Services</h1>
        <div className='cardsServices'>
            {services.map((service)=>(
              <div className='cardServices' key={service._id}>
              <img src={service.image} alt="" style={{width:100}} />
              <h2>{service.title}</h2>
              <span>${service.price}</span>
              <div className='cardBtnServices'>
                  <button className='detailBtnServices' onClick={()=> navigate(`/${service._id}`)}>Learn More</button>
                  <button className='favoritesBtnServices' onClick={() => handleAddFavorite(service)}><MdFavorite className='favoriteIcons'/></button>
              </div>
          </div>
            ))}
        </div>

      </div> 
    </>
  )
}

export default ServicesPage
