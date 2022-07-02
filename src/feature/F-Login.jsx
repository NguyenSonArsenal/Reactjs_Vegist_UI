import React from 'react';

const FLogin = () => {
    return <>
        <section className="section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="login-area">
                            <div className="login-box">
                                <h1>Login</h1>
                                <p>Please login below account detail</p>
                                <form>
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email"/>
                                    <label>Password</label>
                                    <input type="text" name="password" placeholder="Password"/>
                                    <a href="login.html" className="btn-style1">Sign in</a>
                                    <a href="forgot-password.html" className="re-password">Forgot your password?</a>
                                </form>
                            </div>
                            <div className="login-account">
                                <h4>Don't have an account?</h4>
                                <a href="register.html" className="ceate-a">Create account</a>
                                <div className="login-info">
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

export default FLogin;
