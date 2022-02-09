import React from 'react';

const Cart = (props) => {

  return (
    <div>
      <section  className="section cart__area">
        <div  className="container">
          <div  className="responsive__cart-area">
            <form  className="cart__form">
              <div  className="cart__table table-responsive">
                <table width="100%"  className="table">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>NAME</th>
                      <th>UNIT PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  className="product__thumbnail">
                        <a>
                          <img src="" alt="" />
                        </a>
                      </td>
                      <td  className="product__name">
                        <a>Apple iPhone 11</a>
                        <small>White/6.25</small>
                      </td>
                      <td  className="product__price">
                        <div  className="price">
                          <span  className="new__price">$250.99</span>
                        </div>
                      </td>
                      <td  className="product__quantity">
                        <div  className="input-counter">
                          <div>
                            <span  className="minus-btn">
                              <svg>

                              </svg>
                            </span>
                            <input type="text" min="1" max="10"  className="counter-btn" />
                            <span  className="plus-btn">
                              <svg>

                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td  className="product__subtotal">
                        <div  className="price">
                          <span  className="new__price">$250.99</span>
                        </div>
                        <a  className="remove__cart-item">
                          <svg>

                          </svg>
                        </a>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>)
};

export default Cart;

