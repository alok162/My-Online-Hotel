import React, { Component } from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Routes } from '../../routes';



import './Login.css';

class Login extends Component {
    render() {
        // if(localStorage.getItem('user')!='null' || this.state.isLoading){
        //   console.log('after logout inside',this.state.isLoading)
        //   return <Redirect to ="/" />
        // }
          return (
            <div>
      
  <div class="login-form">
      <form method="post">		
          <div class="text-center social-btn">
              <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-primary btn-lg btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
              <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-info btn-lg btn-block"><i class="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
                    <a href="#" onClick={() => { this.authWithFacebook() }} class="btn btn-danger btn-lg btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
          </div>
          <div class="or-seperator"><b>or</b></div>
          <div class="form-group">
              <input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required"/>
          </div>
          <div class="form-group">
              <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required"/>
          </div>        
          <div class="form-group">
              <button type="submit" class="btn btn-success btn-lg btn-block login-btn">Sign in</button>
          </div>
      </form>
      <div class="text-center"><span class="text-muted">Don't have an account?</span> <a href="#">Sign up here</a></div>
      </div>
        </div>
        );
      }
  }



export default Login;