import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import Devs from "./features/devs/Devs";
import Repos from "./features/repos/Repos";
import "./App.css";

function Header() {
  return (
      <div className="jumbotron">
        <h1>Trending</h1>
        <Routes>
        {['', 'repos'].map(link => (
          <Route
            path={link}
            element={
              <p>
                See what the Github community is most excited about today.
              </p>
            }
          />
        ))}
          <Route
            path="devs"
            element={
              <p>
                These are the developers building the hot tools today.
              </p>
            }
          />
        </Routes>
      </div>
  );
}

function App() {
  return (
      <div className="page">
          <Header />
          <div className="page-content">
            <Routes>
              {['', 'repos'].map(url => <Route path={url} element={<Repos />} />)}
              <Route path="devs" element={<Devs />} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
