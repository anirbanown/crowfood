import React, { useEffect } from "react";
import { feature } from "../Images";
import { features } from "../Data/dummy";
import { TiTick } from "react-icons/ti";
import "../Styles/feature.scss";
import Control from "./Control";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Feature = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <div className="app__feature">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="feature__container"
      >
        <motion.div variants={item1} className="left__feature">
          <img src={feature} alt="" draggable={false} />
        </motion.div>
        <motion.div variants={item2} className="right__feature">
          <div className="right__text">
            <h1>
              Features To Let you <br /> Play & Learn
            </h1>
            <p>
            Sansthaein Aur Samvidhan, your gateway to understanding and engaging with the Constitution of India in an interactive and enjoyable way. Our platform aims to simplify and gamify constitutional literacy, making it accessible and relevant to everyone.
            </p>
          </div>
          <div className="feature__content">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <TiTick />
                <div className="feature__text">
                  <p>{feature}</p>
                  <span>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, eos. */}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Control />
    </div>
  );
};

export default Feature;
