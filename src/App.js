import React from "react";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default App;
