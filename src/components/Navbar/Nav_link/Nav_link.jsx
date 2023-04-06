import React from 'react'
import classes from './Nav_link.module.css'
import {Link } from "react-router-dom";

const Nav_link = (props) => {
  return (
    <Link className={classes.nav_link} to={props.week_ref}>{props.nav_link}</Link>
  )
}

export default Nav_link