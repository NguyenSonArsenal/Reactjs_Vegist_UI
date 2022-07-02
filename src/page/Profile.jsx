import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FRegister from "../feature/F-Register";

const Profile = () => {
    return <>
        <Header/>

        <section className="order-histry-area section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="order-history">
                            <div className="profile">
                                <div className="order-pro">
                                    <div className="pro-img">
                                        <a href="javascript:void(0)"><img src="/asset/image/user-ava.jpg" alt="img"
                                                                          className="img-fluid"/></a>
                                    </div>
                                    <div className="order-name">
                                        <h4>Andrew louise</h4>
                                        <span>Joined April 06, 2021</span>
                                    </div>
                                </div>
                                <div className="order-his-page">
                                    <ul className="profile-ul">
                                        <li className="profile-li"><a href="#"><span>Orders</span>
                                            <span
                                                className="pro-count">5</span></a></li>
                                        <li className="profile-li"><a href="#" className="active">Profile</a>
                                        </li>
                                        <li className="profile-li"><a href="#"><span>Wishlist</span>
                                            <span
                                                className="pro-count">3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="profile-form">
                                <form>
                                    <ul className="pro-input-label">
                                        <li>
                                            <label>First name</label>
                                            <input type="text" name="name" placeholder="First name"/>
                                        </li>
                                        <li>
                                            <label>Last name</label>
                                            <input type="text" name="name" placeholder="Last name"/>
                                        </li>
                                    </ul>
                                    <ul className="pro-input-label">
                                        <li>
                                            <label>E-mail address</label>
                                            <input type="text" name="name" placeholder="E-mail address" required/>
                                        </li>
                                        <li>
                                            <label>Phone number</label>
                                            <input type="text" name="name" placeholder="Phone number"/>
                                        </li>
                                    </ul>
                                    <ul className="pro-input-label">
                                        <li>
                                            <label>New password</label>
                                            <input type="text" name="name" placeholder="New password"/>
                                        </li>
                                        <li>
                                            <label>Confirm password</label>
                                            <input type="text" name="name" placeholder="Confirm password"/>
                                        </li>
                                    </ul>
                                    <ul className="pro-submit">
                                        <li>
                                            <input type="checkbox" name="name"/>
                                                <label>Subscribe me to newsletter</label>
                                        </li>
                                        <li>
                                            <a href="#" className="btn btn-style1">Update profile</a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Footer/>
        <Copyright/>
    </>;
};

export default Profile;
