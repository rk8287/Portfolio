import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './about.css';
import { BiSolidMedal } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";

const image = require('../../assets/images/personalPic.jpg');
const js = require('../../assets/images/js.png');
const redux = require('../../assets/images/redux.png');
const express = require('../../assets/images/express.png');
const mongo = require('../../assets/images/mongodb.png');
const tail = require('../../assets/images/tailwind.png');


const node = require('../../assets/images/node-js.png');
const react = require('../../assets/images/react.png');

const images = [mongo, express, react, node, express, redux, js,tail];

const About = () => {
  return (
    <div className='main-about'>
      <div className="header">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="left">
          <div className="about-image">
            <img className='aboutImg' src={image} alt="" />
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <div className="first">
              <div className="icon">
                <BiSolidMedal />
              </div>
              <div className="otherexpre"><h2>Experience</h2></div>
              <div className="experience">1+ Years</div>

              <div className="role">
                <h3>Full Stack Developer MERN </h3>
              </div>
            </div>

            <div className="first">
              <div className="icon">
                <FaUserGraduate />
              </div>
              <div className="otherexpre"><h2>Education</h2></div>
              <div className="experience">B.C.A. Bachelors Degree</div>

              <div className="role">
                <h3>Amrita University</h3>
              </div>
            </div>

          </div>

          <div className="more-detials">
            🚀 Aspiring Software Developer | Full Stack Developer Passionate about
            Streamlining Operations and Enhancing User Experiences 💪 Actively Seeking
            Internships & Growth Opportunities to further hone my skills
            and contribute to innovative projects. Let's Connect and create
            something amazing together! 🌟
        </div>

          <div className="technologies">
            {images.map((img, index) => (
              <motion.div 
                className="techhh" 
                key={index} 
                style={{ animationDelay: `${index * 0.5}s` }}
                whileInView={{ scale: 1.2, transition: { duration: 0.5 } }} 
              >
                <img className="tech" src={img} alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
