import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MusicPlayer.css';
import {
  isSpeechRecognitionSupported,
  SpeechRecognition
} from 'react-native-web-speech-api';


class MusicPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
        isPlaying : false,
        isPause : false,
        speech : ''
   }
   this.play = this.play.bind(this);
   this.myfunc = this.myfunc.bind(this)
  //  this.recognition.onresult = this.recognition.onresult.bind(this)

 }
 componentDidMount() {


var recognizer = new SpeechRecognition();

// Start producing results before the person has finished speaking
recognizer.interimResults = false;
recognizer.continuous = true;
// Set the language of the recognizer
recognizer.lang = 'en-US';

// Define a callback to process results
recognizer.onresult = function (event) {
  var result = event.results[event.resultIndex];

  if (result.isFinal) {
    this.setState({speech: result[0].transcript.trim()})
    this.myfunc()
    
  } else {
   console.log('Interim result', result[0].transcript);
  }
  console.log('final', this.state.speech)

}.bind(this);
  recognizer.onend = function() {
    recognizer.start();
}.bind(this);
// Start listening...
recognizer.start();

 }
    song = new Audio(require('../Nav-Bar-Bottom/Buzz.mp3'))
    
    play() {
        // this.setState.isPlaying = truethis.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'this.state.speech==='play'
        if(this.state.isPlaying) {
            this.song.pause();
            this.setState({isPlaying: false}) 
        }
        else {
            this.setState({isPlaying: true})
            this.song.play();
            console.log(this.state.isPlaying)
        }
    }

    myfunc() {
      console.log('called my function',this.state.speech,'play',this.state.speech.length)
      if(this.state.speech==="play" || "play".match('/'+this.state.speech+'/')) {
        console.log('inside play if condition',this.state.speech)
            this.play()
       }
  
   if(this.state.speech==='stop') {
    console.log('inside if condition',this.state.speech)
    this.play()
  }
    }

  render() {
      return (
  // <div class="container music-container">
  <div class="row music-player">
  {/* <div class="col-md-4">.col-md-4</div> */}
  
{/* </div> */}

    <div class="col-md-3">
      <div class="body__cover">
        <img src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg" alt="Album cover" />
      </div>
      </div>
      {/* <div class="col-md-2">
      <div class="body__info">
        <div class="info__album">The Hunting Party</div>

        <div class="info__song">Final Masquerade</div>

        <div class="info__artist">Linkin Park</div>
      </div>
      </div> */}
      <div class="col-md-5">
      <div class="body__buttons">
        <ul class="list list--buttons">
          <li><a href="#" class="list__link"><i class="fa fa-step-backward"></i></a></li>

          <li><a class="list__link"><i crossOrigin="anonymous" allow="autoplay" onClick = {this.play.bind(this)} class={this.state.isPlaying ? "fa fa-pause" : "fa fa-play" }></i></a></li>

          <li><a href="#" class="list__link"><i class="fa fa-step-forward"></i></a></li>

          <li><a href="#" class="list__link"><i class="fa fa-random"></i></a></li>
        </ul>
      </div>


      </div>
      <div class="col-md-4">
      <div class="range"></div>
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
  // </div>


    );
}

}

export default MusicPlayer;