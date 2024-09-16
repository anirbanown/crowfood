import React, { useEffect } from "react";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certi } from "../Images";
const Distribution = () => {
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
    <div className="app__distribution">
      <div className="btns">
        <button class="btn-donate">Donate now 1</button>
        <button class="btn-donate">Donate now 2</button>
      </div>
      <div className="txt">
        <h1>Achieve Milestones and Get Certified</h1></div>
      <div className="certi">
        <img src={certi} alt="" />
      </div>
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">

          <div className="distribution__text">
            <h1>Gamified Learning On Phone Also</h1>
            <p>
              We are Launching Our Android Application To let Users Enjoy and Learn Anytime & Anywhere. As The Access of Constitution & Laws is very important and Needs to be known anytime anywhere.
            </p>
          </div>
          <div className="distribution__buttons">
            <button>
              <BsApple />
              Download App
            </button>
            <button>
              <IoLogoGooglePlaystore />
              Download App
            </button>
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
