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
        <p>
            Current Price: <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                add={() => props.add(control.type)}
                remove={() => props.remove(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            onClick={props.ordered}
            disabled={!props.purchasable}
        >
            ORDER NOW
        </button>
    </div>
)

export default BuildControls
