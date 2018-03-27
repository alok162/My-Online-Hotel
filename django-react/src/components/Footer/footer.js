import React, { Component } from 'react';


class Footer extends Component {
  render() {
      return (
      <div>
            <div class="row">
            {/* <div class="medium-6 columns">
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
            </div> */}



    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="block wow fadeInLeft"  data-wow-delay="200ms">
                        <h3>CONTACT <span>INFO</span></h3>
                        <div class="info">
                            <ul>
                                <li>
                                  <h4><i class="fa fa-phone"></i>Telefone</h4>
                                  <p>(000) 123 456 78- (000) 123 4567 89</p>
                                    
                                </li>
                                <li>
                                  <h4><i class="fa fa-map-marker"></i>Address</h4>
                                  <p>2046 Blue Spruce Lane Laurel Canada</p>
                                </li>
                                <li>
                                  <h4><i class="fa fa-envelope"></i>E mail</h4>
                                  <p>rest@gmail.com - rest@mail.ru</p>
                                  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="block wow fadeInLeft"  data-wow-delay="700ms">
                        <h3>LATEST <span>BLOG POSTS</span></h3>
                        <div class="blog">
                            <ul>
                                <li>
                                    <h4><a href="#">Nov 9-2014</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur ut blandit sapien</p>
                                </li>
                                <li>
                                    <h4><a href="#">Sep 8-2014</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur ut blandit sapien</p>
                                </li>
                            </ul>                
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
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
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-behance"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="block">
                        <p>Copyright &copy; 2014 - All Rights Reserved.Design and Developed By <a href="http://www.themefisher.com">Themefisher</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>


          </div>
    </div>
    );
}

}

export default Footer;