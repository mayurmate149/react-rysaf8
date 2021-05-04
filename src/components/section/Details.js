import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import Capacities from './Capacity';


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        return (
            <>
                <Link className="back-btn" to="/">back </Link>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <Capacities capacities={item.capacity}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <button className="continue" disabled="true">
                                    Continue
                                </button>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
