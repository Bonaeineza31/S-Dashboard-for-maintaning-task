import { React, useState } from 'react';
import '../styles/home.css';

const initialTasks = {
  todo: [
    {
      id: 1,
      title: 'Build UI for onboarding flow',
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 2,
      title: 'Build UI for search',
      subtasks: { completed: 0, total: 1 }
    },
    {
      id: 3,
      title: 'Build settings UI',
      subtasks: { completed: 0, total: 2 }
    },
    {
      id: 4,
      title: 'QA and test all major user journeys',
      subtasks: { completed: 0, total: 2 }
    }
  ],
  doing: [
    {
      id: 5,
      title: 'Design settings and search pages',
      subtasks: { completed: 2, total: 3 }
    },
    {
      id: 6,
      title: 'Add account management endpoints',
      subtasks: { completed: 2, total: 3 }
    },
    {
      id: 7,
      title: 'Design onboarding flow',
      subtasks: { completed: 1, total: 3 }
    },
    {
      id: 8,
      title: 'Add search endpoints',
      subtasks: { completed: 1, total: 2 }
    }
  ],
  done: [
    {
      id: 9,
      title: 'Conduct 5 wireframe tests',
      subtasks: { completed: 1, total: 1 }
    },
    {
      id: 10,
      title: 'Create wireframe prototype',
      subtasks: { completed: 1, total: 1 }
    },
    {
      id: 11,
      title: 'Review results of usability tests and iterate',
      subtasks: { completed: 3, total: 3 }
    },
    {
      id: 12,
      title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
      subtasks: { completed: 2, total: 2 }
    }
  ]
};

const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  return (
    <div className="home-container">
      <header className="board-header">
        <h1>Platform Launch</h1>
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

export default Home;
