import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Login from '../Login/Login'

import axios from 'axios';


class Signup extends Component {
  constructor(props){
       super(props);
       this.state = {
       username : '',
       password : '',
       email : ''
  }

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
              <input type="text" class="form-control input-lg" name="email" placeholder="Email" onChange={this.handleChange.bind(this)} value={this.state.email} required="required"/>
          </div>
          <div class="form-group">
              <input type="password" class="form-control input-lg" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} value={this.state.password} required="required"/>
          </div>        
          <div class="form-group">
              <button type="button" onClick={this.onClick.bind(this)} class="btn btn-success btn-lg btn-block login-btn">Sign up</button>
          </div>
      </form>
      </div>

        </div>
        );
      }



      onClick(ev) {
        let data = JSON.stringify({
                password: this.state.password,
                username: this.state.username,
                email: this.state.email
               })
     
       axios.post('/signup', data, {
         headers: {
           'Content-Type': 'application/json',
           'accept': 'application/json'
         }
       })
       .then(res => {
               console.log('signup success',res.data)
               this.props.history.push("/login");

       })   
     }

  }


export default Signup;