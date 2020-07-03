import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import Router from './router';

// import 'antd/dist/antd.css';   less:+ require: override, lessLoader
// import 'antd/dist/antd.less';  按需加载: require: override, babel

import styles from "./App.module.less" // avoid name conflict

function App() {
  return (
    <BrowserRouter>
      <Menu className={styles.menu} theme="dark">
        <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/login">Login</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/register">Register</NavLink></Menu.Item>
      </Menu>
      <Router></Router>
    </BrowserRouter>
  );
}

export default App;
