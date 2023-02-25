import React from "react";
import Hero from "../../Assets/hero.jpg";
import Resume from "../../Assets/SusmitaDas.pdf"
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero bg-blue-400">
          <h1>Welcome to my Portfolio</h1>
          <p>Discover my work and skills</p>
          <button>View My Work</button>
        </div>
        <div className="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm Susmita Das, a web developer based in India. I specialize in
            building responsive and user-friendly websites using the latest
            technologies.
          </p>
          <button>
            <a
              href={Resume}
              download
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project">
              <img src={Hero} alt="Project 1" />
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="project">
              <img src={Hero} alt="Project 2" />
              <h3>Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="project">
              <img src={Hero} alt="Project 3" />
              <h3>Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <button>View More Projects</button>
        </div>
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>
                "John is an amazing web developer. He delivered my project on
                time and exceeded my expectations."
              </p>
              <p className="name">- Jane Doe</p>
            </div>
            <div className="testimonial">
              <p>
                "Working with John was a great experience. He was very
                professional and responsive."
              </p>
              <p className="name">- Bob Smith</p>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Home;
