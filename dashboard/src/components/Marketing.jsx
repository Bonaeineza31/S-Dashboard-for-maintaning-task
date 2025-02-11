import { React, useState } from 'react';
import '../styles/marketing.css';

const initialTasks = {
  todo: [
    {
      id: 1,
      title: 'Plan Product Hunt launch',
      subtasks: { completed: 0, total: 6 }
    },
    {
      id: 2,
      title: 'Share on Show HN',
      subtasks: { completed: 0, total: 3 }
    },
    {
      id: 3,
      title: 'Write launch article to publish on multiple channels',
      subtasks: { completed: 0, total: 4 }
    }
  ],
  doing: [],
  done: []
};

const Marketing = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  return (
    <div className="marketing-container">
      <header className="board-header">
        <h1>Marketing Plan</h1>
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
            <span className="column-indicator todo"></span>
            <h2>Todo ({tasks.todo.length})</h2>
          </div>
          {tasks.todo.map(task => (
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
            <span className="column-indicator doing"></span>
            <h2>Doing ({tasks.doing.length})</h2>
          </div>
          {tasks.doing.map(task => (
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
            <span className="column-indicator done"></span>
            <h2>Done ({tasks.done.length})</h2>
          </div>
          {tasks.done.map(task => (
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

export default Marketing;
