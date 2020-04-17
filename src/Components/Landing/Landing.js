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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                quod aut porro enim fugit numquam vero inventore quisquam
                provident, qui delectus itaque officia obcaecati ea voluptatem,
                laudantium facilis eveniet! Iste! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Expedita illo ut nobis quod
                officia adipisci iusto autem perferendis voluptas delectus? Quo
                voluptates, nihil eaque tempora quibusdam eveniet dignissimos!
                Quam, accusamus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut pariatur maxime iste illo neque iure
                tempore veniam nemo magni tempora ad eaque voluptas, eum sit
                excepturi placeat doloribus. Unde, harum.
              </span>
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
