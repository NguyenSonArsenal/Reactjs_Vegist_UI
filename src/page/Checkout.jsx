import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FCheckout from "../feature/F-Checkout";

const Checkout = () => {
    return <>
        <Header/>
        <FCheckout/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Checkout;
