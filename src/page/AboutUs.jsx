import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FRegister from "../feature/F-Register";
import FAboutUs from "../feature/F-About-Us";

const Profile = () => {
    return <>
        <Header/>

        <FAboutUs/>

        <Footer/>
        <Copyright/>
    </>;
};

export default Profile;
