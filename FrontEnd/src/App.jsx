import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routers/router'

import './App.css'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <FavoritesProvider>
      <RouterProvider router={router}/>
    </FavoritesProvider>
  )
}

export default App
