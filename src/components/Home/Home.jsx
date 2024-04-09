import React from 'react';
import './home.scss';
import { motion } from 'framer-motion';
import {TypeAnimation} from 'react-type-animation'

const img = require('../../assets/images/hero.png');
const img1 = require('../../assets/images/scroll.png');


const Home = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1, 
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
  };


  const sliderVariants = {
    initial: {
      x: -500,
      
    },
    animate: {
      x: "-220%",
      transition: {
       repeat:Infinity,
       repeatType:"mirror",
       duration: 20,
    
      },
    },
   
  };

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>

        <motion.h2 variants={textVariants}>Hello Everyone.</motion.h2>
          <motion.h1 variants={textVariants}><TypeAnimation sequence={[
            "I'm Raunak",
            2000,
           "I'm A Web Dev",
           2000,
           "I'm A Full Stack Developer",
           2000,
           
          ]} speed={50} repeat={Infinity}/></motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants}  animate={"scrollButton"} src={img1} alt='' />
        </motion.div>
      </div>
      <motion.div className='slidingTextContainer' variants={sliderVariants} initial={"initial"} animate='animate' >writer Context Creator Influencer</motion.div>
      <div className='image-container'>
        {/* <img  src={img} alt='' /> */}
      </div>
    </div>
  );
};

export default Home;
