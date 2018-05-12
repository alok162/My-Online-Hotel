import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


class NavBar extends Component {
  render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="#">Musiac</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



<div class="box">
  <div class="container-3">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" id="search" placeholder="Search..." />
  </div>
</div>

      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <a className="nav-link login" href="login">Login <span className="sr-only">(current)</span></a>
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
    );
}

}

export default NavBar;