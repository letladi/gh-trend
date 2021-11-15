import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { listButtons } from "../../defaultData";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./ContentHeader.scss";

const ContentHeader = () => {
  const location = useLocation()
  return (
    <div className="content-header">
      <Container>
        <Row>
          <Col>
            <div className="button-group">
              {listButtons.map((button, i) => {
                console.log(button.url, location.pathname, location, button)
                return (
                  <Link to={button.url} key={i}>
                    <button
                      className={[
                        location.pathname === button.url ? "active" : "",
                      ].join(" ")}
                    >
                      {button.title}
                    </button>
                  </Link>
                );
              })}
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
          <Dropdown allowSearch />
          <Dropdown allowSearch />
          <Dropdown allowSearch />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentHeader;
