import React, {
  useState,
  useRef,
  createRef,
  useEffect,
  KeyboardEventHandler,
} from "react";
import Text from "../../atoms/Text";

interface SelectOption {
  label: string;
  value: string | null;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption: (props: RenderOptionProps) => React.ReactNode;
}

enum KEY_CODES {
  ENTER = 13,
  SPACE = 32,
  DOWN_ARROW = 40,
}

const Select: React.FC<SelectProps> = ({
  onOptionSelected: handler,
  options = [],
  label = "Please select an option...",
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [optionRefs, setOptionRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);
  const labelRef = useRef<HTMLButtonElement>(null);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) handler(option, optionIndex);

    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  const highlightItem = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if (event.keyCode in KEY_CODES) {
      setIsOpen(true);
      highlightItem(0);
    }
  };

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);

  useEffect(() => {
    setOptionRefs(options.map(() => createRef<HTMLLIElement>()));
  }, [options.length]);

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs[highlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen]);

  let selectedOption = null;

  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  return (
    <div className="dse-select">
      <button
        ref={labelRef}
        aria-haspopup="true"
        aria-expanded={isOpen ? true : undefined}
        aria-controls="dse-select-list"
        className="dse-select__label"
        onClick={onLabelClick}
        onKeyDown={onButtonKeyDown}
      >
        <Text>{selectedIndex === null ? label : selectedOption?.label}</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`dse-select__caret ${
            isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"
          }`}
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
        <ul
          role="menu"
          id="dse-select-list"
          style={{ top: overlayTop }}
          className="dse-select__overlay"
        >
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];

            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                ref,
                tabIndex: isHighlighted ? -1 : 0,
                onMouseEnter: () => highlightItem(optionIndex),
                onMouseLeave: () => highlightItem(null),
                className: `dse-select__option ${
                  isSelected ? "dse-select__option--selected" : ""
                } ${isHighlighted ? "dse-select__option--highlighted" : ""}`,
                key: option.value,
                onClick: () => onOptionSelected(option, optionIndex),
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li {...renderOptionProps.getOptionRecommendedProps()}>
                <Text>{option.label}</Text>

                {isSelected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
