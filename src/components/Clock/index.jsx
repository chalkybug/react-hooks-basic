import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatdate() {
    const date = new Date();

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;

}

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            // HH:mm:ss
            const newTimeSting = formatdate(now);

            setTimeString(newTimeSting);
        }, 1000);

        return () => {
            // cleanup
            console.log("Clock cleanup");
            clearInterval(clockInterval);
        }
    }, [])

    return (
        <div>
            <h1>{timeString}</h1>
        </div>
    );
}

export default Clock;