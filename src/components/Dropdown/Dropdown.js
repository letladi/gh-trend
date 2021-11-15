import React, { useEffect, useState } from "react";
import "./Dropdown.scss";
import { lanuages } from "../../defaultData";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(props.optionList);
  const [filteredOptions, setFilteredOptions] = useState(options);

  console.log(options);

  useEffect(() => {
    setSelectedOption("All");
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) setFilteredOptions(options);
  };

  const searchFilters = (e) => {
    let ret = lanuages.filter((option) =>
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
              {filteredOptions.map((option, i) => (
                <div
                  key={i}
                  className="dropdown-option"
                  onClick={() => {
                    selectOption(option);
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
