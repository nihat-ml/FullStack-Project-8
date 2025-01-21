import React, { createContext, useState, useContext } from 'react';


const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (guest) => {
    if (!favorites.some(fav => fav._id === guest._id)) {
      setFavorites((prevFavorites) => [...prevFavorites, guest]);
    } else {
      alert("This guest is already in your favorites.");
    }
  };

 
  const removeFavorite = (guestId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((guest) => guest._id !== guestId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorites = () => {
  return useContext(FavoritesContext);
};