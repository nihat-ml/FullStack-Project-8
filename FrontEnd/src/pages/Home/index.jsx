import React from 'react'
import ServicesPage from '../ServicesPage'
import Hero from '../../components/Hero'
import AboutUs from '../../components/AboutUs'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
            <title>Home</title>
      </Helmet>
    <Hero/>
    <AboutUs/>
     <ServicesPage/> 
    </>
  )
}

export default Home
