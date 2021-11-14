import { useEffect, useState } from 'react';
import {ReminderList, AddReminder} from './index';
import axios from 'axios';
import './App.css';

const postReminder = () => {
  axios.post('http://localhost:3001/api', newReminder)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const deleteReminder = (id) => {
  axios.delete(`http://localhost:3001/api/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

function App() {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  const handleAddition = newReminder => {
    postReminder(newReminder.id)
    setReminders([newReminder, ...reminders])
  }

  const handleRemoval = id => {
    deleteReminder(id)
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
