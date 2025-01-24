/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-back2.png";

const imageAltText = "Hyper-realistic landscape featuring a crystal-clear lake, lush green forests, majestic mountains in the background, and a clear blue sky, with reflections of the mountains and trees in the still water, creating a peaceful and tranquil atmosphere.";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m Michael Stamler, a Computer Programmer and Analyst passionate about leveraging programming, artificial intelligence, and cloud computing to create scalable, impactful solutions. I see every challenge as an opportunity to grow and contribute positively, driven by a commitment to innovation and making a meaningful impact in the tech industry.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Computer Programming",
  "Artificial Intelligence",
  "Data Analytics",
  "Cybersecurity",
  "Cloud Computing",
  "Data Science",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Never lose hope. Storms make people stronger and never last forever. - Roy T. Bennett";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "800px",
          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div className="skills-container">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
