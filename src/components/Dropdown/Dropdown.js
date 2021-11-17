import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.resetOption);
  const [options] = useState(props.optionList);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) setFilteredOptions(options);
  };

  const searchFilters = (e) => {
    let ret = options.filter((option) =>
      option.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredOptions(ret);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <label>{props.optionName}:</label>
        <span>{selectedOption}</span>
      </div>
      {isOpen && (
        <>
          <div className="dropdown-modal">
            <div className="dropdown-modal-header">
              Select {props.optionName}
            </div>
            <div className="dropdown-modal-filters">
              {props.allowSearch && (
                <div className="options-search">
                  <input
                    type="text"
                    onChange={searchFilters}
                    placeholder={`Filter ${props.optionName}`}
                  />
                </div>
              )}
              {props.resetOption && (
                <div
                  className="dropdown-option"
                  onClick={() => {
                    selectOption(props.resetOption);
                    props.onSelect(null);
                  }}
                >
                  {props.resetOption}
                </div>
              )}
              {filteredOptions.map((option, i) => (
                <div
                  key={i}
                  className="dropdown-option"
                  onClick={() => {
                    selectOption(option);
                    props.onSelect(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div className="modal-backdrop" onClick={toggleDropdown}></div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
