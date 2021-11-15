import React from "react";
import { useQuery } from "react-query";
import { BiGitRepoForked } from "react-icons/bi";
import { HiOutlineBookmarkAlt, HiOutlineStar } from "react-icons/hi";
import { Container, Row, Col } from "react-grid-system";
import Button from "../../components/Button/Button";
import './Repos.scss';

function RepoItem() {
  return (
    <div className="repo-item">
      <Container>
        <Row>
          <Col>
            <header>
              <div className="repo-title">
                <HiOutlineBookmarkAlt />
                <a href="#" target="_blank">
                  huggingface / <span>datasets</span>
                </a>
              </div>
              <Button icon={<HiOutlineStar />} title="Star" />
            </header>
            <div className="description">
              🤗 The largest hub of ready-to-use datasets for ML models with
              fast, easy-to-use and efficient data manipulation tools
            </div>
            <footer>
              <div className="meta">
                <div className="meta-value">Python</div>
                <div className="meta-value">
                  <HiOutlineStar /> 11,150
                </div>
                <div className="meta-value">
                  <BiGitRepoForked /> 1,304
                </div>
                <div className="meta-value">
                  Built by
                  <span className="developer-avatars">
                    {Array(4)
                      .fill("https://picsum.photos/50/50")
                      .map((url) => (
                        <img src={url} alt="dev thumbnail" />
                      ))}
                  </span>
                </div>
              </div>
              <div className="stars-today">
                <HiOutlineStar /> 212 stars today
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function Repos() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch("https://gh-trending-api.herokuapp.com/repositories").then((res) =>
      res.json()
    )
  );

  console.log("repos", data);

  return (
    <>
      <RepoItem />
    </>
  );
}

export default Repos;
