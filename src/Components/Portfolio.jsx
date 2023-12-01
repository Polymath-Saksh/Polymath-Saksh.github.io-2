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
import image from "../images/saksh_back.jpg";

const imageAltText = "Saksham Kumar in an open space";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "USGS Earthquake Data Visualisation",
    description:
      "This project is to build a web application that visualizes US geological data. The data is collected from the USGS (United States Geological Survey) API.",
    url: "https://github.com/Polymath-Saksh/USGS-EQ-Data-Visualisation",
  },
  {
    title: "VM to ASM Converter",
    description:
      "A Virtual Machine to ASM translator © NAND2Tetris Course in Python Language",
    url: "https://github.com/Polymath-Saksh/VM_ASM_python",
  },
  {
    title: "Weather Forecasting Tool",
    description:
      "This program utilizes the OpenWeatherMap Geocoding API to convert a city name to its corresponding latitude and longitude coordinates. It provides a simple way to retrieve the geographic information of a city using the OpenWeatherMap service.",
    url: "https://github.com/Polymath-Saksh/Weather-Forecasting-Tool",
  },
  {
    title: "Stocks Analysis Tool",
    description:
      "A tool to visualise Stock Analysis, deployed on Vercel",
    url: "https://github.com/Polymath-Saksh/stocks-analysis",
  },
  {
    title: "Library Management System",
    description:
      "Basic Library Management with both admin and user interfaces. Allows adding and removing Books, Users by Admin. As a user, it can issue, search, and return books(with fine calculation). Utilities Django as the Backend Framework, MySQL for DBMS and HTML+CSS for Frontend.",
    url: "https://github.com/Polymath-Saksh/Library",
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
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft"}}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
