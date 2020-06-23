import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
        <div>
            <div className="features-icons bg-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-screen-desktop m-auto text-primary"></i>
                                </div>
                                <h3>About</h3>
                                <p className="lead mb-0">Dedicated bunch of developers</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-layers m-auto text-primary"></i>
                                </div>
                                <h3>Goals</h3>
                                <p className="lead mb-0">Enpowering future of students with technology</p>
                            </div>
                        </div>    
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"></i>
                                </div>
                                <h3># next one</h3>
                                <p className="lead mb-0"> will come here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>    
                <div className="testimonials text-center bg-white">
                    <div className="container">
                        <h2 className="mb-5">Testimonial...</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src="img/testimonials1-1.jpg" alt="" />
                                    <h5>Praveen.</h5>
                                    <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src="img/testimonials1-2.jpg" alt="" />
                                    <h5>Nirmal.</h5>
                                    <p className="font-weight-light mb-0">"BrainBin is amazing. I've been using it to create lots of super nice landing pages."</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" alt="" />
                                    <h5>Vijay.</h5>
                                    <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

