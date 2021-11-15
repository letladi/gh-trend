import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { listButtons } from "../../defaultData";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Button from '../Button/Button';
import "./ContentHeader.scss";

const ContentHeader = () => {
  const location = useLocation()
  return (
    <div className="content-header">
      <Container>
        <Row>
          <Col>
            <div className="button-group">
              {listButtons.map((button, i) => (
                  <Button
                    key={i}
                    customClass={location.pathname === button.url ? "active" : ""}
                    routerLink
                    linkUrl={button.url}
                    title={button.title}
                  />
                ))}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentHeader;
