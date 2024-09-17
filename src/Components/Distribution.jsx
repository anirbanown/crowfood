import React, { useEffect } from "react";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certi } from "../Images";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true,     // Whether animation should happen only once
    });
  }, []);

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };
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
        <button class="btn-donate" data-aos="fade-right">Quiz Time !</button>
        <a href="https://sansthaein-aur-samvidhan-analytics.vercel.app/">
        <button class="btn-donate" data-aos="fade-left">Progress Analytics</button>
        </a>
      </div>
      <div className="txt">
        <h1>Achieve Milestones and Get Certified</h1></div>
      <div className="certi">
      <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
    >
        <img src={certi} alt="" /></motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container mt-32"
      >
        <motion.div variants={item1} className="left__distribution">

          <div className="distribution__text">
            <h1>Experience 3D Animations & Virtual Reality</h1>
            <p>
              Get Exclusive AR / VR experience on Our Android Application to Understand Constitution in a better way with Flow Charts, Animations and Lot More of a Gamified Experience            </p>
          </div>
          {/* <div className="distribution__buttons text-black">
            <button>
              <BsApple />
              Download App
            </button>
            <button>
              <IoLogoGooglePlaystore />
              Download App
            </button>
          </div> */}
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
