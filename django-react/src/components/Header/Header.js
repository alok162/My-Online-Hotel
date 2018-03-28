import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor (...args) {
        super(...args);
        this.state = { height: undefined }
        this._containerDOM = null;
        this._scrollPosition = 0;
        this.onScroll = this.onScroll.bind(this);
      }
      
      componentDidMount () {
        window.addEventListener('scroll', this.onScroll)
      }
      
      onScroll () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var header = document.getElementById("myHeader");
        // var sticky = header.offsetTop;
          if (window.pageYOffset >= 470) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }

      }


  render() {
      return (
      <div>
          <div class="callout primary">
          <body>
            <div class='inline-header'>
             <div class="top-container">
               <img src = {require('./header.jpg')}/>
             </div>

            <div class="header" id="myHeader">

            <div class="row">
            <div class="col-sm-3">
               <h2>My Restro</h2>
            </div>
            <div class="col-sm-9">
               <ul class="nav navbar-nav navbar-right" id="top-nav">
                                <li><a href="#hero-area">Home</a></li>
                                <li><a href="#about-us">about us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#price">menu</a></li>
                                <li><a href="#subscribe">news</a></li>
                                <li><a href="#contact-us">contacts</a></li>
                </ul>
            </div>
            </div>
             </div>
             </div>

</body>
          </div>
    </div>
    );
}

}


export default Header;












