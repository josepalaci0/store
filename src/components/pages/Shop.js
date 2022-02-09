import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ConfigTokens } from '../../utils'



const Shop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://ecommerce-exercise-backend.herokuapp.com/categories/", ConfigTokens())
      .then(res => setCategories(res.data))
  }, []);
  console.log(categories)
  return (<>
    <div className='header'>
      <div className="hero">
        <div className="glide" id="glide_1">
          <div className="glide__track" data-glide-el="track">
            
                  <div className="hero__left">
                    <span className="">New Inspiration 2020</span>
                    <h1 className="">PHONES MADE FOR YOU!</h1>
                    <p>Trending from mobile and headphone style collection</p>
                    <a><button className="hero__btn">SHOP NOW</button></a>
                  </div>
                  <div className="hero__right">
                    <div className="hero__img-container">
                      
                    </div>
                  </div>
                
          </div>


          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
              IMG STRIPER
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
              IMG SPRITER
            </button>
          </div>
        </div>
      </div>
    </div>

    <section className="section news" id="news">
      <div className="container">
      {categories.map(res => (<div className="new__card" key={res.id}>
                      <div className="card__header">
                        
                      </div>
                      <div className="card__footer" key={res.id}>
                        <h3>{res.name}</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a><button>Read More</button></a>
                      </div>

                    </div>))
                    
                  }
      </div>
    </section>


  </>
  );
};

export default Shop;
