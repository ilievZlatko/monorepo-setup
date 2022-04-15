import React, { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  onOptionSelected: handler,
  options = [],
  label = "Please select an option...",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen);

    if (handler) handler(option, optionIndex);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dse-select">
      <button className="dse-select__label" onClick={onLabelClick}>
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1rem"
          height="1rem"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen ? (
        <ul className="dse-select__overlay">
          {options.map((option, optionIndex) => (
            <li
              key={option.value}
              onClick={() => onOptionSelected(option, optionIndex)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
