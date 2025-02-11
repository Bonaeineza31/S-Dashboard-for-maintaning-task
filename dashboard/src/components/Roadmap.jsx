import { React, useState } from 'react';
import '../styles/roadmap.css';

const initialTasks = {
  now: [
    {
      id: 1,
      title: 'Launch version one',
      subtasks: { completed: 0, total: 2 }
    },
    {
      id: 2,
      title: 'Review early feedback and plan next steps for roadmap',
      subtasks: { completed: 0, total: 3 }
    }
  ],
  next: [],
  later: []
};

const Roadmap = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  return (
    <div className="roadmap-container">
      <header className="board-header">
        <h1>Roadmap</h1>
        <div className="header-actions">
          <button className="add-task-btn" onClick={() => setShowNewTaskModal(true)}>
            + Add New Task
          </button>
          <button className="more-options">
            <span className="dots">•••</span>
          </button>
        </div>
      </header>

      <div className="board-content">
        <div className="column">
          <div className="column-header">
            <span className="column-indicator now"></span>
            <h2>Now ({tasks.now.length})</h2>
          </div>
          {tasks.now.map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p className="subtasks">
                {task.subtasks.completed} of {task.subtasks.total} subtasks
              </p>
            </div>
          ))}
        </div>

        <div className="column">
          <div className="column-header">
            <span className="column-indicator next"></span>
            <h2>Next ({tasks.next.length})</h2>
          </div>
          {tasks.next.map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p className="subtasks">
                {task.subtasks.completed} of {task.subtasks.total} subtasks
              </p>
            </div>
          ))}
        </div>

        <div className="column">
          <div className="column-header">
            <span className="column-indicator later"></span>
            <h2>Later ({tasks.later.length})</h2>
          </div>
          {tasks.later.map(task => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p className="subtasks">
                {task.subtasks.completed} of {task.subtasks.total} subtasks
              </p>
            </div>
          ))}
        </div>

        <div className="new-column">
          <button className="add-column-btn">+ New Column</button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;