import { useState } from 'react';
import './App.css';
import DateSelectComponent from './components/DateSelectComponent';
import TabsComponent from './components/TabsComponent';

function App() {
  // Active view state is managed here and defaults to "Bullish"
  const [activeView, setActiveView] = useState('Bullish');

  return (
    <div className="App">
      {/* Slider toggle for views */}
      <TabsComponent activeView={activeView} setActiveView={setActiveView} />
      {/* Date dropdown and strategy cards (filtered by activeView) */}
      <DateSelectComponent activeView={activeView} />
    </div>
  );
}

export default App;
