import React from "react"
import Aux from "../../../hoc/auxillary"
import Button from "../../UI/Button/Button"

const OrderSummary = props => {
    // constructor(props){
    //     super(props)
    //     this.buttonRef = React.createRef()
    // }

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
            <p><strong>Price: {props.price}</strong></p>
            <p>Ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
}

export default OrderSummary

