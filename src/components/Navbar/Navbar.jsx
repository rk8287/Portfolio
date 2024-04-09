import React from 'react'
import './navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../Header/Sidebar'

const facebook = require('../../assets/images/facebook.png')
const instagram = require('../../assets/images/instagram.png')
const dribble = require('../../assets/images/dribbble.png')
const youtube = require('../../assets/images/youtube.png')

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wraper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity:1, scale: 1}}
            transition={{duration:0.5}}

            >Raunak Portfolio</motion.span>

            <div className="social">
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={dribble} alt="" /></a>
                <a href=""><img src={youtube} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar