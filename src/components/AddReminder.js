import React, { useState } from 'react' 

function AddReminder() {
    const [text, setText] = useState("")
    const [type, setType] = useState("")
    //const [dateTime, setDateTime] = useState(new Date())
        
    return (
        <div>
            <h3>Form Here</h3>
            <form>
                <input 
                    type="text"
                    placeholder="Enter Reminder..."
                    value={text}
                />
            </form>
        </div>
    )
}

export default AddReminder