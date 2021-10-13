import React from "react";

import "./HeroSection.css";


const HeroSection = () => {

    return (
        <>
            <section className="hero-container">
                <div className="hero-image"></div>
                <div className="hero-content">
                    <div className="hero-name">
                        <h1>
                            Kate & Campbell
                        </h1>
                    </div>

                    <div>
                        <p id="hero-detail">November 5th, 2022 | The Canyon</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HeroSection;