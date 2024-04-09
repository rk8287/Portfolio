import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';

const webImg = require('../../assets/images/Screenshot 2024-04-07 152510.png')

const items = [
  {
    id: 1,
    title: "React Commerce",
    image: webImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum, eum quaerat nihil quisquam vitae ipsam amet culpa eos itaque adipisci laboriosam commodi iusto magni, voluptatum fuga quo qui obcaecati"
  },
  {
    id: 2,
    title: "Hunger Burger",
    image: webImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum, eum quaerat nihil quisquam vitae ipsam amet culpa eos itaque adipisci laboriosam commodi iusto magni, voluptatum fuga quo qui obcaecati"
  },
  {
    id: 3,
    title: "Course Bundler",
    image: webImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum, eum quaerat nihil quisquam vitae ipsam amet culpa eos itaque adipisci laboriosam commodi iusto magni, voluptatum fuga quo qui obcaecati"
  },
  {
    id: 4,
    title: "Tick Tack Game",
    image: webImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum, eum quaerat nihil quisquam vitae ipsam amet culpa eos itaque adipisci laboriosam commodi iusto magni, voluptatum fuga quo qui obcaecati"
  },
];

const Single = ({ item }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
   
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="texContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
     
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio;
