import { useEffect, useState } from 'react';
import {ReminderList, AddReminder} from './index';
import axios from 'axios';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([])
  useEffect(() => console.log(reminders), [reminders])
  useEffect(() => {
    axios.get('http://localhost:3001/api').then((res) => {
     
    })
  }, [])

  const handleAddition = newReminder => {
    axios.post('http://localhost:3001/api')
    setReminders([newReminder, ...reminders])
  }
  const handleRemoval = id => {
    axios.delete(`http://localhost:3001/api/${id}`)
    setReminders(reminders.filter(r => r.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>REMIND ME!</h1>
        <ReminderList reminderList={reminders} parentCallback={handleRemoval}/>
        <AddReminder parentCallback={handleAddition}/>
      </header>
    </div>
  );
}

export default App;
