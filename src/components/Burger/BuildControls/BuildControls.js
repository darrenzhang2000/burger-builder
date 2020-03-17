import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.css"
/*
Burgerbuild should pass down ingredients to Buildcontrols
ingredients = {
    meat: 1,
    salad: 5,
    cheese: 1
}
*/
const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

// const BuildControls = (props) =>{
//     return Object.keys(props.ingredients).map(ingredient =>
//         <BuildControl label={ingredient}/>
//         )
// }

const BuildControls = props => (
    <div className={classes.buildControls}>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                add={() => props.add(control.type)}
            />
        ))}
    </div>
)

export default BuildControls
