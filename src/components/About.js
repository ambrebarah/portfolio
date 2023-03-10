import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          I'm a passionate developer with expertise in both front-end and back-end development.
          </p>
          <p className="pb-5">
          Over the years, I've had the opportunity to work on a variety of projects using a range of technologies. I have experience building responsive, user-friendly web applications with modern front-end frameworks such as React, Laravel, and Symfony. On the back-end, I'm comfortable working with languages such as Node.js, PHP, and javascript, as well as databases such as MongoDB and MySQL.
          </p>

          <p className="pb-5">In my portfolio, you'll find examples of my work, including full-stack web applications and other projects that showcase my technical abilities.</p>
    
          <p>
          If you're interested in working with me or have any questions, please don't hesitate to reach out! You can contact me through the contact form on my portfolio, or find me on LinkedIn.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
