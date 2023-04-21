import React, { useState } from "react";
import './Infopopup.css';
import myPhoto from './id.png';

function Infopopup(){

    const [isPop, setPop] = useState(false)

    const togglePopup = () =>{
        setPop(!isPop)
    }

    return(
        <div className="Info-container">
            <button className="btn" onClick={togglePopup}>info</button>
            {isPop && (
                <div className="infopop-container">
                    <div className="text-content-div">
                        <p className="title-info">your (un)helpful filo motivator</p>
                        <img className="idpic" src={myPhoto} alt="Gieo Coronado"></img>
                        <p className="">This web-application is created using ReactJS and Flask by Gieo Coronado</p>
                        <a href='https://github.com/coronadogieo/your-filo-motivator' target="_blank">View github repository</a>
                    </div>
                    <div className="btn-close-info-div">
                        <button className="btn-close-info" onClick={togglePopup}>close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Infopopup;