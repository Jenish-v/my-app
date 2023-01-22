import React, { useState } from 'react';
import { TaskListProps } from './interfaces';

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add new task to taskList array
    setNewTask('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      {taskList.map(task => {
          return (
              <div key={task.id}>
                  <h3>{task.title}</h3>
                  <ul>
                      {task.tasks.map((t, index) => (
                          <li key={index}>{t}</li>
                      ))}
                  </ul>
              </div>
          );
      })}
    </div>
  );
};

export default TaskList;
