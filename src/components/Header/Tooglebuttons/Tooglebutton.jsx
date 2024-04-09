import React from 'react'
import './tooglebutton.scss'
import { GiHamburgerMenu } from "react-icons/gi";

const Tooglebutton = ({setOpen}) => {
  return (
    <button className='btn' onClick={() => setOpen((prev) => !prev)}><GiHamburgerMenu/></button>
  )
}

export default Tooglebutton