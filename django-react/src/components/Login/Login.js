import React, { Component } from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Routes } from '../../routes';
import axios from 'axios';
import './Login.css';
import Hello from './Hello';

import { Button, Modal } from 'react-bootstrap';



class Login extends Component {

  constructor(props){
       super(props);
       this.state = {
       username : '',
       password : '',
       showMOdal: false,
  }
  this.open = this.open.bind(this)
  this.close = this.close.bind(this)
}

    // Close user data editable popup
    close() {
      this.setState({ showModal: false });
      }
  // Open user data editable popup
  open(data) {
      console.log('onclick');
      this.setState({ showModal: true});
      }

 handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

    render() {
          return (
            <div>
      <Hello/>
  <div class="login-form">
      <form method="post">		
          <div class="text-center social-btn">
              <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-primary btn-lg btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
              <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-info btn-lg btn-block"><i class="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                    <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-danger btn-lg btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
          </div>
          <div class="or-seperator"><b>or</b></div>
          <div class="form-group">
              <input type="text" class="form-control input-lg" name="username" placeholder="Username" onChange={this.handleChange.bind(this)} value={this.state.username} required="required"/>
          </div>
          <div class="form-group">
              <input type="password" class="form-control input-lg" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} value={this.state.password} required="required"/>
          </div>        
          <div class="form-group">
              <button type="button" onClick={this.onClick.bind(this)} class="btn btn-success btn-lg btn-block login-btn">Sign in</button>
          </div>
      </form>
      <div class="text-center"><span class="text-muted" >Don't have an account?</span> <a >Sign up here</a></div>
      </div>




       {/* Data modal or popup to change the user data  */}
       <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Please Change {this.state.changeKey}</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleSubmit}>
          <Modal.Body>
       
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" class="btn btn-primary" onClick={this.close.bind(this)}>Submit</Button>
          </Modal.Footer>
          </form>
        </Modal>
   




        </div>
        );
      }



onClick(ev) {
    
   let data = JSON.stringify({
           password: this.state.password,
           username: this.state.username
          })

  axios.post('/api/token/', data, {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  })
  .then(res => {
    localStorage.setItem('accessToken', res.data.access)
    localStorage.setItem('refreshToken', res.data.refresh)
          console.log('token',res.data)
  })   
}



  }



export default Login;


















