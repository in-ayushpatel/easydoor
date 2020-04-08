import React, { Component } from 'react'
import {Products,Info} from './Data/Data'

const DataContext = React.createContext();

class DataProvider extends Component {

    state={
        Products:[],
        Info:Info,
        cart: [],
        cartSubTotal: 0,
        cartTotal: 0
    }

    // THIS IS TO COPY DATA (not to take refrence)

    componentDidMount() {
        this.setProduct();
    }
    setProduct = () => {
        let tempproducts = [];
        Products.forEach(item => {
            const singleItem = { ...item };
            tempproducts = [...tempproducts, singleItem];
        });
        this.setState(() => {
            return { Products:tempproducts  };
        });
    };

    getItem = (id) =>{
        const Product =this.state.Products.find(item => item.id === id);
        return Product;
    }

    handleInfo =(id)=> {
        const product = this.getItem(id);
        this.setState( () =>{
            return {Info:product};
        })
    }

    addToCart =(id)=> {
        let tempProduct = [...this.state.Products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
          () => {
            return { products: tempProduct, cart: [...this.state.cart, product] };
          }
        )
    }

    // For Cart (NOT YET MADE)

    increment =(id)=>{

    }

    decrement =(id)=>{

    }

    removeItem =(id)=>{

    }

    clearCart = (id) => {

    }


    render() {
        return (
            <DataContext.Provider value={{
                ...this.state,
                handleInfo:this.handleInfo,
                // functions to be used in cart
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart

            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer;

export {DataProvider, DataConsumer};
