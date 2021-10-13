import React from "react";

import "./HeroSection.css";
import CouplePortrait from "./images/IMG_7805.jpg";

const HeroSection = () => {

    return (
        <>
            <section className="hero-container">
                <img className="heroImage" src={CouplePortrait} alt="Kate and Campbell"/>
                <div className="bottom-mask"></div>
            </section>
        </>
    )
};

export default HeroSection;