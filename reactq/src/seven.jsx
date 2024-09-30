import React, { useEffect, useState } from 'react'

const seven = () => {

    const [time, settime] = useState(60);

    const [sec, setsec] = useState("seconds");

    useEffect(() => {

        if (time == 1) {
            setsec("second");
        }

        if (time > 0) {
            const timer = setTimeout(() => { settime(time - 1) }, 1000);
            return () => clearTimeout(timer);
        }
    }, [time]);

    return (
        <div>

            Time left : {time} {sec}

        </div>
    )
}

export default seven
