import { useEffect, useRef, useState } from 'react';
import './DateSelectComponent.css';
import StrategyCards from './StrategyCards';
import upArrow from '../assets/images/up-arrow.svg'
import downArrow from '../assets/images/down-arrow.svg'

const DateSelectComponent = ({ activeView }) => {
  // Provided dates array (first date is selected by default)
  const dateArray = [
    '24-Apr-2024',
    '02-May-2024',
    '09-May-2024',
    '31-May-2024',
    '21-Jun-2024'
  ];
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  // Provided strategyArray data with strategies for each view and date
  const strategyArray = require('../config/strategyArray.json');

  return (
    <>
      <div className="date-select-container" ref={dropdownRef}>
      {/* Display the currently selected date */}
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-option">{selectedDate}</div>
        <div className="arrow">{isOpen ? <img className='arrow-svg' src={upArrow} alt='up arrow'/> : <img src={downArrow} className='arrow-svg' alt='down arrow'/>}</div>
      </div>
      {/* Render the options as cards when open */}
      {isOpen && (
        <div className="options-container">
          {dateArray.map((date, index) => (
            <div
              key={index}
              className="option-card"
              onClick={() => handleSelect(date)}
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
      {/* Pass the activeView, selectedDate, and strategyArray to StrategyCards */}
      <StrategyCards
        activeView={activeView}
        selectedDate={selectedDate}
        strategyArray={strategyArray}
      />
    </>
  );
};

export default DateSelectComponent;
