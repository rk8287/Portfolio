import React, { useRef } from 'react';
import './parallex.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const planet = require('../../assets/images/planets.png')
const sun = require('../../assets/images/sun.png')

const Parallex = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  
  return (
    <div className='parallex' ref={ref} style={{background:type ==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)": "linear-gradient(180deg, #111132, #505064)"}}>

      <div className="centered-content">
        <motion.h1 style={{ y: yText }}>
          {type === 'services' ? "What We do?" : "What We did"}
        </motion.h1>
      </div>
      
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg, backgroundImage: `url(${type==="services" ? sun: planet})` }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallex;
