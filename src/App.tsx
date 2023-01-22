import React from 'react';
import logo from './logo.svg';
import './App.css';
import ';/TaskList'


import { Task } from './interfaces';
import TaskList from './TaskList';

const taskList: Task[] = [
  {
    title: 'Humber',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    id: 1,
  },
  {
    title: 'MERN',
    tasks: ['Lab', 'Project', 'Quiz'],
    id: 2,
  },
  {
    title: 'Java',
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
    id: 3,
  }
]


function App() {
  return (
  <div className="App">
  <TaskList taskList={taskList} />
  </div>
  );
  }
export default App;
