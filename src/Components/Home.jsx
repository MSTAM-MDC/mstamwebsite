/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";

/**
 * Home background image
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import it here for use. Then, set imageAltText to a string that
 * represents what you see in that image.
 * Need an image? Check out https://unsplash.com to download a photo you
 * can freely use on your site.
 */
import image from "../images/bannerimage.png";

const imageAltText = "A hyper-realistic landscape featuring a crystal-clear lake, lush green forests, majestic mountains in the background, and a clear blue sky, with reflections of the mountains and trees in the still water, creating a peaceful and tranquil atmosphere.";

/**
 * Home component
 * Displays the main hero section with a background image, name, and title.
 * Includes a call-to-action button leading to the portfolio section.
 */
const Home = ({ name, title }) => (
  <section id="home" className="min-height" style={{ position: "relative" }}>
    <img className="background" src={image} alt={imageAltText} />
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        color: "#fff",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        maxWidth: "80%",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>{name}</h1>
      <h2 style={{ fontSize: "1.8rem", margin: "0.5rem 0" }}>{title}</h2>
      <div style={{ marginTop: "1.5rem" }}>
        <a
          href="#portfolio"
          style={{
            backgroundColor: "#246C7F",
            color: "#fff",
            padding: "0.8rem 2rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          View My Work
        </a>
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        bottom: "3rem",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <img
        src={arrowSvg}
        alt="Down arrow indicating to scroll down"
        style={{ height: "3rem", width: "3rem" }}
      />
    </div>
  </section>
);

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
