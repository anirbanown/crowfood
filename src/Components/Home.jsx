import React, { useEffect } from "react";
import "../Styles/home.scss";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
            <motion.h1 variants={item} className="">Sansthaein Aur Samvidhan</motion.h1>
            <h3>Your gateway to understanding and engaging with the Constitution of India in an interactive and enjoyable way</h3>
          </motion.div>
        </div>
        <div className="right container">
          {/* Add motion.div for the image to make it move */}
          <motion.img
            src={constitution}
            alt=""
            animate={{
              y: [0, -30, 0], // Move up by -20px and then back to 0
            }}
            transition={{
              duration: 3, // Adjust duration for slow movement
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Loop type
              ease: "easeInOut", // Smooth animation
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
