import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection";
import SaveTheDate from "../SaveTheDate";
import CountdownClock from "../CountdownClock";


const Home = () => {
    return (
        <>
            <div className='home-wrapper'>
                    <HeroSection />
                <div className="home-container">
                    <SaveTheDate />
                    <CountdownClock />
                </div>

            </div>

        </>
    );
}

export default Home;