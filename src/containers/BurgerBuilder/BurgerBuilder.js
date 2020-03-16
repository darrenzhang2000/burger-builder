import React from 'react'
import  Aux from '../../hoc/auxillary'
import Burger from '../../components/Burger/Burger'

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
            <div>burger builder: modifies burger pic</div>
        </Aux>
    }
}

export default BurgerBuilder