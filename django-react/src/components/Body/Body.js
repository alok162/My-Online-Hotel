import React, { Component } from 'react';
import './Body.css';
import Header from '../Header/Header'


class Body extends Component {
  render() {
      return (
        <div>
        <Header />
          
        <div class="row small-up-2 medium-up-3 large-up-4">
        <div class="column">
        <div class="hovereffect">
          <img class="thumbnail" src={require('../../images/menu_1.jpg')}/>
          <h5>My Site</h5>
        </div>
        </div>

        <div class="column">
       <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_3.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>

        <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_2.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
         </div>
          <h5>My Site</h5>
        </div>
        
        <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_3.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>
          <h5>My Site</h5>
        </div>

        <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_1.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>
          <h5>My Site</h5>
        </div>

        <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_2.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>
          <h5>My Site</h5>
        </div>
        
        <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_3.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>
          <h5>My Site</h5>
        </div>

  <div class="column">
        <div class="hovereffect">
        <img class="img-responsive" src={require('../../images/menu_1.jpg')} alt=""/>
        <div class="overlay">
           <a class="info" href="#">link here</a>
        </div>
    </div>
          <h5>My Site</h5>
        </div>
</div>
      </div>
    );
}

}

export default Body;