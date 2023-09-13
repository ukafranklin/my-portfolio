/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/DiscordBanner.gif)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
 
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    FEEDBACKS
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Clients Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    It is safe to say that my organization will not be where it is 
                  today without the creative input and value driven contributions 
                  of Franklin. 
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/AA.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Adebayo Adeleke</h6>
                          <span className="author-details">
                            Founder, Adebayo Adeleke LLC
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Franklin's strong work ethic is truly commendable. 
                  He consistently goes the extra mile, exhibiting unwavering dedication 
                  to delivering exceptional results.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/andrew.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Andrew Cheung</h6>
                          <span className="author-details">
                            COO, OMNI Agency
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    He is a true professional, and I have no doubt that he 
                  would make a valuable asset to any team.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/tommy.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Unyime Tommy</h6>
                          <span className="author-details">
                          Managing Partner, Assurdly
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
