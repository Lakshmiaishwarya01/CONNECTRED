import React from 'react';
import {Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Requirement from '../pages/requirement';
import Confirm from '../pages/confirm';
import Menu from './menu';
function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default RouterPaths;

