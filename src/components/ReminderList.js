import React from 'react'
import Reminder from '../components/Reminder'

function ReminderList({ reminderList }) {

    return (
        <div>
            <h2>{reminderList.length > 0 ? 'Pending Reminders' : null}</h2>
            {reminderList.map( r => <Reminder key={r.id} reminder={r}/> )}
        </div>
    )
}

export default ReminderList