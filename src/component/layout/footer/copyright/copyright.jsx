import React from 'react';

const Copyright = () => {
    return <>
        <section className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="f-bottom">
                            <li className="f-c f-copyright">
                                <p>Copyright <i className="fa fa-copyright"></i> Devmaster Academy</p>
                            </li>
                            <li className="f-c f-social">
                                <a href="https://www.whatsapp.com/" className="f-icn-link"><i
                                    className="fa fa-whatsapp"></i></a>
                                <a href="https://www.facebook.com/" className="f-icn-link"><i
                                    className="fa fa-facebook-f"></i></a>
                                <a href="https://twitter.com/" className="f-icn-link"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/" className="f-icn-link"><i
                                    className="fa fa-instagram"></i></a>
                                <a href="https://www.pinterest.com/" className="f-icn-link"><i
                                    className="fa fa-pinterest-p"></i></a>
                                <a href="https://www.youtube.com/" className="f-icn-link"><i
                                    className="fa fa-youtube"></i></a>
                            </li>
                            <li className="f-c f-payment">
                                <a href="checkout.html">
                                    <img src="/asset/image/payment.png" className="img-fluid" alt="payment image" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default Copyright;
