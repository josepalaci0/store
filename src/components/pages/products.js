import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { useHistory } from 'react-router-dom';



const Products = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const history = useHistory();
  const Configtokens = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
  });

  useEffect(() => {
    axios.get("https://ecommerce-exercise-backend.herokuapp.com/products/", Configtokens())
      .then(res => setProducts(res.data))
  }, []);
  const DetailsProduct =() =>{
    if(selected!==""){
      history.push(`/products/details/${selected}`)
    }
  }
  
  return (
    <div>
      <section className="section latest__products" id="latest">

        <div className="container__producto" data-aos="fade-up" data-aos-duration="1200">
          {products.map(res => (<div className="product" key={res.id}>
            <div className="product__header">
              <img src={res.images[2].url} alt="" />
            </div>
            <div className="product__footer">
              <h3>{res.name}</h3>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="product__price">
                <h4>${res.price}</h4>
              </div>
              <a><button type="submit" className="product__btn">Add To Cart</button></a>
            </div>
            <ul>
              <li>
                <a data-tip="Quick View" data-place="left" onClick={() => setSelected(res.id)}>
                <i class="fas fa-info-circle"></i>
                {DetailsProduct()}               
                </a>
              </li>
              <li>
                <a data-tip="Add To Wishlist" data-place="left" href="#">
                <i class="far fa-heart"></i>
                </a>
              </li>
              <li>
                <a data-tip="Add To Compare" data-place="left" href="#">
                <i class="fas fa-sync-alt"></i>
                </a>
              </li>
            </ul>
          </div>))

          }
        </div>
      </section>

      

    </div>);
};

export default Products;
