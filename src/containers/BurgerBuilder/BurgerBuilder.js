import React from "react"
import Aux from "../../hoc/auxillary"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

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
        price: 0
    }

    addIngredientHandler = type => {
        let updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = this.state.ingredients[type] + 1

        let newPrice = this.state.price + INGREDIENT_PRICES[type]
        this.setState({ price: newPrice, ingredients: updatedIngredients })
        console.log('Longan', this.state.price)
    }

    removeIngredientHandler = type =>{
        if(this.state.ingredients[type] > 0){
            let updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = this.state.ingredients[type] - 1
            console.log(updatedIngredients[type], 'mulberries')
            
            let newPrice = this.state.price - INGREDIENT_PRICES[type]
            this.setState({ price: newPrice, ingredients: updatedIngredients})
            console.log('Mangosteen')
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder
