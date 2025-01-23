/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/idea.png";

const imageAltText = "laptop with lightbulb on top";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Modeling U.S. Suicide Rate Risk",
    description:
      "Created an interactive Tableau dashboard that analyzed and visualized suicide rate trends across the U.S., used by researchers to identify high-risk regions and inform intervention policies.",
    impact: "Led to actionable insights used in policy recommendations.",
    url: "https://public.tableau.com/views/ModelingU_S_SuicideRateRisk1/Main?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Hate Speech Detection",
    description:
      "Built an AI-powered hate speech detector with a 95% accuracy rate, offering real-time analysis and structured JSON reporting for broader applications.",
    impact: "Facilitated real-time content moderation tools for social platforms.",
    url: "https://hatespeech-detection.streamlit.app/",
  },
  {
    title: "Computer Vision Projects",
    description:
      "Developed innovative solutions like facial recognition, motion tracking, and color segmentation using OpenCV and MNIST data, enabling creative applications of computer vision.",
    impact: "Showcased technical versatility and problem-solving in diverse domains.",
    url: "https://github.com/MSTAM-MDC/opencv",
  },
  {
    title: "Personal Resume Website",
    description:
      "Designed and deployed a professional portfolio site featuring my skills, experience, and accomplishments, attracting over 500 visitors per month.",
    impact: "Enhanced visibility and demonstrated web development expertise.",
    url: "https://github.com/MSTAM-MDC/mstamwebsite",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div className="impact-container">
                <p className="impact"><strong>Impact:</strong> {project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
