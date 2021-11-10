import React, { useState } from 'react' 

function AddReminder({ parentCallback }) {
    const [text, setText] = useState("")
    
    const handleSubmit = (e) => {
        const newReminder = {
            id: Math.floor(Math.random() * 1000000),
            text
        }
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
                <button>Remind Me!</button>
            </form>
        </div>
    )
}

export default AddReminder