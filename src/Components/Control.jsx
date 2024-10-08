import React, { useEffect } from "react";
import { controls } from "../Data/dummy";
import "../Styles/control.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
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

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Bored? Lets Play Some Games</h1>
          <p>
            Memory Card Game or Spinning Wheel Game or Play to earn WEB 3 game? <br/>What Do You Wanna Play Today ! <br/>Using augmented reality, gamified learning, AI-driven personalized paths, and blockchain for credentials, we transform traditional constitutional education into a dynamic and interactive experience.
          </p>
          {/* <button>Start 14 days trial</button> */}
        </div>
          <div className="head text-center flex justify-center text-4xl font-semibold">Choose Your Game :</div>
        <div className="control__content">
          {controls.map((control, index) => (
            <a href={control.link}>
              <div className="control transition-all cursor-pointer hover:scale-105 hover:shadow-purple-700 shadow-xl shadow-blue-700 ring-4" key={index}>
                <div className="control__icon text-2xl">
                  <control.icon />
                </div>

                <div className="control__text__content">
                  <p>{control.name}</p>
                  <span>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, quos. */}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
