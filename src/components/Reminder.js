import React from 'react' 

function Reminder({reminder}) {

    return (
        <div>
            <h3>{reminder.text}</h3>
            <h3>Date Added: {reminder.date}</h3>
        </div>
    )
}

export default Reminder