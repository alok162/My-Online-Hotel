import React, { Component } from 'react';
import './Header.css';
import ReactDOM from 'react-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'font-awesome/css/font-awesome.min.css'



class Header extends Component {
    constructor(props, context) {
        super(props, context);
    
        // this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null
        };
      }
    
    
  render() {
      return (
      <div>
          <div class="callout primary">

    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={2}
      >        
        <Slider>
          <Slide index={0}><img src={require('../../images/593888.jpg')} /></Slide>
          <Slide index={1}><img src={require('../../images/877414.jpg')} /></Slide>
        </Slider>
        {this.index}
        <ButtonBack class='buttonLeftIcon'><i className="fa fa-chevron-left"></i></ButtonBack>
        <ButtonNext class='buttonRightIcon'><i className="fa fa-chevron-right"></i></ButtonNext>
      </CarouselProvider>

          </div>
    </div>
    );
}

}


export default Header;












