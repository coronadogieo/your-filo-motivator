import React from "react";
import './Navbar.css';
import Infopopup from "./Infopopup";

const handleContactMe = () => {
    window.location.href = 'mailto:coronadogieo@gmail.com?subject=Contact: (un)helpful filo motivator';
}

function Navbar(){

    return (
        <div className="Navbar">
            <div className="container">
                <div className="title-con">
                    <p>your (un)helpful filo motivator 🇵🇭</p>
                </div>
                <div className="controls-con">
                    <Infopopup />
                    <button className="orange" onClick={handleContactMe}>contact me</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar