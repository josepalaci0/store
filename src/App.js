import './App.css';
import React,{useState} from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Login from './components/Login';
import Shop from './components/Shop';
import Products from './components/products';

function App() {
  const [active, setActive] = useState("");
  var id = `id`;
  return (
    <div className="App">

      <header className="header">
        <div className="navigation">
          <div className="container">
            <nav className="nav">
              <div className="nav__hamburger">
              <i className="fas fa-bars" onClick={() => setActive("active")} ></i>
              </div>

              <div className="nav__logo">
                <div className="scroll-link">
                Ecommerce Gold
                </div>
              </div>

              <div className={`nav__menu ${active}`}>
                <div className="menu__top">
                  <span className="nav__category">Ecommerce Gold</span>
                  <div className="close__toggle">
                  <i className="fas fa-times-circle" onClick={() => setActive("")} ></i>
                  </div>
                </div>
                
      
      
      
                <ul className="nav__list">
                  <li className="nav__item">
                    <div className="nav__link"><NavLink to={`/shop/:id`}>Home</NavLink></div>
                  </li>
                  <li className="nav__item">
                    <div className="nav__link"><NavLink to={`/products/:add_to_cart`}>Products</NavLink></div>
                  </li>
                  <li className="nav__item">
                    <div  className="nav__link"><NavLink to={`/cart/${id}/remove-item`}>Cart</NavLink></div>
                  </li>
                  <li className="nav__item">
                    <div  className="nav__link"><NavLink to={`/login/`}>Login</NavLink></div>
                  </li>
                </ul>
              </div>

              

              <div className="nav__icons">
                <div className="icon__item">
                <i className="fas fa-user"></i>
                </div>

                <div className="icon__item">
                <i className="fas fa-search"></i>
                </div>

                <div className="icon__item">
                <i className="fas fa-shopping-cart"></i>
                  <span id="cart__total">0</span>
                </div>
              </div>
            </nav>
          </div>
        </div>        
      </header>




      


      <Switch>
        <Route path={`/login/`} exact component={Login} />
        <Route path={`/shop/:id`} exact component={Shop} />
        <Route path={`/products/:add_to_cart`} exact component={Products} />
        <Route path={`/cart/${id}/remove-item`} exact component={Products} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
