import React from 'react';
import {Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Requirement from '../pages/requirement';
import Donhis from '../pages/Donhis';
import Patientreq  from '../pages/patientreq';
import Confirm from '../pages/confirm';
import Login from '../pages/login';
import { Sign as Signup } from '../pages/signup';
import Menu from './menu';

function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/history" element={<Donhis />} />
      <Route path="/request" element={<Patientreq />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default RouterPaths;