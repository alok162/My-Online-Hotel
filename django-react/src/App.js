import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './animate.css';
import './style.css';
import './styles/foundation.min.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/footer';
import Body from './components/Body/Body';
import { Routes } from './routes';
import NavBarBottom from './components/Nav-Bar-Bottom/NavBarBottom';


class App extends Component {
  render() {
      return (
      <div>
  {/* <Header/> */}
      {/* <div class="off-canvas-wrapper">
        <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <div class="off-canvas-content" data-off-canvas-content> */}
        <Routes/>
          <hr/>
          {/* <Footer/> */}
        {/* </div>
      </div>
    </div> */}

    
    </div>
    );
}

// onClick(ev) {
//   console.log("Sending a GET API Call !!!");
//   axios.get('/users/')
//   .then(res => {
//           console.log('users data', res.data)
//   }).then(response => {
//       console.log(JSON.stringify(response));
//   })    
// } 

}

export default App;