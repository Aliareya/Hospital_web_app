import React, { useState, useEffect } from 'react';

function IncrementingNumber() {
    const [currentNumber, setCurrentNumber] = useState(1);

    useEffect(() => {
        if (currentNumber < 3000) {
            const interval = setInterval(() => {
                setCurrentNumber((prevNumber) => prevNumber + 30);
            }, 2);

            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [currentNumber]);

    return (
        <div>
            <div>{currentNumber}</div>
            <button onClick={() => setCurrentNumber(1)}>Reset to 1</button>
        </div>
    );
}

export default IncrementingNumber;
