import { useEffect, useState } from 'react';
import {ReminderList, AddReminder} from './index';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([])
  useEffect(() => console.log(reminders), [reminders])

  const handleCallback = newReminder => setReminders([newReminder, ...reminders])

  return (
    <div className="App">
      <header className="App-header">
       <h1>REMIND ME!</h1>
       <ReminderList reminderList={reminders}/>
       <AddReminder parentCallback={handleCallback}/>
      </header>
    </div>
  );
}

export default App;
