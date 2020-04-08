import React, { Component } from 'react';
import './ProductList.css'
import {DataConsumer} from '../Context';
import Items from '../Item/Items'

class Productlist extends Component {
    render() {
        return (
            <div className="wrapper">
                <DataConsumer>
                    {(value)=>{
                        return value.Products.map(Item =>{
                            return <Items key={Item.id} Item={Item} />
                        })
                    }}
                </DataConsumer>
            </div> 
        )
    }
}

export default Productlist;
