/**
 * Experience component
 * 
 * Displays professional experience in a clean and visually appealing format.
 * Each role is highlighted with the title, company, duration, and key achievements.
 */

import React from "react";

const experience = [
  {
    role: "Professional Services Consultant Intern",
    company: "Amazon Web Services (AWS)",
    location: "Arlington, VA",
    duration: "May 2022 – August 2022",
    description:
      "Collaborated with cross-functional teams to implement back-end AWS services, ensuring compliance and enhancing accessibility for 200+ offerings.",
    achievements: [
      "Achieved 99.9% uptime and <3ms response time, improving user experience for high-security clients.",
      "Developed workflows and documentation, streamlining decision-making and boosting operational efficiency.",
    ],
  },
  {
    role: "Business Analyst, Transportation Operations",
    company: "Johnson & Johnson",
    location: "Skillman, NJ",
    duration: "April 2021 – July 2021",
    description:
      "Optimized transportation operations and reduced costs by analyzing and improving processes for a global portfolio.",
    achievements: [
      "Improved compliance efficiencies in 5 distribution centers, achieving monthly targets for on-time performance.",
      "Supported M&A transitions by resolving bottlenecks and sharing insights, driving seamless integration.",
    ],
  },
  {
    role: "Transportation Analyst",
    company: "Ferrero U.S.A., Inc.",
    location: "Parsippany, NJ",
    duration: "June 2019 – March 2021",
    description:
      "Analyzed logistics data and led performance improvements to optimize transportation processes and client satisfaction.",
    achievements: [
      "Increased on-time delivery rate from 86.9% to 95.7%, eliminating late penalties for a premier client.",
      "Improved compliance rate for key accounts from 14% to 80% by leading high-performance improvement meetings.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="padding" id="experience">
      <h2 style={{ textAlign: "center" }}>Professional Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>
                {exp.role} at {exp.company}
              </h3>
              <p className="small" style={{ fontWeight: "bold" }}>
                {exp.location} | {exp.duration}
              </p>
              <p>{exp.description}</p>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;