import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Register from "./page/Register";

class App extends React.Component {
    render() {
        return <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
        </>
    }
}

export default App;
