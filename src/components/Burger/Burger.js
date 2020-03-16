import React from "react"
import classes from "./Burger.css"
import BurgerIngredient from "./Burgeringredient/Burgeringredient"

const Burger = props => {
    let ingredientsArr = Object.keys(props.ingredients).map(ingrKey => {
        return [...Array(props.ingredients[ingrKey])].map((_, i) => {
            return <BurgerIngredient type={ingrKey} key={ingrKey + i}/>
        })
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
