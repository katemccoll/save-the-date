import React from "react";
import "./SaveTheDate.css";
import { FaRegCalendar, FaMountain } from 'react-icons/fa';

import canyon from './images/canyon.png';
import flowers from './images/green-flowers.png';


const SaveTheDate = () => {
    let iconStyle = { fontSize: '24px' };

    return (
        <>
            <div id='save-the-date' className="detail-container">
                <div className="detail-content">
                    <h1>Save the date</h1>
                    <div className="detail-text">
                        <div className="detail-when">
                            <FaRegCalendar style={iconStyle}/>
                            <h2>
                                When?
                            </h2>
                            <p>
                                Saturday 3pm
                            </p>
                            <p>
                                November 5th, 2022
                            </p>

                        </div>
                        <div className="detail-where">
                            <FaMountain style={iconStyle} />
                            <h2>
                                Where?
                            </h2>
                            <p>
                                The Canyon at Tarras Vineyard
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