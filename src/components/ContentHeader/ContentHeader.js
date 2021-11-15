import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { listButtons } from "../../defaultData";
import { Link, useLocation } from "react-router-dom";
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
                return (
                  <Link to={button.url} key={i}>
                    <button
                      className={[
                        location.pathname === button.linkUrl ? "active" : "",
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentHeader;
