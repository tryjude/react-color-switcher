import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('blue')
  console.log(color)
  console.log(setColor)
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        <button className="red" onClick={() => setColor('red')}>Red</button>
        <button className="blue" onClick={() => setColor('blue')}>Blue</button>
        <button className="yellow" onClick={() => setColor('yellow')}>Yellow</button>
        
      </div>
    </div>
  );
}

export default App;
