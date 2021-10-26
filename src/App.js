import './App.css';

// import ReminderList from './components/ReminderList';
// import AddReminder from './components/AddReminder';

import {ReminderList, AddReminder} from './index';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>REMIND ME!</h1>
       <ReminderList />
       <AddReminder />
      </header>
    </div>
  );
}

export default App;
