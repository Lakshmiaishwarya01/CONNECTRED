import React from 'react';
import {Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Requirement from '../pages/requirement';
import Confirm from '../pages/confirm';
import Menu from './menu';
import Login from '../pages/login';
import Signup from '../pages/signup';
function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default RouterPaths;

