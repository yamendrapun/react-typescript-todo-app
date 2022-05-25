import React from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import './App.css';

const reminders: Reminder[] = [
  { id: 1, title: 'Reminder 1' }
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
