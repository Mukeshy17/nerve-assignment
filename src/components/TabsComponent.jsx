import React from 'react';
import './TabsComponent.css';

const TabsComponent = ({ activeView, setActiveView }) => {
  // The four views; note that the default (first) is "Bullish"
  const tabs = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveView(tab)}
            className={`tab-button ${activeView === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
