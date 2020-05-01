import React from "react";

const CounterItem =(props)=>{
  const {counter,onDecrement,onDelete,onIncrement} = props
  const valueChecker = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };
  const getClass =()=>{
    let classes = 'badge badge-'
    classes += counter.value === 0 ? "warning" : "info"
    return classes 
  }
 
  const add = counter => onIncrement(counter)
  const minus = counter => onDecrement(counter)
  const remove = id => onDelete(id)
  
    return (
      <div className="row">
        <div className="col-1 m-3">
          <span className={getClass()}>{valueChecker()}</span>
        </div>
        <div className="col-1 m-3">
          <button
            className="btn btn-secondary btn-sm"
            onClick={()=>add(counter)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-1 m-3">
          <button
            className="btn btn-info btn-sm"
            onClick={() =>minus(counter)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-1 m-3">
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>remove(counter.id)}
          >
            <i className="fa fa-trash-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  
}

export default CounterItem;
