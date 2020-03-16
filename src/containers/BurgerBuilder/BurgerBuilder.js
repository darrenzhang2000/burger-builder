import React from 'react'
import  Aux from '../../hoc/auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends React.Component{
    state = {
        ingredients: {
            'meat': 1,
            'salad': 5,
            'cheese': 1,
            'bacon': 1
        }
    }
    render(){
        return <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredients={this.state.ingredients}/>
        </Aux>
    }
}

export default BurgerBuilder