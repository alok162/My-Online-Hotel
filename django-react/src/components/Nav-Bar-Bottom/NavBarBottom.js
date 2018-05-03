import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarBottom.css';


class NavBarBottom extends Component {

    song = new Audio(require('./Buzz.mp3'));
    
    play() {
        console.log('alok alok aloa ,oka loak loak ')
        this.song.play();
    }

  render() {
      return (
        <nav class="navbar navbar-default navbar-fixed-bottom">
  <div class="container">
  {/* <div class="row">
  <div class="col-md-4">.col-md-4</div>
  
</div> */}

    {/* <div class="col-md-3">
      <div class="body__cover">
        <img src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg" alt="Album cover" />
      </div>
      </div>
      <div class="body__info">
        <div class="info__album">The Hunting Party</div>

        <div class="info__song">Final Masquerade</div>

        <div class="info__artist">Linkin Park</div>
      </div> */}
      <div class="body__buttons">
        <ul class="list list--buttons">
          <li><a href="#" class="list__link"><i class="fa fa-step-backward"></i></a></li>

          <li><a class="list__link"><i crossOrigin="anonymous" onClick = {this.play.bind(this)} class="fa fa-play"></i></a></li>

          <li><a href="#" class="list__link"><i class="fa fa-step-forward"></i></a></li>

          <li><a href="#" class="list__link"><i class="fa fa-random"></i></a></li>
        </ul>
      </div>

    {/* <div class="player__footer">
      <ul class="list list--footer">
        <li><a href="#" class="list__link"><i class="fa fa-heart-o"></i></a></li>
        
        <li><a href="#" class="list__link"><i class="fa fa-random"></i></a></li>
        
        <li><a href="#" class="list__link"><i class="fa fa-undo"></i></a></li>
        
        <li><a href="#" class="list__link"><i class="fa fa-ellipsis-h"></i></a></li>
      </ul>
    </div> */}
  </div>


</nav>
    );
}

}

export default NavBarBottom;