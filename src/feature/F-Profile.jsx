import React, {useEffect, useState} from 'react';

const FProfile = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        fetch('http://localhost:3002/users')
            .then((res) => res.json())
            .then((result) => {
                if (result.length > 0) {
                    setUser(result[0]);
                }
            });
    }, []);

    return <>
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
                                            <input type="text" name="name" placeholder="First name" value={user?.first_name}/>
                                        </li>
                                        <li>
                                            <label>Last name</label>
                                            <input type="text" name="name" placeholder="Last name" value={user?.last_name}/>
                                        </li>
                                    </ul>
                                    <ul className="pro-input-label">
                                        <li>
                                            <label>E-mail address</label>
                                            <input type="text" name="name" placeholder="E-mail address" required value={user?.email}/>
                                        </li>
                                        <li>
                                            <label>Phone number</label>
                                            <input type="text" name="name" placeholder="Phone number" value={user?.phone}/>
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
    </>;
};

export default FProfile;
