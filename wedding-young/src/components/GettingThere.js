import React from "react";
import './GettingThere.css';
import {Button} from "./Button";
import {Link} from "react-router-dom";

const GettingThere = () => {
    return (
        <>
            <div className="getting-there-container">
                <div className="getting-there-image"></div>
                <h1 className="getting-there-title">Getting There</h1>
                <div className="getting-there-wrapper">
                    <div className="getting-there-content">
                        <h3 className="transport-title">Transport</h3>
                        <p>A 17 minute drive from Cromwell. There is a carpark on site if you wish to drive, otherwise
                        there will be a shuttle between the Five Stags and The Canyon</p>
                    </div>
                    <div className="getting-there-content">
                        <h3 className="accommodation-title">Accommodation</h3>
                        <p>There is a range of places to stay in Cromwell</p>
                    </div>
                    <div className="getting-there-content getting-there-btn">
                        <Link to='/transport' className="btn-link">
                            <Button
                                buttonStyle='btn--outline'
                                buttonSize='btn--mobile'
                            >Transport</Button>
                        </Link>
                        <Link to='/accommodation' className="btn-link">
                            <Button
                                buttonStyle='btn--outline'
                                buttonSize='btn--mobile'
                            >Accommodation</Button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default GettingThere;