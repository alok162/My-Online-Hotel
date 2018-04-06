import React, { Component } from 'react';
import './Header.css';
import ReactDOM from 'react-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'font-awesome/css/font-awesome.min.css'
import NavBar from './NavBar';



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
          <div className="callout primary">
          {/* <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div> */}
          

    {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={2}
      >        
        <Slider>
          <Slide index={0}><img src={require('../../images/593888.jpg')} /></Slide>
          <Slide index={1}><img src={require('../../images/877414.jpg')} /></Slide>
        </Slider>
        {this.index}
        <ButtonBack className='buttonLeftIcon'><i classNameName="fa fa-chevron-left"></i></ButtonBack>
        <ButtonNext className='buttonRightIcon'><i classNameName="fa fa-chevron-right"></i></ButtonNext>
      </CarouselProvider> */}
  <NavBar />





<div className='slider'>
  <div className='slide1'></div>
  <div className='slide2'></div>
  <div className='slide3'></div>
</div>



          </div>
    </div>
    );
}

}


export default Header;












