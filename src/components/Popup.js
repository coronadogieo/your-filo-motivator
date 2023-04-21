import React, { useState, useEffect } from "react";
import './Popup.css'

function Popup(){
    const [data, setData] = useState(null)

    async function fetchData(){
        try {
            const response = await fetch('https://api-filomotivations.coronadogieo.repl.co');
            const datas = await response.json();
            setData(datas);
        } catch(err){
            setData(null);
        }
    }

    const [isPop, setPop] = useState(false)
    const togglePopup=()=>{
        setPop(!isPop)
    }

    const [closed,setClosed] = useState(true)

    const close = ()=>{
        setClosed(!closed)
        togglePopup()
    }

    useEffect(()=>{
        fetchData()
    }, [closed]);

    return(
        <div className="Popup">
                <div>
                    <button className="generate-btn" onClick={togglePopup}>ok sige go</button>
                </div>
                { isPop && (
                    <div className="popup-container">
                        {data===null ? (<p className="content">Data not available, API server is down or check your internet connection</p>) : (<p className="content">"{data.quote}"</p>)}
                        <p className="credits">(un)helpful filo motivator <br />by Gieo Coronado</p>
                        <div className="btn-div">
                            <button className="btn-close btn" onClick={close}>close</button>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default Popup