import React, { Component } from 'react'
import {Link} from 'react-router-dom';


import './Items.css'
import { DataConsumer } from '../Context';

class Items extends Component {
    render() {
        const {id, title, img ,price, inCart} = this.props.Item;
        return (
            <DataConsumer>
                {(value)=> {
                    return(
                        <div className="card">
                            <Link to="/Iteminfo" 
                            className="linktoinfo"
                            onClick={() => value.handleInfo(id)}
                            >
                            <div className="in-card">
                                <img src={img} alt={title} className="img"></img>
                                <h3>{title}</h3>
                                <h3>₹ {price}</h3>
                            </div>
                            </Link>
                            <div className="for-btn">
                                <button className="cart-btn" 
                                disabled = {inCart ? true : false} 
                                onClick={() => value.addToCart(id)}
                                >
                                    {inCart ? <span>In your Cart</span> : <span>Add to Cart</span> }
                                </button>
                            </div>
                        </div>
                    )
                }}
            </DataConsumer>
        )
    }
}


export default Items
