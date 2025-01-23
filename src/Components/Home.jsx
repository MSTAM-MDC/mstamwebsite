/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bannerimage.png";

const imageAltText = "Hyper-realistic landscape featuring a crystal-clear lake, lush green forests, majestic mountains in the background, and a clear blue sky, with reflections of the mountains and trees in the still water, creating a peaceful and tranquil atmosphere.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        color: "white",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        width: "80%",
      }}>
        <h1 style={{ fontSize: "4rem", margin: "0" }}>{name}</h1>
        <h2 style={{ fontSize: "1.8rem", margin: "0.5rem 0" }}>{title}</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="#portfolio" style={{
            backgroundColor: "#246C7F",
            color: "white",
            padding: "0.8rem 2rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}>
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
