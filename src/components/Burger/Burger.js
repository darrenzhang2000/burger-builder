import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient'

const Burger = (props) =>{
    return <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        <BurgerIngredient type='cheese'/>
        <BurgerIngredient type='salad'/>
        <BurgerIngredient type='meat'/>
        <BurgerIngredient type='bread-bottom'/>
    </div>
}

export default Burger