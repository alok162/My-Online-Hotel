import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
      return (
      <div>
          <div class="callout primary">
            {/* <div class="row column">
              <h1>Hello! This is the portfolio of a very witty person</h1>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla.</p>
            </div> */}


<header class="main_h">

<div class="row">
    <a class="logo" href="#">P/F</a>

    <div class="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <nav>
        <ul>
            <li><a href=".sec01">Section 01</a></li>
            <li><a href=".sec02">Section 02</a></li>
            <li><a href=".sec03">Section 03</a></li>
            <li><a href=".sec04">Section 04</a></li>
        </ul>
    </nav>

</div>

</header>

<div class="hero">

<h1><span>I'm a cool</span><br/>Navigation</h1>

<div class="mouse">
    <span></span>
</div>

</div>

<div class="row content">
<h1 class="sec01">Section 01</h1>

</div>

          </div>
    </div>
    );
}

}

export default Header;