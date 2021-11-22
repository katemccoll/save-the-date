import React from "react";
import './Information.css';

const Information = () => {
    return (
        <>
            <div id='information' className="information-container">
                <div className="information-image"></div>
                <div className="information-wrapper">
                    <h1 className="information-title">Information</h1>
                    <p className="information-intro">
                        We are excited for you to join us to celebrate our special day.
                    </p>

                    <p className="information-intro">
                        The Canyon is a 17 minute drive from Cromwell. There is a carpark on site if you wish to drive,
                        otherwise there will be a shuttle between the Five Stags and The Canyon.
                        We suggest booking your accommodation in Cromwell.
                    </p>

                    <p className="information-intro">
                        We will be updating this website with more details closer to the time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Information;