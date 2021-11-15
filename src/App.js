import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Devs from "./features/devs/Devs";
import Repos from "./features/repos/Repos";
import "./App.css";

function SubHeading() {
  return (
    <Routes>
      <Route
        path="repos"
        element={
          <p className="subheading">
            See what the Github community is most excited about today.
          </p>
        }
      />
      <Route
        path="devs"
        element={
          <p className="subheading">
            These are the developers building the hot tools today.
          </p>
        }
      />
    </Routes>
  );
}

function App() {
  const links = [
    { path: "/repos", text: "Repositories" },
    { path: "/devs", text: "Developers" },
  ];
  return (
      <div className="App">
        <header>
          <h1 className="heading">Trending</h1>
          <SubHeading />
            <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="repos" element={<Repos />} />
              <Route path="devs" element={<Devs />} />
            </Routes>
        </header>
      </div>
  );
}

export default App;
