/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    Feedback from clients and colleagues.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/andrew.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                        Andrew Cheung
                        </h6>
                        <span className="author-details">
                          COO, OMNI Agency
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Franklin's strong work ethic is truly commendable. 
                  He consistently goes the extra mile, exhibiting unwavering dedication 
                  to delivering exceptional results.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                      <div className="img">
                          <img src="/img/clients/aa.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Adebayo Adeleke
                        </h6>
                        <span className="author-details">
                          Founder, Adebayo Adeleke LLC
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  It is safe to say that my organization will not be where it is 
                  today without the creative input and value driven contributions 
                  of Franklin. 
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/emma.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Emmanuel Nwanja
                        </h6>
                        <span className="author-details">
                          CEO, VitroWire
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  What sets Franklin apart is his adaptability and eagerness 
                  to stay at the forefront of design trends and technological 
                  advancements.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/tommy.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Unyime Tommy
                        </h6>
                        <span className="author-details">
                          Managing Partner, Assurdly
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  He is a true professional, and I have no doubt that he 
                  would make a valuable asset to any team.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
