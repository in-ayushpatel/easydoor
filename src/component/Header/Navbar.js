import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'


class Navbar extends Component {
  render () {
    return (
      <div className="ayush">
        <header>
            <nav className="nav-bar" >
              <div>
                  <NavLink to="/" className="navlinks"><h1>easydoor</h1></NavLink>
              </div>
              {/* <div>
                  <input type="search" name="" id="search-bar" placeholder="Search" />
              </div> */}
              <div>
                  {/* <NavLink to="/profile" className="navlinks"><button id="login-but">Profile</button></NavLink> */}
                  <NavLink to="/cart" className="navlinks"><button id="cart-but">Cart</button> </NavLink>
              </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default  Navbar;