import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FProfile from "../feature/F-Profile";

const Profile = () => {
    return <>
        <Header/>
        <FProfile />
        <Footer/>
        <Copyright/>
    </>;
};

export default Profile;
