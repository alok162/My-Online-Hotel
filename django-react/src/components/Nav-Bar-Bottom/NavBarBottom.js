import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarBottom.css';
import MusicPlayer from '../Music-Player/Music-Player'


class NavBarBottom extends Component {

  render() {
      return (
        <nav class="navbar navbar-default navbar-fixed-bottom">
        <MusicPlayer/>

</nav>
    );
}

}

export default NavBarBottom;