import React, { useState, useEffect } from "react";
import { CornerDialog, Button } from "evergreen-ui";
import AOS from "aos";
import { Switch as Toggler } from "evergreen-ui";

import { isMobile } from "react-device-detect";

import Hero from "../Hero/Hero";
import TiltCard from "../TiltCard/TiltCard";
import Preview from "../Preview/Preview";
import "./Landing.css";

const Landing = () => {
  const [showPreview, setshowPreview] = useState(false);
  const [previewUrl, setpreviewUrl] = useState("");
  const [AOSDelay, setAOSDelay] = useState(250);
  const [motionToggler, setmotionToggler] = useState(false);

  const preview = (url) => {
    setpreviewUrl(url + `/800/500.jpg`);
    setshowPreview(true);
  };

  const closePreview = () => {
    setshowPreview(false);
    setpreviewUrl("");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    if (isMobile) {
      setAOSDelay(0);
    }
  }, []);

  return (
    <div className="landing">
      {showPreview ? (
        <div className="preview-section">
          <Preview url={previewUrl} close={closePreview} />
        </div>
      ) : (
          <></>
        )}
      <Hero />
      <div className="section-vision animated fadeIn" id="vision">
        <div className="shadow-heading" data-aos="fade-down">
          <hr
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "90vw",
              left: "5vw",
            }}
          />
          <span
            style={{ backgroundColor: "rgb(243, 243, 243)", fontSize: "5vw" }}
            className="john"
          >
            ARTIST'S VISSION
          </span>
          {/* <h1 className="real-text">ARTIST'S VISION</h1>
                    <h1 className='shadow-text'>ARTIST'S VISION</h1> */}
        </div>
        <div className="container my-4 pt-4">
          <div className="row main">
            <div className="col-md-5 d-flex align-items-center justify-content-end photo-col">
              <div className="photo shadow-lg" data-aos="fade-right">
                <img src="https://i.picsum.photos/id/1005/300/400.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-7 d-flex align-items-center justify-content-start pl-4">
              <span className="text-justify my-4 py-4" data-aos="fade-left">
                NITYA SONI is an self taught artist. He is developing his unique
                style of art comprising of both traditionalism and modernism. He
                started painting from his early child hood he had done several
                national and international exhibitions also, He focuses on the
                versatile nature of art aming to influence and inspire the
                viewer in their own perspective through a combination of colour,
                texture and his technique. His Subjects of paintings might seems
                common but usually unnoticed part of the society and our life.
                Despite of being such an young artist his works provide a new
                vision to the viewer to look at the subject in an entirely
                different prespective, now he is expanding his domain and
                welcomes to opportunities provided to him. For him art comes
                from the soul of the artist and ideas help them compose in such
                a manner that the combination of both brings a new creation to
                the world through the artist's hand.
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="section-slideshow container d-flex justify-content-center align-items-center my-4 py-4">
        <div className="row">
          <div className="col" data-aos="zoom-in">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://picsum.photos/id/101/1920/1080" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Caption</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non eligendi a dignissimos ut animi. Dolorum similique</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/id/200/1920/1080" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Caption</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non eligendi a dignissimos ut animi. Dolorum similique</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://picsum.photos/id/103/1920/1080" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Caption</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non eligendi a dignissimos ut animi. Dolorum similique</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div
          className="d-flex justify-content-end align-items-center mx-4 motion-toggler mt-4"
          data-aos="fade-left"
        >
          <span className="mr-2">Hover 3D Animations</span>
          <Toggler
            checked={motionToggler}
            marginBottom={0}
            onChange={() => {
              motionToggler ? setmotionToggler(false) : setmotionToggler(true);
            }}
          />
        </div>
      ) : (
          <></>
        )}

      <div className="section-showcase show-1" id="my-work">
        <div className="shadow-heading" data-aos="fade-down">
          <hr
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "90vw",
              left: "5vw",
            }}
          />
          <span
            style={{ backgroundColor: "white", fontSize: "5vw" }}
            className="john"
          >
            TITLE OF SERIES
          </span>
          {/* <h1 className="real-text">ARTIST'S VISION</h1>
                    <h1 className='shadow-text'>ARTIST'S VISION</h1> */}
        </div>

        {/* <div className="shadow-heading d-flex justify-content-center" data-aos="fade-down">
                    <h1 className="real-text">TITTLE OF SERIES</h1>
                    <h1 className='shadow-text'>TITTLE OF SERIES</h1>
                </div> */}

        <div className="container">
          <div className="row">
            <div
              className="col d-flex align-items-center justify-content-center i1"
              data-aos="zoom-in-down"
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/101");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/101/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
            <div
              className="col d-flex align-items-center justify-content-center i2"
              data-aos="zoom-in-down"
              data-aos-delay={AOSDelay}
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/143");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/143/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col d-flex align-items-start justify-content-center i3"
              data-aos="zoom-in-down"
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/300");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/300/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
            <div
              className="col d-flex align-items-center justify-content-center i4"
              data-aos="zoom-in-down"
              data-aos-delay={AOSDelay}
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/104");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/104/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-showcase show-2">
        <div className="shadow-heading">
          <hr
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "90vw",
              left: "5vw",
            }}
          />
          <span
            style={{ backgroundColor: "white", fontSize: "5vw" }}
            className="john"
          >
            TITLE OF SERIES
          </span>
          {/* <h1 className="real-text">TITTLE OF SERIES</h1>
                    <h1 className='shadow-text'>TITTLE OF SERIES</h1> */}
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col d-flex align-items-center justify-content-center i1"
              data-aos="zoom-in-down"
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/101");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/101/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
            <div
              className="col d-flex align-items-center justify-content-center i2"
              data-aos="zoom-in-down"
              data-aos-delay={AOSDelay}
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/143");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/143/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col d-flex align-items-start justify-content-center i3"
              data-aos="zoom-in-down"
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/300");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/300/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
            <div
              className="col d-flex align-items-center justify-content-center i4"
              data-aos="zoom-in-down"
              data-aos-delay={AOSDelay}
            >
              <div
                onClick={() => {
                  preview("https://i.picsum.photos/id/104");
                }}
              >
                <TiltCard
                  imageUrl="https://i.picsum.photos/id/104/500/500.jpg"
                  motion={motionToggler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
