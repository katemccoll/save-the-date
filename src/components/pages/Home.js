import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection";
import SaveTheDate from "../SaveTheDate";
import CountdownClock from "../CountdownClock";
import Gallery from "../Gallery";
import Information from "../Information";
import Registry from "../Registry";


const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                    <HeroSection />
                    <SaveTheDate />
                    <Gallery />
                    <Information />
                    <CountdownClock />
            </div>

        </>
    );
}

export default Home;