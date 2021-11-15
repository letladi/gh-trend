import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-grid-system'
import { Counter } from "./features/counter/Counter";
import Devs from "./features/devs/Devs";
import Repos from "./features/repos/Repos";
import ContentHeader from './components/ContentHeader/ContentHeader.js';
import "./App.scss";

function Header() {
  return (
      <div className="jumbotron">
        <h1>Trending</h1>
        <Routes>
        {['', 'repos'].map((link, i) => (
          <Route
            key={i}
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
          <Container>
          <div className="page-content">
            <div className='list-group'>
              <ContentHeader />
            <Routes>
              {['', 'repos'].map((url, i) => <Route key={i} path={url} element={<Repos />} />)}
              <Route path="devs" element={<Devs />} />
            </Routes>
            </div>
          </div>
          </Container>
      </div>


  );
}

export default App;
