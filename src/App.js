import React, { Component } from "react"
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <p>Test</p>
                    <BurgerBuilder/>
                </Layout>
                <p>Hi</p>
            </div>
        )
    }
}

export default App
