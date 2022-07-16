import React from 'react'

import image from '../../assets/img/banner/banner_2.png'


const Hero = () => {
    return (
        <div id="home" class="home-banner-area banner-type-two">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="banner-content">
                            <h1>Get Solution <br /> For Your Business</h1>
                            <p>
                                No more Search. World's No. 1 IT Solution Center for your better security. Loo car boot
                                bodge smashing I up the duff!
                            </p>
                            <div class="cta-btn">
                                <a href="../../Solit-html/index.html" class="btn btn-solid">Try for free</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="banner-image">
                            <img src={image} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
