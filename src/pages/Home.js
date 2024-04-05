import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
  <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img
                src="images/main-banner-1.jpg"
                className='img-fluid rounded-3'
                alt="main banner"
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                  src="images/catbanner-01.jpg"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src="images/catbanner-02.jpg"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But iPad Air</h5>
                  <p
                  >From $999.00 <br />or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src="images/catbanner-03.jpg"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But iPad Air</h5>
                  <p>
                    From $999.00 <br/> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src="images/catbanner-04.jpg"
                  className='img-fluid rounded-3'
                  alt="main banner"
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But iPad Air</h5>
                  <p>
                    From $999.00 <br />or $41.62/mo.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service.png" alt="services"/> 
                <div>
                  <h6>Free Shipping</h6>  
                  <p className='mb-0'>From all orders over $5</p>
                </div>                 
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-02.png" alt="services"/> 
                <div>
                  <h6>Daily Surprise Offers</h6>  
                  <p className='mb-0'>Save upto 25% off</p>
                </div>                  
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-03.png" alt="services"/>  
                <div>
                  <h6>Support 24/7</h6>  
                  <p className='mb-0'>Shop with an expert</p>
                </div>                 
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-04.png" alt="services"/> 
                <div>
                  <h6>Affordable Prices</h6>  
                  <p className='mb-0'>Get Factory Default Price</p>
                </div>                  
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-05.png" alt="services"/>   
                <div>
                  <h6>Secure payments</h6>  
                  <p className='mb-0'>100% rotected payment</p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera"/>
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div>
            </div>              
          </div>            
        </div>
      </div>
    </section>
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
              src="images/iphone-15.jpg"
              className='img-fluid'
              alt="famous"
              />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>15-Pro</h6>
                <p></p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
              src="images/casio.jpg" 
              className="img-fluid"
              alt="famous" 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>casio</h5>
                <h6 className='text-dark'>LTP-E157M-7A</h6>
                <p className='text-dark'></p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
              src="images/Q45.webp" 
              className="img-fluid"
              alt="famous" 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>headphone</h5>
                <h6 className='text-dark'>Q45</h6>
                <p className='text-dark'>
                  Hot

                </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
              src="images/tab.jpg" 
              className="img-fluid"
              alt="famous" 
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>iPad</h5>
                <h6 className='text-dark'>10 inch</h6>
                <p className='text-dark'>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>
      </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
    <section className='marque-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 x-25'>
                  <img src="images/brand-01.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-02.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-03.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-04.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-05.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-06.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-07.png" alt="brand"/>
                </div>
                <div className='mx-4 x-25'>
                  <img src="images/brand-08.png" alt="brand"/>
                </div>          
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
          <div className='col-3'>
            <BlogCard/>
          </div>
        </div>
      </div>
    </section> 
    

  </>
  );
};

export default Home;