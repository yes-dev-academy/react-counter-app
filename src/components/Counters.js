import React, { Component } from "react";
import CounterItem from "./CounterItem";

class Counters extends Component {
  render() {
    const {counters} =this.props
        return (
      <div className="container justify-content-center">
        <button className="btn peach-gradient btn-sm">
          <i className="fas fa-sync" aria-hidden="true"></i>
        </button>
        <button className="btn blue-gradient btn-sm">
          <i className="fa fa-recycle" aria-hidden="true"></i>
        </button>
        {counters.map((counter)=>(<CounterItem key={counter.id}/>))}>
       </div>
      
    );
  }
}

export default Counters;
