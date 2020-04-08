import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Header/Navbar';
import Productlist from './component/Home/ProductList';
import Iteminfo from './component/Iteminfo/Iteminfo';
import Cart from './component/Cart/Cart';
import Footer from './component/Footer/Footer';




class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/Iteminfo" component={Iteminfo} />
          <Route path="/Cart" component={Cart} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
