import React from "react";
import CounterItem from "./CounterItem";

const Counters =(props)=> {
  
    const {counters, onIncrement,onDecrement,onDelete,onRefresh,onReset} =props
        return (
      <div className="container justify-content-center">
        <button className="btn peach-gradient btn-sm" onClick={onReset} >
          <i className="fas fa-sync" aria-hidden="true"></i>
        </button>
        <button className="btn blue-gradient btn-sm" onClick={onRefresh}>
          <i className="fa fa-recycle" aria-hidden="true"></i>
        </button>
        {counters.map((counter)=>(
          <CounterItem
           key={counter.id}
           counter={counter}
           onIncrement={onIncrement}
           onDecrement={onDecrement}
           onDelete={onDelete}
               />
               ))}
      </div>
      
    );

}

export default Counters;
