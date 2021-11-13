import { useEffect, useState } from 'react';
import {ReminderList, AddReminder} from './index';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([])
  useEffect(() => console.log(reminders), [reminders])

  const handleAddition = newReminder => setReminders([newReminder, ...reminders])
  const handleRemoval = id => setReminders(reminders.filter(r => r.id !== id))

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
