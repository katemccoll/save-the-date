import React from "react";
import { FaAngleDown } from 'react-icons/fa';
import "./HeroSection.css";


const HeroSection = () => {

    return (
        <>
            <section id="home" className="hero-container">
                <div className="hero-image"></div>
                <div className="hero-content">
                    <div className="hero-name">
                        <h1>
                            Kate & Campbell
                        </h1>
                    </div>

                    <div>
                        <p id="hero-detail">Are getting married</p>
                    </div>
                </div>
                <div className="scroll">
                    <FaAngleDown />
                </div>
            </section>
        </>
    )
};

export default HeroSection;