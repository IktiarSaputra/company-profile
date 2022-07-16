import React from 'react'

import './Service.css'

import Iconshape1 from '../../assets/img/resource/icon_shape_1.png'
import Iconshape2 from '../../assets/img/resource/icon_shape_2.png'
import Iconshape3 from '../../assets/img/resource/icon_shape_3.png'
import Iconshape4 from '../../assets/img/resource/icon_shape_4.png'
import Iconshape5 from '../../assets/img/resource/icon_shape_5.png'
import Iconshape6 from '../../assets/img/resource/icon_shape_6.png'

const Service = () => {
  return (
    <section class="service-section bg-white">
            <div class="container">
                <div class="section-title">
                    <span class="subtitle">our services</span>
                    <h2>Let’s Check Our Services</h2>
                    <p>Does any industry face a more complex audience journey and marketing sales process than B2B technology .Does any industry face a more complex audience.</p>
                </div>
                <div class="row pt-70">
                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-magnify-glass2"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape1} alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="services.html">market research</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-code"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape2}  alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="services.html">digital Marketing</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-mic"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape3}  alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="services.html">Social Media</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-call-center"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape4}  alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="services.html">IT consalting</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-server2"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape5} alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="#home">SEO &amp; Backlinks</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 pb-70">
                        <div class="item-single">
                            <div class="icon">
                                <i class="envy envy-server"></i>
                                <div class="icon-bg">
                                    <img src={Iconshape6} alt="icon_shape"/>
                                </div>
                            </div>
                            <div class="item-content">
                                <h6><a href="services.html">Hosting &amp; Email</a></h6>
                                <p>Strategy experience and analytical expertise combine to enable. Strate great experience.</p>
                                <a href="services.html" target="_self" class="btn btn-text-only">read more <i class="envy envy-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Service