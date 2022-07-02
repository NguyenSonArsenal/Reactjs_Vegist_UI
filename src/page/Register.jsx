import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FRegister from "../feature/F-Register";

const Register = () => {
    return <>
        <Header/>
        <FRegister/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Register;
