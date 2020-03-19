import React from "react"
import Aux from "../../../hoc/auxillary"
const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingr => {
        return (
            <li key={ingr}>
                <span style={{ textTransform: "capitalize" }}>{ingr}</span>:{" "}
                {props.ingredients[ingr]}
            </li>
        )
    })

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>Ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <button onClick={props.clicked}>Cancel</button>
            <button onClick={props.clicked}>Continue</button>
        </Aux>
    )
}

export default OrderSummary
