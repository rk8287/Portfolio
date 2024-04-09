import React from 'react';
import {motion} from 'framer-motion'
import './link.scss';

const Links = () => {

 
  const items = ["Home", "Services", "Portfolio", "Contact", "About"];

  return (
    <div className='links'>
      {items.map((item) => (
        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href={`#/${item}`} key={item}>{item}</motion.a>
      ))}
    </div>
  );
};

export default Links;
