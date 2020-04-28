import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
      <div>
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true"></i>
      <span className="badge badge-default">
      {this.props.totalCounter}{' '}
      </span>
      Items
      </div>
      </nav>
    
      </div>
    );
  }
}

export default Navbar;
