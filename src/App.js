import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "react-grid-system";
import Devs from "./features/devs/Devs";
import Repos from "./features/repos/Repos";
import ContentHeader from "./components/ContentHeader/ContentHeader.js";
import "./App.scss";

function Header() {
  return (
    <div className="jumbotron">
      <h1>Trending</h1>
      <Routes>
        {["", "repos"].map((link, i) => (
          <Route
            key={i}
            path={link}
            element={
              <p>See what the Github community is most excited about today.</p>
            }
          />
        ))}
        <Route
          path="devs"
          element={
            <p>These are the developers building the hot tools today.</p>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  // const location = useLocation();
  // const [apiUrl, setApiUrl] = useState(null);
  // const [apiResponse, setApiResponse] = useState({});

  // useEffect(() => {
  //   let apiUrl;
  //   if (location.pathname === "/" || location.pathname === "/repos") {
  //     apiUrl = ("https://gh-trending-api.herokuapp.com/repositories");
  //   } else if (location.pathname === "/devs") {
  //     apiUrl = ("https://gh-trending-api.herokuapp.com/developers");
  //   }

  //   // const { isLoading, error, data, isFetching }
  //   const apiResponse = useQuery("devData", () =>
  //   fetch(apiUrl).then((res) =>
  //     res.json()
  //   )
  // );

  // setApiResponse(apiResponse);

  // }, [apiUrl]);

  // useEffect(() => {
  //   console.log("location changed", location);
  // }, [location]);
  return (
    <div className="page">
      <Header />
      <Container>
        <div className="page-content">
          <div className="list-group">
            <ContentHeader />
            <Routes>
              {["", "repos"].map((url, i) => (
                <Route key={i} path={url} element={<Repos />} />
              ))}
              <Route path="devs" element={<Devs />} />
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
