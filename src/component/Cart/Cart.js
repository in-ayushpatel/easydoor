import React, { Component } from 'react'
import { DataConsumer } from '../Context'
import './Cart.css'

class Cart extends Component {
    render() {
        return (
            <div>
                <DataConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                        return (
                            <div className="cont">
                            <h1>CART : </h1>
                            {/* here will be tha cart part */}
                            </div>
                        );
                        } else {
                            return (
                                <div className="cont">
                                    <h1>Empty Cart</h1>
                                    <p>Was not able to make in the time slot !</p>
                                </div>
                            );
                        }
                    }}
                </DataConsumer>
            </div>
        )
    }
}

export default Cart;
