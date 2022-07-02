import React from 'react';

const FCheckout = () => {
    return <>
        <section className="section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="checkout-area">
                            <div className="billing-area">
                                <form>
                                    <h2>Billing details</h2>
                                    <div className="billing-form">
                                        <ul className="billing-ul input-2">
                                            <li className="billing-li">
                                                <label>First name</label>
                                                <input type="text" name="f-name" placeholder="First name"/>
                                            </li>
                                            <li className="billing-li">
                                                <label>Last name</label>
                                                <input type="text" name="l-name" placeholder="Last name"/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Company name (Optional)</label>
                                                <input type="text" name="company details" placeholder="Company name"/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Country</label>
                                                <select>
                                                    <option>Select a country</option>
                                                    <option>United country</option>
                                                    <option>Russia</option>
                                                    <option>italy</option>
                                                    <option>France</option>
                                                    <option>Ukraine</option>
                                                    <option>Germany</option>
                                                    <option>Australia</option>
                                                </select>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Street address</label>
                                                <input type="text" name="address" placeholder="Street address"/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Apartment,suite,unit etc. (Optional)</label>
                                                <input type="text" name="--" placeholder=""/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Town / City</label>
                                                <input type="text" name="city" placeholder=""/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>State / Country</label>
                                                <input type="text" name="--" placeholder=""/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul">
                                            <li className="billing-li">
                                                <label>Postcode / ZIP</label>
                                                <input type="text" name="--" placeholder=""/>
                                            </li>
                                        </ul>
                                        <ul className="billing-ul input-2">
                                            <li className="billing-li">
                                                <label>Email address</label>
                                                <input type="text" name="mail" placeholder="Email address"/>
                                            </li>
                                            <li className="billing-li">
                                                <label>Phone</label>
                                                <input type="text" name="phone" placeholder="Phone"/>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                                <div className="billing-details">
                                    <form>
                                        <h2>Shipping details</h2>
                                        <ul className="shipping-form">
                                            <li className="check-box">
                                                <input type="checkbox" name="--"/>
                                                    <label>Ship to a different address?</label>
                                            </li>
                                            <li className="comment-area">
                                                <label>Order notes(Optional)</label>
                                                <textarea name="comments" rows="4" cols="80"></textarea>
                                            </li>
                                        </ul>

                                    </form>
                                </div>
                            </div>
                            <div className="order-area">
                                <div className="check-pro">
                                    <h2>In your cart (2)</h2>
                                    <ul className="check-ul">
                                        <li>
                                            <div className="check-pro-img">
                                                <a href="product.html"><img src="/asset/image/pro-page-image/check-image-1.jpg"
                                                                            className="img-fluid" alt="image"/></a>
                                            </div>
                                            <div className="check-content">
                                                <a href="product.html">Fresh healthy food</a>
                                                <span className="check-code-blod">Product code: <span>CA70051541B</span></span>
                                                <span className="check-price">$93.00</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-pro-img">
                                                <a href="product.html"><img src="/asset/image/pro-page-image/check-image-2.jpg"
                                                                            className="img-fluid" alt="image"/></a>
                                            </div>
                                            <div className="check-content">
                                                <a href="product.html">Fresh healthy food</a>
                                                <span className="check-code-blod">Product code: <span>CA70051541B</span></span>
                                                <span className="check-price">$230.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <h2>Your order</h2>
                                <ul className="order-history">
                                    <li className="order-details">
                                        <span>Product:</span>
                                        <span>Total</span>
                                    </li>
                                    <li className="order-details">
                                        <span>Orange juice:</span>
                                        <span>$93.00</span>
                                    </li>
                                    <li className="order-details">
                                        <span>Shrimp jumbo:</span>
                                        <span>$230.00</span>
                                    </li>
                                    <li className="order-details">
                                        <span>Subtotal:</span>
                                        <span>$323.00</span>
                                    </li>
                                    <li className="order-details">
                                        <span>Shipping Charge:</span>
                                        <span>Free shipping</span>
                                    </li>
                                    <li className="order-details">
                                        <span>Total:</span>
                                        <span>$323.00</span>
                                    </li>
                                </ul>
                                <form>
                                    <ul className="order-form">
                                        <li>
                                            <input type="checkbox" name="--"/>
                                                <label>Direct bank transfer</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="--"/>
                                                <label>Cheque payment</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" name="--"/>
                                                <label>Paypal</label>
                                        </li>
                                        <li className="pay-icon">
                                            <a href="javascript:void(0)"><i className="fa fa-credit-card"></i></a>
                                            <a href="javascript:void(0)"><i className="fa fa-cc-visa"></i></a>
                                            <a href="javascript:void(0)"><i className="fa fa-cc-paypal"></i></a>
                                            <a href="javascript:void(0)"><i className="fa fa-cc-mastercard"></i></a>
                                        </li>
                                    </ul>
                                </form>
                                <div className="checkout-btn">
                                    <a href="javascript:void(0)" className="btn-style1">Place order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default FCheckout;
