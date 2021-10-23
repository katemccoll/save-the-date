import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection";
import SaveTheDate from "../SaveTheDate";
import CountdownClock from "../CountdownClock";
import Gallery from "../Gallery";
import GettingThere from "../GettingThere";
import Registry from "../Registry";


const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                    <HeroSection />
                    <SaveTheDate />
                    <Gallery />
                    <GettingThere />
                    <Registry />
                    <CountdownClock />

            </div>

        </>
    );
}

export default Home;