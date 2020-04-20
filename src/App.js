import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getParams = (location) => {
    const searchParams = new URLSearchParams(location.search);
    return {
      q: searchParams.get('q') || ''
    };
  }

  const DAY = 1000 * 60 * 60 * 24;
  const today = new Date();
  const quarantine = new Date("03/16/2020");
  const quarantine_a = new Date("03/22/2020")

  const n_days_a = Math.ceil((today - quarantine_a)/DAY);
  const n_days = Math.ceil((today - quarantine)/DAY);

  const { q } = getParams(window.location);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Días desde la cuarentena: { n_days }
        </p>
        { q === 'andrea' &&
        <p>
          Días desde la cuarentena para la <b>Alondrea</b>: { n_days_a }
        </p>
        }
      </header>
    </div>
  );
}

export default App;
