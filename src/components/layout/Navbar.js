import React from "react";

const Navbar= (props)=>{
  const {totalCounter} = props;
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
      <div>
      <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true"></i>
      <span className="badge badge-default m-2">
      {totalCounter}
      </span>
      Items
      </div>
      </nav>
    
      </div>
    );
  
}

export default Navbar;
