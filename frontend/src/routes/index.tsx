import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";

export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/criar-conta" element={<SignUp />} />
    </ReactRoutes>
  );
};
