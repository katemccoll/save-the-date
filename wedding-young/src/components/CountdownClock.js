import React, {useEffect, useState} from "react";
import "./CountdownClock.css";

// import flowersGold from "./images/gold-flowers.png";

const CountdownClock = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [weddingTime, setWeddingTime] = useState(false);



    useEffect(() => {
        const weddingDate = new Date("11/05/2022 15:00:00");
        const countdown = setInterval(() => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60 ));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
                setWeddingTime(true);
            }

        }, 1000);

        return () => clearTimeout(countdown);
    }, []);



    return (
        <div className="countdown-wrapper">
            {weddingTime ? (
                <h1>We got married!</h1>
            ) :(
                <div className="countdown-container">
                <span>
                    <div className="d">
                        {days}
                    </div>
                    Days
                </span>
                    <span>
                    <div className="h">
                        {hours}
                    </div>
                    Hours
                </span>
                    <span>
                    <div className="m">
                        {minutes}
                    </div>
                    Minutes
                </span>
                    <span>
                    <div className="s">
                        {seconds}
                    </div>
                    Seconds
                </span>

                </div>
            )}
            <div className="flowers" />

        </div>
    )
}

export default CountdownClock;