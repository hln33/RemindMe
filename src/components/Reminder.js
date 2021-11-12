import React, { useEffect, useState } from 'react' 

function Reminder({reminder}) {
    const [timeRemaining, setTimeRemaining] = useState({})

    const findTimeLeft = () => {
        const remindDate = reminder.date
        const present = new Date()
        const secDiff = (remindDate.getTime() - present.getTime()) / 1000
        let timeLeft = {}

        if (secDiff > 0) {
            timeLeft = {
                days: Math.floor(secDiff / (60 * 60 * 24)),
                hr: Math.floor((secDiff / (60 * 60)) % 24),
                min: Math.floor((secDiff / 60) % 60),
                sec: Math.floor(secDiff % 60)
            }
            setTimeRemaining(timeLeft)
        }
    }

    useEffect(() => {
        setInterval(() => findTimeLeft(), 1000)
    }, [])

    return (
        <div className="reminder">
            <h2>{reminder.text}</h2>
            <p>Time Until Reminded: <br/>
                <span style={{fontWeight: "bold"}}>
                    {timeRemaining.days ? ` ${timeRemaining.days} D ` : null} 
                    {timeRemaining.hr ? `${timeRemaining.hr} H ` : null}
                    {timeRemaining.min ? `${timeRemaining.min} M ` : null} 
                    {timeRemaining.sec? `${timeRemaining.sec} S ` : null}
                </span>
            </p>
        </div>
    )
}

export default Reminder