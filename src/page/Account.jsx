import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FAccount from "../feature/F-Account";

const Account = () => {
    return <>
        <Header/>
        <FAccount/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Account;
