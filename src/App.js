import React, { useState } from 'react';
import SwitchColorButton from './SwitchColorButton'
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('')
  console.log(setColor)
  const colors = ['red', 'blue', 'yellow']
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        {colors.map(currentColor => <SwitchColorButton color='red' setColor={setColor}/>)}
        <SwitchColorButton color='red' setColor={setColor} />
        <SwitchColorButton color='blue' setColor={setColor} />
        <SwitchColorButton color='yellow' setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
