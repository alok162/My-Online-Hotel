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
            <div class='container'>
             <div class="top-container">
               <img src = {require('./header.jpg')}/>
             </div>

            <div class="header" id="myHeader">
               <h2>My Header</h2>
             </div>
             </div>

</body>
          </div>
    </div>
    );
}

}


export default Header;












