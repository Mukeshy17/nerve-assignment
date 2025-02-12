import { useState } from 'react';
// import { Card } from '@/components/ui/card';
import './TabsComponent.css';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Bullish', 'Bearish', 'Ranagebound', 'Volatile'];

  return (
    <div className='tabs-container'>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
