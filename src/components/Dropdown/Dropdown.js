import React, { useEffect, useState } from "react";
import "./Dropdown.scss";
import { lanuages } from "../../defaultData";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(lanuages);

  useEffect(() => {
    setSelectedOption("All");
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const searchFilters = (e) => {
    let filteredOptions = lanuages.filter((option) =>
      option.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <label>Language:</label>
        <span>{selectedOption}</span>
      </div>
      {isOpen && (
        <>
          <div className="dropdown-modal">
            <div className="dropdown-modal-header">Select a language</div>
            <div className="dropdown-modal-filters">
              {props.allowSearch && (
                <div className="options-search">
                  <input
                    type="text"
                    onChange={searchFilters}
                    placeholder="Filter languages"
                  />
                </div>
              )}
              {options.map((option, i) => {
                return (
                  <div
                    key={i}
                    className="dropdown-option"
                    onClick={() => {
                      selectOption(option);
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="modal-backdrop" onClick={toggleDropdown}></div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
