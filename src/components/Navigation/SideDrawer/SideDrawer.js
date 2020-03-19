import React from "react"
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'

const SideDrawer = props => {
    // Here, we want to add different classes depending on what we want to do. There should be a class for sliding the sideDrawer in and one for sliding the sideDrawer out.
    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer
