import React from 'react';
import {Link} from "react-router-dom";

const FSearch = () => {
    return <>
        <section className="section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="search-title">
                            <h3>Your search for "a" revealed the following:</h3>
                        </div>
                        <div className="saerch-input">
                            <form>
                                <input type="text" name="search" placeholder="Search our store"/>
                                    <a href="#" className="search-btn"><i className="fa fa-search"></i></a>
                            </form>
                        </div>
                        <div className="search-pro-area">
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/17.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/pro-img-03.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Fresh apple (5kg)</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$130.00 USD</span>
                                    <span className="search-old-price"><del>150.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/14.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/14.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">American mayonise pizza</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$117.00 USD</span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/18.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/pro-img-7.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Fresh dryed almod (50g)</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$580.00 USD</span>
                                    <span className="search-old-price"><del>590.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/2.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/2.jpg" className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Chilly garlic bread</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$133.00 USD</span>
                                    <span className="search-old-price"><del>145.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/15.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/15.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Breakfast eggplant special</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$580.00 USD</span>
                                    <span className="search-old-price"><del>590.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/7.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/7.jpg" className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Kathiyavadi Gujarati sandvich</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$230.00 USD</span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/3.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/3.jpg" className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">South indian palakpaner</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$139.00 USD</span>
                                    <span className="search-old-price"><del>160.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/9.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/9.jpg" className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">South indian palakpaner</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$117.00 USD</span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/16.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/16.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Canadian chezze salad</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$130.00 USD</span>
                                    <span className="search-old-price"><del>150.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/4.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/4.jpg" className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Delicius chiken hotdogs</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$580.00 USD</span>
                                    <span className="search-old-price"><del>590.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/10.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/10.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Special corn noodels</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$133.00 USD</span>
                                    <span className="search-old-price"><del>145.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                            <div className="search-pro-items">
                                <div className="search-img">
                                    <a href="#">
                                        <img src="/asset/image/search-image/11.jpg" className="img-fluid" alt="image"/>
                                            <img src="/asset/image/search-image/hover/11.jpg"
                                                 className="img-fluid search-hover"
                                                 alt="image"/>
                                    </a>
                                    <div className="pro-icn">
                                        <a href="#" className="w-c-q-icn"><i
                                            className="fa fa-heart"></i></a>
                                        <Link to="/cart" className="w-c-q-icn"><i className="fa fa-shopping-bag"></i></Link>
                                        <a href="javascript:void(0)" className="w-c-q-icn" data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"><i className="fa fa-eye"></i></a>
                                    </div>
                                </div>
                                <div className="search-caption">
                                    <h4><a href="#">Special egypt pasta</a></h4>
                                    <span className="all-price">
                                    <span className="search-new-price">$139.00 USD</span>
                                    <span className="search-old-price"><del>160.00 USD</del></span>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="all-page">
                            <div className="page-number style-1">
                                <a href="javascript:void(0)" className="active">1</a>
                                <a href="#">2</a>
                                <a href="#"><i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default FSearch;
