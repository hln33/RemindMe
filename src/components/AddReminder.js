import React, { useState } from 'react' 
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function AddReminder({ parentCallback }) {
    const [text, setText] = useState("")
    const [date, setDate] = useState(new Date())
    
    const handleSubmit = (e) => {
        const newReminder = {
            id: Math.floor(Math.random() * 1000000),
            text,
            date
        }
        console.log(newReminder.date)
        parentCallback(newReminder)

        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Reminder..."
                    value={text}
                    onChange={ (e) => setText(e.target.value) }
                />
                <DatePicker
                    popperPlacement="right-end"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    showTimeSelect
                    selected={date}
                    onChange={time => setDate(time)}
                />

                <button>Remind Me!</button>
            </form>
        </div>
    )
}

export default AddReminder