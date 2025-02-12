import React from 'react';
import './StrategyCards.css';

const StrategyCards = ({ activeView, selectedDate, strategyArray }) => {
  // Find the data corresponding to the currently selected view.
  const viewData = strategyArray.find(
    (item) => item.View.toLowerCase() === activeView.toLowerCase()
  );

  // Get the strategies array for the selected date under that view.
  const strategiesForDate =
    viewData && viewData.Value[selectedDate]
      ? viewData.Value[selectedDate]
      : [];

  // Count the occurrences of each strategy.
  const strategyCount = strategiesForDate.reduce((countMap, strategy) => {
    countMap[strategy] = (countMap[strategy] || 0) + 1;
    return countMap;
  }, {});

  // Prepare card data: each entry has the strategy name and its count.
  const strategyCards = Object.entries(strategyCount).map(
    ([strategyName, count]) => ({
      name: strategyName,
      count
    })
  );

  // If no strategies exist for the selected view and date, render the empty state.
  if (strategyCards.length === 0) {
    return (
      <div className="empty-state">
        No strategy cards available for {selectedDate} under {activeView} view.
      </div>
    );
  }

  return (
    <div className="strategy-cards-container">
      {strategyCards.map((card, index) => (
        <div key={index} className="strategy-card">
          <h3>{card.name}</h3>
          <p>
   <span className="bullet">●</span>{card.count} {card.count === 1 ? 'Strategy' : 'Strategies'}
</p>

        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
