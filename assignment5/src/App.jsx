import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Interactive React UI</h1>
      <p>Click the button to update the interface.</p>
      <div className="counter-card">
        <button onClick={() => setCount((value) => value - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((value) => value + 1)}>+</button>
      </div>
      <p>This UI demonstrates component state, event handling, and rendering updates.</p>
    </div>
  );
}

export default App;
