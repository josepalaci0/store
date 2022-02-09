import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Productdetails = (props) => {
    const [id, setid] = useState(props.match.params.id);
    const [detailproduct, setDetailproduct] = useState({})
    const [galery, setGalery] = useState("");
    const Configtokens = () => ({
        headers: { Authorization: `Bearer ${localStorage.getItem("login")}` }
    });

    useEffect(() => {
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, Configtokens())
            .then(res => setDetailproduct(res.data))
    }, []);
    console.log(detailproduct)

    return (
        <div>


            <main id="main">
                <div className="container">

                    <section className="section product-details__section">
                        <div className="product-detail__container">
                            <div className="product-detail__left">
                                <div className="details__container--left">
                                    <div className="product__pictures">
                                        <img src={galery} className="picture" />
                                        <div className='pictures__galery'>
                                            {detailproduct.images?.map((res) => (<div className="pictures__container" key={res.id}>
                                                <img src={res.url} className="picture" onClick={() => setGalery(res.url)} />
                                            </div>))
                                            }

                                        </div>



                                    </div>
                                    <div className="zoom" id="zoom"></div>
                                </div>

                                <div className="product-details__btn">
                                    <div className="add">
                                        <span>
                                            <svg>
                                                <i  className="fa-solid fa-cart-shopping"></i>
                                            </svg>
                                        </span>
                                        ADD TO CART</div>
                                    <div className="buy" >
                                        <span>
                                            <svg>
                                                <i  className="fa-solid fa-credit-card"></i>
                                            </svg>
                                        </span>
                                        BUY NOW
                                    </div>
                                </div>
                            </div>

                            <div className="product-detail__right">
                                <div className="product-detail__content">
                                    <h3>{detailproduct.category?.name }</h3>
                                    <div className="price">
                                        <span className="new__price">${detailproduct?.price}</span>
                                    </div>
                                    <div className="product__review">
                                        <div className="rating">

                                        </div>
                                        <div className="rating__quatity">3 reviews</div>
                                    </div>
                                    <p>
                                        {detailproduct.description}
                                    </p>
                                    <div className="product__info-container">
                                        <ul className="product__info">
                                  
                                            <li>

                                                <div className="input-counter">
                                                    <span>Quantity:</span>
                                                    <div>
                                                        <span className="minus-btn">
                                                        <i  className="fa-solid fa-minus"></i>
                                                        </span>
                                                        <input type="text" min="1"  max="10" className="counter-btn" />
                                                        <span className="minus-btn">
                                                        <i  className="fa-solid fa-plus"></i>
                                                        </span>
                                                        
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <span>Subtotal:</span>
                                                <div className="new__price">$250.99</div>
                                            </li>
                                            <li>
                                                <span>Brand:</span>
                                                <div>Apple</div>
                                            </li>
                                            <li>
                                                <span>Product Type:</span>
                                                <div>Phone</div>
                                            </li>
                                            <li>
                                                <span>Availability:</span>
                                                <div className="in-stock">In Stock (7 Items)</div>
                                            </li>
                                        </ul>
                                        <div className="product-info__btn">
                                            <div >
                                                <span>

                                                </span>&nbsp;
                                                SIZE GUIDE
                                            </div>
                                            <div>
                                                <span>

                                                </span>&nbsp;
                                                SHIPPING
                                            </div>
                                            <div>
                                                <span>
                                                    &nbsp;
                                                </span>
                                                ASK ABOUT THIS PRODUCT
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-detail__bottom">
                            <div className="title__container tabs">

                                <div className="section__titles category__titles ">
                                    <div className="section__title detail-btn active" data-id="description">
                                        <span className="dot"></span>
                                        <h1 className="primary__title">Description</h1>
                                    </div>
                                </div>

                                <div className="section__titles">
                                    <div className="section__title detail-btn" data-id="reviews">
                                        <span className="dot"></span>
                                        <h1 className="primary__title">Reviews</h1>
                                    </div>
                                </div>

                                <div className="section__titles">
                                    <div className="section__title detail-btn" data-id="shipping">
                                        <span className="dot"></span>
                                        <h1 className="primary__title">Shipping Details</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="detail__content">
                                <div className="content active" id="description">
                                    <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                                        dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
                                        commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                                    </p>
                                    <h2>Sample Unordered List</h2>


                                </div>
                                <div className="content" id="reviews">
                                    <h1>Customer Reviews</h1>
                                    <div className="rating">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="section related__products">
                        <div className="title__container">
                            <div className="section__title filter-btn active">
                                <span className=" dot"></span>
                                <h1 className="primary__title">Related Products</h1>
                            </div>
                        </div>
                        <div className="container" data-aos="fade-up" data-aos-duration="1200">
                            <div className="glide" id="glide_3">
                                <div className="glide__track" data-glide-el="track">
                                    <ul className="glide__slides latest-center">
                                        <li className="glide__slide">
                                            <div className="product">
                                                <div className="product__header">

                                                </div>
                                                <div className="product__footer">
                                                    <h3>Samsung Galaxy</h3>
                                                    <div className="rating">

                                                    </div>
                                                    <div className="product__price">
                                                        <h4>$900</h4>
                                                    </div>
                                                    <div><button type="submit" className="product__btn">Add To Cart</button></div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div data-tip="Quick View" data-place="left">

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div data-tip="Add To Wishlist" data-place="left">

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div data-tip="Add To Compare" data-place="left">

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="glide__arrows" data-glide-el="controls">
                                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">

                                    </button>
                                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">

                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </main>



        </div>


    );
}

export default Productdetails;
