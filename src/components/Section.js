import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import { Route } from "react-router-dom"

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product/:id" component={Details} exact />
            </section>
        )
    }
}

export default Section
