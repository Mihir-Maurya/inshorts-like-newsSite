import React from 'react'
import './Navbar.css'
import HamburgerDrawer from './HamburgerDrawer'
const Navbar = ({setCategory}) => {
  return (
    <div className='nav '>
        <div className="logo">
          <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img
        style={{cursor:"pointer"}}
        src="https://images.hasgeek.com/embed/file/a306f3dd0f1740a0b80944fd30a5dd61" height='80%' alt="icon"/>
    </div>
  )
}

export default Navbar