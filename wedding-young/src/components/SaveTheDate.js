import React from "react";
import "./SaveTheDate.css";

import canyon from './images/canyon.png';
import flowers from './images/green-flowers.png';


const SaveTheDate = () => {
    return (
        <>
            <div className="detail-container">
                <div className="detail-content">
                    <h1>The Wedding</h1>
                    <div className="detail-text">
                        <div className="detail-when">
                            <h2>
                                When?
                            </h2>
                            <p>
                                Ceremony begins at 3pm
                            </p>
                            <p>
                                November 5th, 2022
                            </p>

                        </div>
                        <div className="detail-where">
                            <h2>
                                Where?
                            </h2>
                            <p>
                                The Canyon at Tarra Vineyard
                            </p>
                            <p>
                                Bendigo, Cromwell, Central Otago
                            </p>

                        </div>
                    </div>


                </div>
                {/*<img className="canyon" src={canyon} alt="The Canyon"/>*/}

            </div>
        </>
    );
}

export default SaveTheDate;