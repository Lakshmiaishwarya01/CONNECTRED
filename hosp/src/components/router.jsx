import React from 'react';
import {Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Requirement from '../pages/requirement';
import Confirm from '../pages/confirm';
import Login from '../pages/login';
import Signup from '../pages/signup';



function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/log" element={<Login />} />
      <Route path="/sign" element={<Signup />} />

    </Routes>
  );
}

export default RouterPaths;

