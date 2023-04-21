import React from "react";
import Popup from "./Popup";
import './Generator.css';

function Generator(){
    return(
        <div className="Generator">
            <div className="btn-container">
                <Popup />
            </div>
            <p className="text-disclaimer">may or may not motivate you, pero idk din 😏</p>
        </div>
    )
}

export default Generator