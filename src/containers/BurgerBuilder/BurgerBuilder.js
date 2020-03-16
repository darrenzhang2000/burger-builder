import React from 'react'
import  Aux from '../../hoc/auxillary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component{
    render(){
        return <Aux>
            <Burger/>
            <div>burger builder: modifies burger pic</div>
        </Aux>
    }
}

export default BurgerBuilder