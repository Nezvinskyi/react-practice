import { useState, useEffect } from 'react';
import CounterList from './CounterList';
import SingleCounterRedux from './SingleCounterRedux';

const Counters = () => {
  const [counters, setCounters] = useState([]);

  //component did mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('counters'));
    setCounters(data);
  }, []);

  //component did update - after data update
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  //component did update - always after render
  useEffect(() => {
    console.log('render');
  });
  const addCounter = () =>
    setCounters(prevState => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ]);

  const handleDeleteCounter = id =>
    setCounters(prevState => prevState.filter(counter => counter.id !== id));

  const handleIncrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value + 1,
            }
          : counter,
      ),
    );

  const handleDecrement = id =>
    setCounters(prevState =>
      prevState.map(counter =>
        counter.id === id
          ? {
              ...counter,
              value: counter.value - 1,
            }
          : counter,
      ),
    );

  return (
    <div className="todos">
      <h2>Counters</h2>
      <SingleCounterRedux />

      <button onClick={addCounter}>+ Add counter</button>
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
    </div>
  );
};

export default Counters;
