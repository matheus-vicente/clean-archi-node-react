import React from "react";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};
