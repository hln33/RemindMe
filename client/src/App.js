import { useEffect, useState } from 'react';
import {ReminderList, AddReminder} from './index';
import {getReminders, postReminder, deleteReminder} from './httpCalls'
import './App.css';

function App() {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    getReminders()
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
