import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getDateRangesSelector,
  getLanguagesSelector,
} from "../../features/counter/counterSlice";
import { listButtons } from "../../defaultData";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import "./ContentHeader.scss";

const ContentHeader = () => {
  const location = useLocation();
  const languages = useSelector(getLanguagesSelector);
  const dateRanges = useSelector(getDateRangesSelector);

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
            {languages.length ? (
              <Dropdown
                optionName={"Language"}
                optionList={languages}
                allowSearch
              />
            ) : null}
            {dateRanges.length ? (
              <Dropdown
                optionName={"Date Range"}
                optionList={dateRanges}
                allowSearch
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentHeader;
