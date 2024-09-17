import React from 'react'
import {
    Analytics,
    DashboardPreview,
    Distribution,
    Feature,
    Footer,
    Home,
    Navbar,
    STTop,
  } from "../Components";

const Homepage=() =>{
  return (
   <>
    <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      
   </>
  )
}

export default Homepage