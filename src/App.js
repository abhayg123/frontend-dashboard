import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <h1>Frontend Dashboard</h1>
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;