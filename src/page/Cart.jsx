import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FCart from "../feature/F-Cart";

const Cart = () => {
    return <>
        <Header/>
        <FCart/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Cart;
