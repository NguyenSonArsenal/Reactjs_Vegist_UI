import React from 'react';

const FRegister = () => {
    return <>
        <section className="section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="register-area">
                            <div className="register-box">
                                <h1>Create account</h1>
                                <p>Please register below account detail</p>
                                <form>
                                    <input type="text" name="name" placeholder="Firts name"/>
                                        <input type="text" name="l-name" placeholder="Last name"/>
                                            <input type="text" name="email" placeholder="Email"/>
                                                <input type="text" name="password" placeholder="Password"/>
                                                    <a href="account.html" className="btn-style1">Create</a>
                                </form>
                            </div>
                            <div className="register-account">
                                <h4>Already an account holder?</h4>
                                <a href="login.html" className="ceate-a">Log in</a>
                                <div className="register-info">
                                    <a href="terms-conditions.html" className="terms-link"><span>*</span> Terms &
                                        conditions.</a>
                                    <p>Your privacy and security are important to us. For more information on how we use
                                        your data read our <a href="privacy-policy.html">privacy policy</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default FRegister;
