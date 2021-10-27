import React from "react";
import './Information.css';
import {Button} from "./Button";
import {Link} from "react-router-dom";

const Information = () => {
    return (
        <>
            <div id='information' className="information-container">
                <div className="information-image"></div>
                <h1 className="information-title">Information</h1>
                <p>
                    We are excited for you to come and join us celebrate our big day. We have a few final things to sort
                    before we send our RSVPs out. But while you wait, here is some information to tie you over.
                </p>
                <div className="information-wrapper">
                    <div className="information-content">
                        <h3 className="transport-title">Transport</h3>
                        <p>A 17 minute drive from Cromwell. There is a carpark on site if you wish to drive, otherwise
                        there will be a shuttle between the Five Stags and The Canyon</p>
                    </div>
                    <div className="information-content">
                        <h3 className="accommodation-title">Accommodation</h3>
                        <p>There is a range of places to stay in Cromwell</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Information;