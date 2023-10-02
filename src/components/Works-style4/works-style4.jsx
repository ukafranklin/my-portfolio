/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 50);
  }, []);


  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                My Portfolio
              </h6>
              <h3 className="wow color-font">
                Recently Completed Design <br /> and Web Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter=".product" className="active">Product Design</span>
              <span data-filter=".web">Websites</span>
              <span data-filter=".graphic">Creatives</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Post Design</h6>
                  <p>O-mee</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cr1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>


            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Mascot Design</h6>
                  <p>AMMO Gaming</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cr4.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>



            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Partnership Announcement</h6>
                  <p>O-mee</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cr5.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Post Design</h6>
                  <p>Wagmi Games</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cr6.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>


            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>NFT Card Reveal</h6>
                  <p>Nemus Earth</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/bb.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Game Character Reveal</h6>
                  <p>Uforika</p>
                </div>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cr8.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>


            

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Uforika</h6>
                  <p>Framer Website</p>
                </div>
                <Link href={`https://circle-regulate-597221.framer.app`}>
                  <a className="rota" target="_blank">
                    <img src="/img/portfolio/freelancer/w1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Web3
                  </span>
                  <span>Metaverse
                  </span>
                  <span>Gaming
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>BestSlr</h6>
                  <p>Wordpress | Elementor Website</p>
                </div>
                <Link href={`https://bestslr.com/`}>
                  <a className="rota" target="_blank">
                    <img src="/img/portfolio/freelancer/w2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Brand
                  </span>
                  <span>Influencer
                  </span>
                  <span>Marketing
                  </span>
                </div>
              </div>
            </div>



            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Omni Agency</h6>
                  <p>Webflow Website</p>
                </div>
                <Link href={`https://omniagency.ca/`}>
                  <a className="rota" target="_blank">
                    <img src="/img/portfolio/freelancer/w5.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Web3
                  </span>
                  <span>Marketing
                  </span>
                  <span>Crypto
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Emerge</h6>
                  <p>Wix Website</p>
                </div>
                <Link href={`https://emerge.partners/`}>
                  <a className="rota" target="_blank">
                    <img src="/img/portfolio/freelancer/w6.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Invest
                  </span>
                  <span>Web3
                  </span>
                  <span>Portfolio
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>RouteWatche</h6>
                  <p>Personal safety app in Nigeria</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/RW1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Security
                  </span>
                  <span>Incident
                  </span>
                  <span>Safety
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>DataNexi</h6>
                  <p>Data collection and insights platform</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/DN1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Data
                  </span>
                  <span>Statistics
                  </span>
                  <span>Report
                  </span>
                </div>
              </div>
            </div>




            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Straw</h6>
                  <p>Personalized savings and budgeting app</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Straw.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Savings
                  </span>
                  <span>Wallet
                  </span>
                  <span>Budget
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Vsion</h6>
                  <p>Movie streaming app for friends</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/vs1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Movies
                  </span>
                  <span>Streaming
                  </span>
                  <span>TV Shows
                  </span>
                </div>
              </div>
            </div>


          
            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Difa</h6>
                  <p>Digital financial assistant</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Difa2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Finances
                  </span>
                  <span>Savings
                  </span>
                  <span>Wallet
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 items product wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Tempo</h6>
                  <p>Online community for football fans</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/TE1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>Football
                  </span>
                  <span>Community
                  </span>
                  <span>Fixtures
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;