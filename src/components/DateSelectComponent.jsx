import { useEffect, useRef, useState } from 'react';
import './DateSelectComponent.css';
import StrategyCards from './StrategyCards';

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
  const strategyArray = [
    {
      View: 'Bullish',
      Value: {
        '24-Apr-2024': [
          'Bull Call Spread',
          'Bull Put Spread',
          'Bull Put Spread',
          'Long Call',
          'Bull Put Spread',
          'Bull Call Spread',
          'Strategy1',
          'Bull Call Spread',
          'Strategy1',
          'Strategy1',
          'SpreadStrategy',
          'Bull Call Spread'
        ],
        '02-May-2024': [
          'Bull Call Spread',
          'Bull Call Spread',
          'Bull Put Spread',
          'Long Call',
          'Long Call',
          'Long Call',
          'Bull Put Spread',
          'Bull Call Spread',
          'Strategy1',
          'Bull Call Spread',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Bull Call Spread'
        ],
        '09-May-2024': [
          'Strategy Put',
          'Strategy Call',
          'Strategy Call',
          'Strategy Call',
          'Strategy Put'
        ]
      }
    },
    {
      View: 'Bearish',
      Value: {
        '24-Apr-2024': [
          'Bear Call Spread',
          'Bear Call Spread',
          'Bear Call Spread',
          'Long Put',
          'Long Put',
          'Long Put',
          'Bear Call Spread'
        ],
        '31-May-2024': [
          'Long Put',
          'Long Put',
          'Long Put',
          'Long Put',
          'Long Put'
        ],
        '21-Jun-2024': [
          'Strategy3',
          'Strategy3',
          'Bear Put Spread',
          'Strategy3',
          'Long Put',
          'Long Put'
        ]
      }
    },
    {
      View: 'RangeBound',
      Value: {
        '24-Apr-2024': [
          'Short Straddle',
          'Short Strangle',
          'Short Strangle',
          'Iron Butterfly',
          'Short Strangle',
          'Short Straddle',
          'Strategy1',
          'Short Straddle',
          'Strategy1',
          'Strategy1',
          'SpreadStrategy',
          'Short Straddle'
        ],
        '02-May-2024': [
          'Short Straddle',
          'Short Straddle',
          'Short Strangle',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Butterfly',
          'Short Strangle',
          'Short Straddle',
          'Strategy1',
          'Short Straddle',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Short Straddle'
        ],
        '21-Jun-2024': [
          'Iron Condor',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Butterfly',
          'Iron Condor'
        ]
      }
    },
    {
      View: 'Volatile',
      Value: {
        '02-May-2024': [
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle',
          'Strategy1',
          'Long Straddle',
          'Strategy1',
          'Strategy1',
          'Spread-Strategy',
          'Long Straddle'
        ],
        '09-May-2024': [
          'Long Straddle',
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle',
          'Strategy1',
          'Long Straddle',
          'Strategy2',
          'Strategy1',
          'Strategy2',
          'Long Straddle'
        ],
        '31-May-2024': [
          'Long Straddle',
          'Long Strangle',
          'Long Strangle',
          'Long Strangle',
          'Long Straddle'
        ]
      }
    }
  ];

  return (
    <>
      {/* <div className="date-select-container">
        <select
          id="date-select"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-select"
        >
          {dateArray.map((date, index) => (
            <option className='card' key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div> */}
      <div className="date-select-container" ref={dropdownRef}>
      {/* Display the currently selected date */}
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-option">{selectedDate}</div>
        <div className="arrow">{isOpen ? 'ᐱ ' : 'v'}</div>
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
