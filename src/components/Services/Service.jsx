import React, { useRef } from 'react'
import './service.scss'
import {motion, useInView} from 'framer-motion'

const pepole = require('../../assets/images/people.webp')


const Service = () => {

  const ref = useRef()

  const isInView = useInView(ref,{margin:'-100px'})

  const variants = {
    initial: {
      x:-500,
      y: 100,
      opacity: 0
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1,
        staggerChildren: 0.1,
      }
    }
  }
  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow <br/>
             and move forward</p>
             <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
 
           <div className="title">
            <img src={pepole} alt="" />
            <h1>
              <motion.b whileHover={{color:'orange'}}>Unique </motion.b> Ideas
            </h1>
           </div>

           <div className="title">
            <h1>
              <motion.b whileHover={{color:'orange'}}>For Your</motion.b> Websites.
            </h1>
            <button>WHAT WE DO?</button>
           </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <div className="box">
            <h2>Branding</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptates corporis omnis id quis, dolor magni,
             sit fugit veritatis exercitationem obcaecati recusandae
              repellat officia ex ratione aperiam vel 
              delectus reiciendis esse?
            </p>
            <button>Go</button>
          </div>

          <div className="box" >
            <h2>Branding</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptates corporis omnis id quis, dolor magni,
             sit fugit veritatis exercitationem obcaecati recusandae
              repellat officia ex ratione aperiam vel 
              delectus reiciendis esse?
            </p>
            <button>Go</button>
          </div>

          <div className="box">
            <h2>Branding</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptates corporis omnis id quis, dolor magni,
             sit fugit veritatis exercitationem obcaecati recusandae
              repellat officia ex ratione aperiam vel 
              delectus reiciendis esse?
            </p>
            <button>Go</button>
          </div>

          <div className="box">
            <h2>Branding</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptates corporis omnis id quis, dolor magni,
             sit fugit veritatis exercitationem obcaecati recusandae
              repellat officia ex ratione aperiam vel 
              delectus reiciendis esse?
            </p>
            <button>Go</button>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Service