import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FLogin from "../feature/F-Login";

const Login = () => {
    return <>
        <Header/>
        <FLogin/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Login;
