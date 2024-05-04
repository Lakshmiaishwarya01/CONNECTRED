import React from 'react';
import {Routes,Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Requirement from '../pages/requirement';
import Donhis from '../pages/Donhis';
import Patientreq  from '../pages/patientreq';
import Confirm from '../pages/confirm';
import Login from '../pages/login';
import { Sign as Signup } from '../pages/signup';


function RouterPaths() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/requirement" element={<Requirement />} />
      <Route path="/history" element={<Donhis />} />
      <Route path="/patientrequest" element={<Patientreq />} />
      <Route path="/donorconform" element={<Confirm />} />
      <Route path="/log" element={<Login />} />
      <Route path="/sign" element={<Signup />} />
    </Routes>
  );
}

export default RouterPaths;