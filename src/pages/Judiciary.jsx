import React, { useEffect } from 'react'
import "../Styles/home.scss";
import '../Styles/executive.scss'

import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineFontSize } from "react-icons/ai";
import { constitution } from "../Images";

const Judiciary=()=> {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    const list = {
      hidden: { opacity: 0 },
      vissible: { opacity: 1 },
    };
  
    const item = {
      vissible: {
        opacity: 1,
        x: 0,
      },
      hidden: {
        opacity: 0,
        x: "-50%",
      },
    };
  
    useEffect(() => {
      if (inView) {
        control.start("vissible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  

  return (
    <div> <div className="primary-bg-section bg-ht"></div>
    <div className="app__home1 flex flex-col h-max" id="home">
      
      <div className="top-container h-screen">
      <motion.div
            initial="hidden"
            animate={control}
            variants={list}
            ref={ref}
            className="home__text" >
            <motion.h1 variants={item} className="">Judiciary</motion.h1>
            <h3>Your gateway to understanding and engaging with the Constitution of India in an interactive and enjoyable way</h3>
          </motion.div>
      </div>
      <div className='h-screen'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae officia laborum sit aut praesentium dolorum repellendus facere velit laudantium odio modi dolore, fuga, itaque perspiciatis! Nisi molestiae maxime ratione doloremque!
        Culpa eos harum debitis tempore minima, iusto odio incidunt atque nobis ducimus, molestiae blanditiis alias pariatur excepturi, molestias magnam voluptatum! Necessitatibus soluta expedita doloribus saepe hic a, explicabo commodi! Dignissimos.
      </div>
      
    </div>
    </div>
  )
}

export default Judiciary