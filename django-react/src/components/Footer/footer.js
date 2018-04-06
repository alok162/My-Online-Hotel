import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Footer.css'
import GoogleMap from './GoogleMap'

class Footer extends Component {
  render() {
      return (
      <div>
            <div className="row footer-centre">
            {/* <div className="medium-6 columns">
              <h3>Contact Me</h3>
              <div><i classNameName="fa fa-spinner fa-spin">no spinner but why</i></div>
              <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
              <ul className="menu">
                <li><a href="#">Dribbble</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Yo</a></li>
              </ul>
            </div>
            <div className="medium-6 columns">
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
              <input type="submit" className="button expanded" value="Submit"/>
            </div> */}




            <section id="footer">
        <div className="container">
               <div className="medium-4 columns">
                {/* <div className="col-md-4"> */}
                    <div className="block wow fadeInLeft"  data-wow-delay="200ms">
                        <h3>CONTACT <span>INFO</span></h3>
                        <div className="info">
                            <ul>
                                <li>
                                  <h4><i className="fa fa-phone"></i>Telefone</h4>
                                  <p>( +91 ) 814 - 851 - 0823 </p>
                                </li>
                                <li>
                                  <h4><i className="fa fa-map-marker"></i>Address</h4>
                                  <p>CANARA BANK APARTMENT BTM 2ND STAGE BENGALURU</p>
                                </li>
                                <li>
                                  <h4><i className="fa fa-envelope"></i>E mail</h4>
                                  <p>alokchoudhary162@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="medium-4 columns">
                {/* <div className="col-md-4"> */}
                    <div className="block wow fadeInLeft"  data-wow-delay="700ms">
                        <h3>LATEST <span>BLOG POSTS</span></h3>
                        <div className="blog">
                            <ul>
                                <li>
                                    <h4><a href="#">Mar 9-2018</a></h4>
                                    <p>Latest grilled pizza with chessy cryspy tossed</p>
                                </li>
                                <li>
                                    <h4><a href="#">Mar 8-2018</a></h4>
                                    <p>Chicken biriyani in grilled cooked basmati rice with spiciness </p>
                                </li>
                                <li>
                                    <h4><a href="#">Mar 8-2018</a></h4>
                                    <p>Chicken biriyani in grilled cooked basmati rice with spiciness </p>
                                </li>
                            </ul>                
                        </div>
                    </div>
                </div>
                <div className="medium-4 columns">
                {/* <div className="col-md-4"> */}
                    <div className="block wow fadeInLeft"  data-wow-delay="1100ms">
                    <div className="social-media-link">
                            <h3>FOLLOW <span>US</span></h3>
                            <ul>
                            <li>
                                <a href="#">
                                        <i classNameName="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-dribbble"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="gallary">
                            <h3>PHOTO <span>STREAM</span></h3>
                            < GoogleMap />
                        </div>
                        {/* <div className="social-media-link">
                            <h3>Follow <span>US</span></h3>
                            <ul>
                            <li>
                                <a href="#">
                                        <i classNameName="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i classNameName="fa fa-dribbble"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div> */}
                    </div>
                </div>
                </div>
    </section>
       

          </div>
          <footer id="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="block">
                        <p>Copyright &copy; 2018 - All Rights Reserved.Design and Developed By <a href="https://www.linkedin.com/in/alok-choudhary-1b028310a/">DALOKROCKSTAR</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    );
}

}

export default Footer;