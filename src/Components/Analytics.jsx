import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { analytics } from "../Data/dummy";
import { onephone } from "../Images";
import "../Styles/analytics.scss";

const Analytics = () => {
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
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1>What are the Institutions in Constitution?</h1>
            <p>
            The Constitution of India is the supreme law of our country, establishing the framework for governance and the fundamental rights and duties of its citizens. It lays down the structure and powers of the three main organs of government: the Legislature, the Executive, and the Judiciary.
            </p>
            <p>
              Click Below To Start Exploring :
            </p>
          </div>
          <div className="left__analytics__container">
            {analytics.map((analytic, index) => (
              <div className="analytic__container" key={index}>
                <div className="analytics__icon">{analytic.desc}</div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src={onephone} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
