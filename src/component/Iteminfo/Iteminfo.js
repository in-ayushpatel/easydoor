import React, { Component } from 'react';
import {DataConsumer} from '../Context';
import {Link} from 'react-router-dom';
import './Iteminfo.css'

class Iteminfo extends Component {
    render() {
        return (
            <DataConsumer>
                {(value) => {
                    const {id, title, company, price, info, img, inCart} =value.Info;

                    return(
                        <div className="container">
                            <div className="image-area">
                                <img src={img} alt={title} className="img" />
                            </div>
                            <div className="InfoContainer">
                                <h1>{title}</h1>
                                <h3>By: {company}</h3>
                                <p><strong>Description: </strong>{info}</p>
                                <h2>Price: Rs. {price}</h2>
                                <div className="button-area">
                                <Link to="/">
                                    <div className="btn1">
                                        <button className="toHome">Back to Home</button>
                                    </div>
                                </Link>
                                <div className="btn2" >
                                    <button disabled={inCart ? true : false} className="toCart"
                                    onClick={() => value.addToCart(id)}
                                    >
                                        {inCart ? <span>IN CART</span> : <span>Add to Cart</span>}
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                }}
            </DataConsumer>
        )
    }
}

export default  Iteminfo;
