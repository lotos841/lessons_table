import React from 'react'
import classes from './Navbar.module.css'
import Nav_link from './Nav_link/Nav_link'

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
        <Nav_link nav_link="Пн" week_ref="/lessons"/>
        <Nav_link nav_link="Вт" week_ref="/lessons"/>
        <Nav_link nav_link="Ср" week_ref="/lessons"/>
        <Nav_link nav_link="Чт" week_ref="/lessons"/>
        <Nav_link nav_link="Пт" week_ref="/lessons"/>
        <Nav_link nav_link="Сб" week_ref="/lessons"/>
    </div>
  )
}

export default Navbar