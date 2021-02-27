import { useEffect, useState, useRef } from 'react';



function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    //random
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = Math.trunc(Math.random() * 3);

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }



    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];

}

function useMagicColor() {
    const [color, setColor] = useState('blue');

    const colorRef = useRef('blue');

    // change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log('change color', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);
        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color;
}

export default useMagicColor;