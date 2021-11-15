import React from "react";
import { useQuery } from "react-query";

function Repos() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch("https://gh-trending-api.herokuapp.com/repositories").then((res) =>
      res.json()
    )
  );

  console.log("repos", data);

  return (
    <>
    </>
  );
}

export default Repos;
