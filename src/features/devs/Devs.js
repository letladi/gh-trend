import React from "react";
import { useQuery } from "react-query";

function Devs(props) {
  const { isLoading, error, data, isFetching } = useQuery("devData", () =>
    fetch("https://gh-trending-api.herokuapp.com/developers").then((res) =>
      res.json()
    )
  );
  console.log("devs", data);

  return (
    <>
    </>
  );
}

export default Devs;
