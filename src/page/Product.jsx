import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FRegister from "../feature/F-Register";
import FProduct from "../feature/F-Product";

const Profile = () => {
    return <>
        <Header/>

        <FProduct/>

        <Footer/>
        <Copyright/>
    </>;
};

export default Profile;
