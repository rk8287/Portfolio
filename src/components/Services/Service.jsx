import React, { useRef } from 'react';
import './service.scss';
import { motion } from 'framer-motion';

const pepole = require('../../assets/images/people.webp');

const Service = () => {
  const ref = useRef();

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const isMobile = window.innerWidth <= 768; 

  return (
    <motion.div
      className='services'
      variants={isMobile ? null : variants}
      initial={isMobile ? null : 'initial'}
      ref={ref}
      whileInView={isMobile ? null : 'animate'}
    >
      <div className='textContainer'>
        <p>I focus on helping your brand grow and move forward</p>
        <hr />
      </div>
      <div className='titleContainer'>
        <div className='title'>
          <img src={pepole} alt='' />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <b>For Your</b> Websites.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </div>
      <div className='listContainer'>
        <div className='box'>
          <h2>Full Stack Websites</h2>
          <p>
            From front-end design to back-end functionality, I specialize in crafting dynamic full
            stack websites that seamlessly integrate user experience with robust technology.
            Whether you need a sleek user interface or a powerful database management system, I
            have the expertise to bring your vision to life.
          </p>
          <button>Explore Now</button>
        </div>
        <div className='box'>
          <h2>Optimization</h2>
          <p>
            Enhance your website's performance with advanced optimization techniques. From
            minimizing load times to optimizing code and images, I specialize in maximizing
            efficiency to ensure a seamless user experience. Let me help you elevate your
            website's performance and improve its overall effectiveness.
          </p>
          <button>Explore Now</button>
        </div>
        <div className='box'>
          <h2>Authentication</h2>
          <p>
            Elevate your application security with robust authentication solutions. From user
            login to OAuth integrations, I specialize in implementing authentication systems
            tailored to your needs. Protect your users' data and ensure seamless access control
            with my expertise in authentication protocols.
          </p>
          <button>Explore Now</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
