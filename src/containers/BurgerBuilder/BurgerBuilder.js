import React from "react"
import Aux from "../../hoc/auxillary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary.js/OrderSummary"

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        price: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = ingredients => {
        let sum = Object.keys(ingredients)
            .map(ingr => {
                return this.state.ingredients[ingr]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        console.log("Pitaya", sum)
        this.setState({ purchasable: sum > 0 })
        console.log("persimmon", this.state.purchasable)
    }

    addIngredientHandler = type => {
        let updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = this.state.ingredients[type] + 1

        let newPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({ price: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)
        console.log("Longan", this.state.price)
    }

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] > 0) {
            let updatedIngredients = { ...this.state.ingredients }
            updatedIngredients[type] = this.state.ingredients[type] - 1
            console.log(updatedIngredients[type], "mulberries")

            let newPrice = this.state.price - INGREDIENT_PRICES[type]
            this.setState({ price: newPrice, ingredients: updatedIngredients })
            this.updatePurchaseState(updatedIngredients)
            console.log("Mangosteen")
        }
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
        console.log("Pitanga")
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
        console.log("Plantain")
    }

    purchaseContinueHandler = () => {
        alert("continue")
    }

    render() {
        let disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = this.state.ingredients[key] <= 0
        }
        console.log("nectarine", disabledInfo)
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary
                        price={this.state.price}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        clicked={this.purchaseCancelHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.price}
                    ingredients={this.state.ingredients}
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder
