import React , { Component }from 'react'

import './Best.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class Partner extends Component {
        render(){
            var settings = {
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
    };
    return (
      <div className="partners-slider" id='partners'>
        <Slider {...settings}>
          <div className="partner-item">
            <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_1.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_2.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_3.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_4.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_5.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_6.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_2.png" alt="" className='img-partner' />
          </div>
          <div className="partner-item">
             <img src="https://templates.hibootstrap.com/solit/default/assets/img/partner/partner_1.png" alt="" className='img-partner' />
          </div>
        </Slider>
      </div>
    );
        }
}

export default Partner
