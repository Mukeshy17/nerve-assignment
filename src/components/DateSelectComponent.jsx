import { useState } from 'react';

const DateSelectComponent = () => {
  const dateArray = ['24-Apr-2024', '25-Apr-2024', '26-Apr-2024', '27-Apr-2024', '28-Apr-2024'];
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  return (
    <div className='date-select-container'>
      <select
        id='date-select'
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className='date-select'
      >
        {dateArray.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelectComponent;
