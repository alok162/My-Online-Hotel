import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Footer.css'


class Footer extends Component {
  render() {
      return (
      <div>
            <div class="row">
            {/* <div class="medium-6 columns">
              <h3>Contact Me</h3>
              <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>
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
            </div> */}







    
            <section id="footer">
        <div class="container">
               <div class="medium-4 columns">
                {/* <div class="col-md-4"> */}
                    <div class="block wow fadeInLeft"  data-wow-delay="200ms">
                        <h3>CONTACT <span>INFO</span></h3>
                        <div class="info">
                            <ul>
                                <li>
                                  <h4><i class="fa fa-phone"></i>Telefone</h4>
                                  <p>( +91 ) 814 - 851 - 0823 </p>
                                </li>
                                <li>
                                  <h4><i class="fa fa-map-marker"></i>Address</h4>
                                  <p>CANARA BANK APARTMENT BTM 2ND STAGE BENGALURU</p>
                                </li>
                                <li>
                                  <h4><i class="fa fa-envelope"></i>E mail</h4>
                                  <p>alokchoudhary162@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="medium-5 columns">
                {/* <div class="col-md-4"> */}
                    <div class="block wow fadeInLeft"  data-wow-delay="700ms">
                        <h3>LATEST <span>BLOG POSTS</span></h3>
                        <div class="blog">
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
                <div class="medium-3 columns">
                {/* <div class="col-md-4"> */}
                    <div class="block wow fadeInLeft"  data-wow-delay="1100ms">
                        <div class="gallary">
                            <h3>PHOTO <span>STREAM</span></h3>
                            <ul>
                                <li>
                                    <a href="#"><img src="images/photo/photo-1.jpg" alt=""/></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/photo/photo-2.jpg" alt=""/></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/photo/photo-3.jpg" alt=""/></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/photo/photo-4.jpg" alt=""/></a>
                                </li>
                            </ul>
                        </div>
                        <div class="social-media-link">
                            <h3>Follow <span>US</span></h3>
                            <ul>
                            <li>
                                <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
    </section>
       
 


          </div>
          <footer id="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="block">
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