import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import {Link} from "react-router-dom";

const Account = () => {
    return <>
        <Header/>

        <section className="shipping-area section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="account-title">
                            <h1>Welcome Vegist</h1>
                        </div>
                        <div className="account-area">
                            <div className="account">
                                <h4>My account</h4>
                                <ul className="page-name">
                                    <li className="register-id"><a href="#">Wishlist(0)</a></li>
                                    <li className="register-id"><Link to="/login">Logout</Link></li>
                                </ul>
                            </div>
                            <div className="account-detail">
                                <h4>Account details</h4>
                                <ul className="a-details">
                                    <li>Andrew louise</li>
                                    <li className="mail-register">andrew@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-details">
                            <h4>Order history</h4>
                            <p>You haven't placed any orders yet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Copyright/>
    </>;
};

export default Account;
