import React, { Component } from "react";

export class CounterItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1 m-3">
          <span class="badge badge-warning">Zero</span>
        </div>
        <div className="col-1 m-3">
          <button className="btn btn-secondary btn-sm">
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-1 m-3">
          <button class="btn btn-info btn-sm">
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-1 m-3">
          <button class="btn btn-danger btn-sm">
            <i class="fa fa-trash-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CounterItem;
