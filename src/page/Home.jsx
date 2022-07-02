import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import Category from "../component/home/Category";
import Banner from "../component/home/Banner";
import TrendingProduct from "../component/home/TrendingProduct";
import OurProduct from "../component/home/OurProduct";
import BrandLogo from "../component/home/BrandLogo";
import RecentNews from "../component/home/RecentNews";
import QuickView from "../component/home/QuickView";
import CustomerSay from "../component/home/CustomerSay";
import NewLetter from "../component/home/NewLetter";

const Home = () => {
    return <>
        <Header/>

        <Banner/>
        <Category/>
        <TrendingProduct/>
        <OurProduct/>
        <QuickView/>
        <CustomerSay/>
        <RecentNews/>
        <NewLetter/>
        <BrandLogo/>

        <Footer/>
        <Copyright/>
    </>;
};

export default Home;
