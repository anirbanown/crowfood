import React, { useEffect } from 'react'
import "../Styles/home.scss";
import '../Styles/executive.scss'

import { JudiciaryData } from './data';

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
    <div>
      {" "}
      <div className="primary-bg-section bg-ht"></div>
      <div className="app__home1 flex flex-col h-max" id="home">
        <div className="top-container h-screen">
          <motion.div
            initial="hidden"
            animate={control}
            variants={list}
            ref={ref}
            className="home__text"
          >
            <motion.h1 variants={item} className="">
              Judiciary
            </motion.h1>
            <h3>
              Your gateway to understanding and engaging with the Constitution
              of India in an interactive and enjoyable way
            </h3>
          </motion.div>
        </div>
        <div className="h-max">
          {JudiciaryData.map((article) => (
            <div className="article">
              <h2 className=" text-5xl mb-4">{article.heading}</h2>
              <p className="text-lg">
                {article.info}
              </p>
              <h3 className="text-3xl mb-1 mt-8">Overview</h3>
              <p>
                {article.overview}
               
              </p>
              <h3 className="text-3xl mb-1 mt-8">Key Points</h3>
              {article.keypoints.map((point) => (
                <div className="keypoint">
                  <h4 className="text-2xl ml-4 my-1">{point.id}. {point.h4}</h4>
                  {point.subpoints.map((points) => (
                    <p className="ml-9">
                      <span className="font-bold">{points.head}:</span>{" "}
                      {points.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Judiciary