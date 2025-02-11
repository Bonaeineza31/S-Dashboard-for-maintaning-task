import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/layout.css';

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;