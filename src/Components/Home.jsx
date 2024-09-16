import React from "react";
import "../Styles/home.scss";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AiOutlineFontSize } from "react-icons/ai";
import { constitution } from "../Images";
const Home = () => {
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
    <div className="app__home" id="home">
      <div className="top-container">
        <div className="Left container">
        <motion.div
        initial="hidden"
        animate={control}
        variants={list}
        ref={ref}
        className="home__text"
      >
        <motion.h1 variants={item}>Sansthaein Aur Samvidhan</motion.h1>
        {/* <motion.h1 variants={item}>More Powerfull</motion.h1> */}
        <h3>Hello I'm Sansthaein</h3>
      </motion.div>
        </div>
        <div className="right container">
        <img src={constitution} alt="" />
        </div>
      </div> 
    </div>
  );
};

export default Home;
