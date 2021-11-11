import React, { useEffect, useState } from 'react' 

function Reminder({reminder}) {
    const [timeRemaining, setTimeRemaining] = useState('')

    const findTimeLeft = () => {
        const remindDate = reminder.date
        const present = new Date()
        const secDiff = (remindDate.getTime() - present.getTime() ) / 1000
        let timeLeft = {}

        if (secDiff > 0) {
            timeLeft = {
                days: Math.floor(secDiff / (60 * 60 * 24)),
                hours: Math.floor((secDiff / (60 * 60)) % 24),
                minutes: Math.floor((secDiff / 60) % 60),
                seconds: Math.floor(secDiff % 60)
            }
            console.log(timeLeft)
        }
    }

    findTimeLeft()

    return (
        <div>
            <h3>{reminder.text}</h3>
            <h3>Date Added: {reminder.date.toLocaleString()}</h3>
        </div>
    )
}

export default Reminder