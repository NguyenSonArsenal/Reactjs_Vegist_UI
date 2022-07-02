import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Register from "./page/Register";
import Profile from "./page/Profile";
import AboutUs from "./page/AboutUs";
import Product from "./page/Product";
import Cart from "./page/Cart";
import Account from "./page/Account";
import Checkout from "./page/Checkout";
import Search from "./page/Search";

class App extends React.Component {
    render() {
        return <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route exact path="/about-us" element={<AboutUs />}/>
                <Route exact path="/product" element={<Product />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/account" element={<Account />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
                <Route exact path="/search" element={<Search />}/>
            </Routes>
        </BrowserRouter>
        </>
    }
}

export default App;
