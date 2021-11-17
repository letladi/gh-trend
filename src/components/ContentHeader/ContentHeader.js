import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDateRangesSelector,
  getLanguagesSelector,
  filterDateRange,
  filterLanguage,
} from "../../features/counter/counterSlice";
import { listButtons } from "../../defaultData";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import "./ContentHeader.scss";

const ContentHeader = () => {
  const location = useLocation();
  const languages = useSelector(getLanguagesSelector);
  const dateRanges = useSelector(getDateRangesSelector);
  const dispatch = useDispatch();

  return (
    <div className="content-header">
      <Container>
        <Row>
          <Col>
            <div className="button-group">
              {listButtons.map((button, i) => (
                <Button
                  key={i}
                  customClass={
                    button.url.find((u) => u === location.pathname)
                      ? "active"
                      : ""
                  }
                  routerLink
                  linkUrl={button.path}
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
                resetOption="All"
                onSelect={(option) => dispatch(filterLanguage(option))}
                allowSearch
              />
            ) : null}
            {dateRanges.length ? (
              <Dropdown
                optionName={"Date Range"}
                optionList={dateRanges}
                resetOption="All"
                onSelect={(option) => dispatch(filterDateRange(option))}
                allowSearch={dateRanges.length > 1}
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentHeader;
