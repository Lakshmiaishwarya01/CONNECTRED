import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Requirement from "../pages/requirement";

export function RouterPaths() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Requirement/>}/>
    </Routes>
  );
}

