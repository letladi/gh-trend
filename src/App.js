import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Devs from "./features/devs/Devs";
import Repos from "./features/repos/Repos";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const links = [
    { path: "/", text: "Counter" },
    { path: "/repos", text: "Repositories" },
    { path: "/devs", text: "Developers" },
  ];
  const $navComp = <Nav links={links} />;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Counter>{$navComp}</Counter>} />
          <Route path="repos" element={<Repos>{$navComp}</Repos>} />
          <Route path="devs" element={<Devs>{$navComp}</Devs>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
