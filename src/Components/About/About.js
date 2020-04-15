import React, { useEffect } from 'react';
import { animateScroll as scroll } from "react-scroll";
import "./About.css";

const About = () => {

    useEffect(() => {
        scroll.scrollToTop();
    }, [])

    return (
        <div className="about animated fadeInDown">
            <title>ABOUT</title>
            <div className="container-fluid banner">
                <h1>Heading</h1>
            </div>
            <div className="container py-5">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos ad magnam, praesentium sed a voluptatibus cumque cum repudiandae velit dolorum quo quos! Sapiente voluptates saepe unde beatae ullam pariatur?
          </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum porro error asperiores, sapiente sint id sequi facere suscipit cupiditate maiores obcaecati libero exercitationem possimus qui rem quae culpa enim!
          </p>
            </div>
        </div>
    )
}
export default About;