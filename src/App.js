import React, {useState} from "react";
import Navbar from "./components/layout/Navbar";
import Counters from "./components/Counters";

const App = () =>  {
  const [counters,setCounters]=useState(
    [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
    ]
  );

  const handleIncrement = (counter) => {
    const counts =[...counters];
    const index = counts.indexOf(counter);
    counts[index] = { ...counts[index] };
    counts[index].value++;
    setCounters(counts);
  };

  const handleDecrement = (counter) => {
    const counts =  [...counters];
    const index = counts.indexOf(counter);
    counts[index] = { ...counts[index] };
    counts[index].value--;
    setCounters(counts);
  };

  const handleDelete = (counterId) => {
    
    const counts = counters.filter(
      (counter) => counter.id !== counterId
    );
    setCounters(counts);
  };
 const handleReset = () => {
 
  const counts = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounters(counts);
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  
    return (
      <div>
        <Navbar
          totalCounter={
            counters.filter((counter) => counter.value > 0).length
          }
        />
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onRefresh={handleRefresh}
          onReset={handleReset}
        />
      </div>
    );
  
}

export default App;
