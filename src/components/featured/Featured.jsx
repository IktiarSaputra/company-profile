import React from 'react'

const Featured = () => {
return (
<section id='feature' class="top-feature-section ptb-100 bg-white">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12">
                <div class="section-title">
                    <span class="subtitle">top features</span>
                    <h2>What We Provide For Your Successful Business</h2>
                </div>
                <div class="feature-text-blc">
                    <p>
                        If you’re searching for talented tech minds who are dedicated to their work, we are a perfect
                        fit. We are a dynamic software development company based in the USA. Solit workers have been
                        working on various
                        large-scale &amp; complex projects. Solit has over 30 years of experience, always meeting
                        clients.
                    </p>
                </div>
                <div class="cta-btn">
                    <a href="about.html" class="btn btn-solid">Read more <i class="envy envy-right-arrow"></i></a>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12">
                <div class="row">
                    <div class="col-lg-6 col-sm-6">
                        <div class="single-feature">
                            <div class="single-feature-content">
                                <i class="envy envy-cloud-computing1"></i>
                                <h3 class="mt-3">market research</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="single-feature">
                            <div class="single-feature-content">
                                <i class="envy envy-code2"></i>
                                <h3 class="mt-3">It <br /> computing</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="single-feature">
                            <div class="single-feature-content">
                                <i class="envy envy-global"></i>
                                <h3 class="mt-3">SEO Optimization</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="single-feature">
                            <div class="single-feature-content">
                                <i class="envy envy-server"></i>
                                <h3 class="mt-3">Data <br /> Analitics</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="shape">
        <img src="assets/img/resource/circle_shape.png" alt="circle" />
        <span class="dot-1"></span>
        <span class="dot-2"></span>
        <span class="dot-3"></span>
        <span class="dot-4"></span>
        <span class="dot-5"></span>
    </div>
</section>
)
}

export default Featured
