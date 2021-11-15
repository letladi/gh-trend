import React from "react";
import { useQuery } from "react-query";
import { BiGitRepoForked, HiOutlineBookmarkAlt, HiOutlineStar } from "react-icons/bi";
import { Container, Row, Col } from "react-grid-system";
import Button from "../../components/Button/Button";
import './Repos.scss';

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
