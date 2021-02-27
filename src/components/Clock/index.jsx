import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};


function Clock() {

    const { timeString } = useClock();


    return (
        <div>
            <h1>{timeString}</h1>
        </div>
    );
}

export default Clock;