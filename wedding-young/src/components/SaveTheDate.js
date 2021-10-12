import React from "react";
import "./SaveTheDate.css";

import canyon from './images/canyon.png';
import flowers from './images/green-flowers.png';


const SaveTheDate = () => {
    return (
        <>
            <div className="save-date-container">
                <img className="canyon" src={canyon} alt="The Canyon"/>
                <div className="save-date">
                    <p className="save-date-text">SAVE THE DATE</p>
                    <div className="save-date-names">
                        <h1>
                            Kate McColl
                        </h1>
                        <h1>
                            &
                        </h1>
                        <h1>
                            Campbell Young
                        </h1>
                    </div>

                    <p className="save-date-text date">
                        05 . 11 . 2022
                    </p>
                    <p className="save-date-text">
                        The Canyon at Tarra Vineyard
                    </p>

                    <p className="save-date-text">Bendigo, Cromwell, Central Otago</p>

                </div>

            </div>
        </>
    );
}

export default SaveTheDate;