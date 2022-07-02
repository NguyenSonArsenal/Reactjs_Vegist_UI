import React from 'react';
import Copyright from "../component/layout/footer/copyright/copyright";
import Footer from "../component/layout/footer/footer/footer";
import Header from "../component/layout/header/header";
import FSearch from "../feature/F-Search";

const Search = () => {
    return <>
        <Header/>
        <FSearch/>
        <Footer/>
        <Copyright/>
    </>;
};

export default Search;
