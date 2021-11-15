import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useQuery } from "react-query";
import { HiOutlineHeart, HiOutlineBookmarkAlt, HiOutlineFire } from 'react-icons/hi'
import './Devs.scss'
import Button from '../../components/Button/Button'

function DevItem(props) {
  return (
    <div class="dev-item">
      <Container>
        <Row>
          <Col>
            <div className="dev-bio">
              <span>{props.rank}</span>
              <img src={props.avatar} />
              <div className="dev-details">
                <a className="dev-name">{props.name}</a>
                <a className="dev-handle">{props.username}</a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="dev-repo"><span>
              <HiOutlineFire /> Popular Repo</span>
              <a><HiOutlineBookmarkAlt /> {props.popularRepository.repositoryName}</a>
              <p>{props.popularRepository.description ? props.popularRepository.description : 'No description available'}</p>
            </div>
          </Col>
          <Col>
            <div className="button-list">
              {/** TODO: replace with link of sponsorship link if it is available */}
              {false && <Button icon={<HiOutlineHeart />} title="Sponsor" />}
              <Button title="Follow" isExternal routerLink linkUrl={props.url} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function Devs(props) {
  const { isLoading, error, data, isFetching } = useQuery("devData", () =>
    fetch("https://gh-trending-api.herokuapp.com/developers").then((res) =>
      res.json()
    )
  );
  console.log("devs", data);

  if (isLoading) return null;

  return (
    <>
      {data.map((item, i) => <DevItem key={i} {...item} />)}
    </>
  );
}

export default Devs;
