import React from 'react'
import Reminder from '../components/Reminder'

function ReminderList({ reminderList }) {

    return (
        <div>
            <h2>Pending Reminders</h2>
            {reminderList.map( r => <Reminder key={r.id} reminder={r}/> )}
        </div>
    )
}

export default ReminderList