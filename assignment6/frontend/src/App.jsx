import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await fetch('http://localhost:5000/api/students');
    const data = await res.json();
    setStudents(data);
  };

  const addStudent = async () => {
    if (!name.trim() || !roll.trim()) return;

    await fetch('http://localhost:5000/api/students/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, roll }),
    });

    setName('');
    setRoll('');
    getStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/api/students/delete/${id}`, {
      method: 'DELETE',
    });
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>MERN CRUD Application</h1>
        <div className="form-row">
          <input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter Roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <button onClick={addStudent}>Add Student</button>
        </div>
        <div className="student-list">
          {students.map((s) => (
            <div key={s._id} className="student-item">
              <span>{s.name} - {s.roll}</span>
              <button onClick={() => deleteStudent(s._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await fetch('http://localhost:5000/api/students');
    const data = await res.json();
    setStudents(data);
  };

  const addStudent = async () => {
    if (!name || !roll) return;
    await fetch('http://localhost:5000/api/students/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, roll })
    });
    setName('');
    setRoll('');
    getStudents();
  };

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/api/students/delete/${id}`, { method: 'DELETE' });
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="app-wrapper">
      <h1>MERN CRUD Application</h1>
      <div className="form-row">
        <input placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Enter Roll" value={roll} onChange={(e) => setRoll(e.target.value)} />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="student-list">
        {students.map((s) => (
          <div key={s._id} className="student-item">
            <span>{s.name} - {s.roll}</span>
            <button onClick={() => deleteStudent(s._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
