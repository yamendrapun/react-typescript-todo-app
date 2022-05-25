import React, { useState } from 'react';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import './App.css';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' }
  ]);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
