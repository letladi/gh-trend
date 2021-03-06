import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setApiData,
  filterDataForDisplay,
  getDateRangeFilter,
  getLanguageFilter,
} from "../../state/trendsSlice";
import { BiGitRepoForked } from "react-icons/bi";
import { HiOutlineBookmarkAlt, HiOutlineStar } from "react-icons/hi";
import { Container, Row, Col } from "react-grid-system";
import Button from "../Button/Button";
import "./Repos.scss";

function RepoItem(props) {
  return (
    <div className="repo-item">
      <Container>
        <Row>
          <Col>
            <header>
              <div className="repo-title">
                <HiOutlineBookmarkAlt />
                <a href={props.url} target="_blank" rel="noreferrer">
                  {props.username} / <span>{props.repositoryName}</span>
                </a>
              </div>
              <Button
                icon={<HiOutlineStar />}
                title="Star"
                isExternal
                routerLink
                linkUrl={props.url}
              />
            </header>
            <div className="description">{props.description}</div>
            <footer>
              <div className="meta">
                <div className="meta-value">{props.language}</div>
                <div className="meta-value">
                  <HiOutlineStar /> {props.totalStars}
                </div>
                <div className="meta-value">
                  <BiGitRepoForked /> {props.forks}
                </div>
                <div className="meta-value">
                  Built by
                  <span className="developer-avatars">
                    {props.builtBy.map(({ avatar, username }, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt={`thumbnail for ${username}`}
                      />
                    ))}
                  </span>
                </div>
              </div>
              <div className="stars-today">
                <HiOutlineStar /> {props.starsSince} stars today
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Repos() {
  const dispatch = useDispatch();
  const languageFilter = useSelector(getLanguageFilter);
  const dateRangeFilter = useSelector(getDateRangeFilter);
  const { isLoading, data, isFetched } = useQuery("repoData", () =>
    fetch("https://gh-trending-api.herokuapp.com/repositories").then((res) =>
      res.json()
    )
  );

  if (isLoading) dispatch(setLoading());
  if (isFetched) dispatch(setApiData(data));

  if (isLoading) {
    return null;
  }

  return (
    <>
      {filterDataForDisplay(data, { languageFilter, dateRangeFilter }).map(
        (repo, i) => (
          <RepoItem key={i} {...repo} />
        )
      )}
    </>
  );
}

export default Repos;
