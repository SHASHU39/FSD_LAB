import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Interactive Task Manager</h1>
        <div className="input-row">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No tasks added yet.</p>
          ) : (
            tasks.map((item, index) => (
              <div key={index} className="task-item">
                <span>{item}</span>
                <button onClick={() => removeTask(index)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
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
