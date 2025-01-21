import React from 'react';
import { FaRegHeart } from 'react-icons/fa'; 

import Swal from 'sweetalert2'; 
import { Helmet } from 'react-helmet';
import { useFavorites } from '../../context/FavoritesContext';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites(); 

 
  if (favorites.length === 0) {
    return <div>Your favorites list is empty</div>;
  }

  
  const handleRemoveFavorite = (serviceId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFavorite(serviceId); 
        Swal.fire('Removed!', 'The guest has been removed from favorites.', 'success');
      }
    });
  };

  return (
    <>
      <Helmet>
            <title>Favorites</title>
      </Helmet>
      <div className="favorite-page-container">
      
      <h1>Your Favorite Guests</h1>
      <div className="favorite-cards-container">
        {favorites.map((service) => (
          <div className="favorite-card" key={service._id}>
            <div className="favorite-image">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src={service.image}  
                alt={service.name}  
              />
            </div>
            <h3 className="favorite-name">{service.title}</h3>  
            <p className="favorite-description">{service.description}</p>  
            <span className="favorite-price">${service.price}</span> 
            <div className="favorite-buttons-container">
              <button className="remove-favorite-btn" onClick={() => handleRemoveFavorite(service._id)}>
                <FaRegHeart style={{ color: "red", marginRight: "8px" }} /> 
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default Favorites;