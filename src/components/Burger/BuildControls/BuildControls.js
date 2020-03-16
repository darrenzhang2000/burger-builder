import React from 'react'
import BuildControl from './BuildControl/BuildControl'

/*
Burgerbuild should pass down ingredients to Buildcontrols
ingredients = {
    meat: 1,
    salad: 5,
    cheese: 1
}
*/
const BuildControls = (props) =>{
    return Object.keys(props.ingredients).map(ingredient =>
        <BuildControl label={ingredient}/>
        )
}

export default BuildControls