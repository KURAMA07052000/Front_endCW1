import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../about.css';

export const AboutUs = () => {
    return (
        <>
            <h2 id="AboutUs">ABOUT US</h2>
            <section id="about">
                <div className="about-1">

                    <p style={{ fontweight: "900" }}>Welcome to our Recipe services. We aim to serve, find a variety of mouth watering meals just for YOU. Please contact us on kevin.urama@gmail.com or number +44 772476808. Thanks</p>
                    <div id="about-2">
                        <div className="content-box-lg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="about-item text-center">
                                            <i className="fa fa-book"></i>
                                            <h6>MISSION</h6>
                                            <hr></hr>
                                            <p>We aim to inspire and connect our community through culture and food. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="about-item text-center">
                                            <i className="fa fa-pencil"></i>
                                            <h6>ACHIEVMENTS</h6>
                                            <hr></hr>
                                            <p>Reaching many varieties of people worldwide and teaching new ways of cooking</p>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="about-item text-center">
                                            <i className="fa fa-globe"></i>
                                            <h6>VISION</h6>
                                            <hr></hr>
                                            <p>From the begining, we aim to inspire and connect our community through culture and food</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
         

            <a class="top" href="#">Back to Top ↑</a>


        </>
    )
}
