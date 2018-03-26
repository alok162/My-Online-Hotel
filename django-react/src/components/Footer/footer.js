import React, { Component } from 'react';


class Footer extends Component {
  render() {
      return (
      <div>
            <div class="row">
            <div class="medium-6 columns">
              <h3>Contact Me</h3>
              <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
              <ul class="menu">
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Yo</a></li>
              </ul>
            </div>
            <div class="medium-6 columns">
              <label>Name
                <input type="text" placeholder="Name"/>
              </label>
              <label>Email
                <input type="text" placeholder="Email"/>
              </label>
              <label>
                Message
                <textarea placeholder="holla at a designerd"></textarea>
              </label>
              <input type="submit" class="button expanded" value="Submit"/>
            </div>
          </div>
    </div>
    );
}

}

export default Footer;