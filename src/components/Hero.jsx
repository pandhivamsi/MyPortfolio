import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ParticlesBackground from "./ParticlesBackground";
import { TypeAnimation } from "react-type-animation";
import { IoRocketOutline } from "react-icons/io5";
import { FaCode, FaServer, FaWrench } from "react-icons/fa6";
import profileImage from "../myImage.jpg";
import task from "../task.jpg";
import userCrud from "../userCrud.png";
import ecom from "../ecom.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-about-wrapper position-relative">
      {/* Particles only once */}
      <ParticlesBackground style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} />

      {/* Hero Section */}
      <section className="hero position-relative d-flex align-items-center min-vh-100" style={{ zIndex: 1 }}>
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="text-md-start text-center">
              <h1 className="fw-bold" style={{ fontSize: "4.5rem", lineHeight: "1" }}>
                <span className="gradient-text">Pandhi Vamsi</span>
              </h1>
              <p className="lead fs-2">
                I’m a{" "}
                <TypeAnimation
                  sequence={["Java Full Stack Developer", 2000, "Frontend Developer", 2000, "Backend Developer", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <p className="fs-4 text-secondary">Currently exploring React, SpringBoot, and algorithmic logic to build efficient solutions.</p>
              <p className="fs-4 text-secondary">
                I turn ideas into clean, responsive, and interactive web experiences. Whether it’s a personal project or a collaborative app, I focus on user experience, performance, and maintainable code.
              </p>
              <div className="mt-4">
                <a href="#projects" target="_blank" rel="noopener noreferrer" className="btn-gradient me-2 fw-bold text-white px-8 py-8">
                  <IoRocketOutline color="white" /> Projects
                </a>
                <a href="https://drive.google.com/file/d/1ZrfoF5869MQ7GZX_MgovNis6rQQ8VWjF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-gradient-outline fw-bold text-white px-8 py-8">Download CV</a>
              </div>
            </Col>
            <Col md={5} className="text-center mt-5 mt-md-0">
              <div className="profile-gradient-border" style={{ width: "300px", height: "300px" }}>
                <img src={profileImage} alt="Pandhi Vamsi Profile" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section position-relative">
        <div className="overlay-gradient"></div>
        <Container className="about-content position-relative" style={{ zIndex: 1 }}>
          <h2 className="gradient-text text-center mb-4 fs-1 fw-bold mb-4">About Me</h2>
          <p className="text-center mb-5 fs-4 text-secondary w-75 mx-auto lh-lg" style={{ color: "rgb(209, 213, 219)" }}>
            I'm a B.E - CSE student passionate about frontend and backend development. I build responsive, functional, and visually appealing web apps using HTML, CSS, JavaScript,React.js,Bootstrap, Java,Spring,MySQL.
          </p>

          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="about-card text-center p-3" style={{ backgroundColor: "#212529" }}>
                <div className="icon bg-gradient-purple mb-3 d-flex align-items-center justify-content-center mb-3 rounded-3 shadow"
                  style={{
                    width: "5rem",    // w-20 → 5rem
                    height: "5rem",   // h-20 → 5rem
                    transition: "all 0.3s",  // transition-all
                  }}>
                  <FaCode size={32} color="#fff" />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold text-white mb-3" style={{ color: "white", fontSize: "1.5rem" }}>Frontend</Card.Title>
                  <ul className="list-unstyled mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Redux.js</li>
                    <li>Bootstgrap</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="about-card text-center p-3" style={{ backgroundColor: "#212529" }}>
                <div className="icon bg-gradient-pink mb-3 d-flex align-items-center justify-content-center mb-3 rounded-3 shadow"
                  style={{
                    width: "5rem",    // w-20 → 5rem
                    height: "5rem",   // h-20 → 5rem
                    transition: "all 0.3s",  // transition-all
                  }}>
                  <FaServer size={32} color="#fff" />
                </div>

                <Card.Body>
                  <Card.Title className="fw-bold text-white mb-3" style={{ color: "white", fontSize: "1.5rem" }}>Backend</Card.Title>
                  <ul className="list-unstyled mt-2">
                    <li>Core Java</li>
                    <li>MySQL</li>
                    <li>Spring</li>
                    <li>SpringBoot</li>
                    <li>JDBC</li>
                    <li>JSP</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="about-card text-center p-3" style={{ backgroundColor: "#212529" }}>
                <div className="icon bg-gradient-blue mb-3 d-flex align-items-center justify-content-center mb-3 rounded-3 shadow"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    transition: "all 0.3s",
                  }}>
                  <FaWrench size={32} color="#fff" />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold text-white mb-3" style={{ color: "white", fontSize: "1.5rem" }}>Tools</Card.Title>
                  <ul className="list-unstyled mt-2">
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>PostMan</li>
                    <li>STS</li>
                    <li>Eclipse</li>
                    <li>Intellij</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills-section py-5 position-relative bg-black">
        <Container>
          <h2 className="gradient-text text-center mb-5 fs-1 fw-bold">Skills & Expertise</h2>

          {/* Frontend */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={12} lg={12}>
              <Card className="skill-card p-4">
                <Card.Title className="fw-bold mb-3 text-white fs-4">Frontend</Card.Title>
                <div className="text-start">
                  <p className="mb-1 text-secondary">HTML</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-purple" style={{ width: "95%" }}>95%</div>
                  </div>

                  <p className="mb-1 text-secondary">CSS</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-pink" style={{ width: "90%" }}>90%</div>
                  </div>

                  <p className="mb-1 text-secondary">JavaScript</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-blue" style={{ width: "85%" }}>85%</div>
                  </div>

                  <p className="mb-1 text-secondary">React.js</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-purple" style={{ width: "88%" }}>88%</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Backend */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={12} lg={12}>
              <Card className="skill-card p-4">
                <Card.Title className="fw-bold mb-3 text-white fs-4">Backend</Card.Title>
                <div className="text-start">
                  <p className="mb-1 text-secondary">Java</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-pink" style={{ width: "90%" }}>90%</div>
                  </div>

                  <p className="mb-1 text-secondary">Spring Boot</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-blue" style={{ width: "85%" }}>85%</div>
                  </div>

                  <p className="mb-1 text-secondary">MySQL</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-purple" style={{ width: "80%" }}>80%</div>
                  </div>

                  <p className="mb-1 text-secondary">REST API</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-pink" style={{ width: "75%" }}>75%</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Tools */}
          <Row className="justify-content-center">
            <Col xs={12} md={12} lg={12}>
              <Card className="skill-card p-4">
                <Card.Title className="fw-bold mb-3 text-white fs-4">Tools</Card.Title>
                <div className="text-start">
                  <p className="mb-1 text-secondary">Git & GitHub</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-blue" style={{ width: "90%" }}>90%</div>
                  </div>

                  <p className="mb-1 text-secondary">VS Code</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-pink" style={{ width: "85%" }}>85%</div>
                  </div>

                  <p className="mb-1 text-secondary">Postman</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-purple" style={{ width: "80%" }}>80%</div>
                  </div>

                  <p className="mb-1 text-secondary">Eclipse / IntelliJ</p>
                  <div className="progress mb-3">
                    <div className="progress-bar bg-gradient-blue" style={{ width: "75%" }}>75%</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section position-relative py-5">
        <Container>
          <h2 className="gradient-text text-center mb-3 fs-1 fw-bold">Featured Projects</h2>
          <p className="text-center .text-gray-300 mb-5 fs-5">
            A collection of my recent work showcasing various technologies and skills
          </p>

          <Row className="justify-content-center">
            {[
              {
                title: "QuickShop (E-Commerce)",
                desc: "Developed and integrated a React.js front-end with Spring Boot back-end, implementing JWT-based authentication for secure login and role-based access for Admin and User modules. Integrated payment gateway and invoice download for seamless product booking and digital receipts. Designed and maintained the project's responsive UI.",
                tags: ["React.js", "Spring Boot", "JWT", "MySQL", "REST API", "Payment Gateway"],
                image: ecom,
                link: "https://github.com/pandhivamsi/Projects/tree/master/Full-Stack-Project/Ecom-full-stack"
              },
              {
                title: "Task Management System",
                desc: "Built a full-stack Task Management System using ReactJS and Spring Boot with MySQL for persistent storage. Developed RESTful APIs to handle projects, tasks, authentication, and profiles. Implemented CRUD operations, role-based access, and customizable themes, ensuring a responsive and user-friendly interface.",
                tags: ["React.js", "Spring Boot", "MySQL", "Axios", "REST API", "CRUD"],
                image: task,
                link: "https://github.com/pandhivamsi/Task-Management-Project/"
              },
              {
                title: "User Details - CRUD App",
                desc: "Developed a mini CRUD app using React.js and Bootstrap to Create, Read, Update, and Delete user details efficiently. Focused on building an intuitive UI and seamless data management flow.",
                tags: ["React.js", "Bootstrap", "CRUD", "Axios"],
                image: userCrud,
                link: "https://github.com/pandhivamsi/Projects/tree/master/UserDetails-CRUD"
              }
            ].map((project, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="project-card h-100 shadow-lg border-0">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold fs-5 mb-2 text-white">{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1 text-secondary">{project.desc}</Card.Text>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="badge rounded-pill bg-gradient-purple text-white px-3 py-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="btn btn-gradient fw-semibold w-100" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Resume Section */}
      <section id="resume" className="resume-section position-relative py-5 text-center text-white">
        <ParticlesBackground />
        <Container>
          <h2 className="gradient-text fs-1 fw-bold mb-3">Resume</h2>
          <p className=".text-gray-300 mb-4 fs-5">
            Download my resume to learn more about my experience, education, and skills.
          </p>
          <a
            href="https://drive.google.com/file/d/1ZrfoF5869MQ7GZX_MgovNis6rQQ8VWjF/view?usp=drive_link"
            download
            className="btn btn-gradient fw-bold px-4 py-3 z-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-download me-2"></i> Download My Resume
          </a>
        </Container>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="contact-section position-relative py-5 text-white">
        <ParticlesBackground />
        <Container>
          <h2 className="gradient-text text-center fs-1 fw-bold mb-3">Get In Touch</h2>
          <p className="text-center .text-gray-300 mb-5 fs-5">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <Row className="justify-content-center">
            {/* Connect With Me Card */}
            <Col md={5} className="mb-4">
              <Card className="p-4 bg-dark text-white border-0 shadow-lg z-1">
                <h5 className="fw-bold mb-4 text-center">Connect With Me</h5>

                <div className="d-flex flex-column gap-3">
                  <a
                    href="https://github.com/pandhivamsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient d-flex align-items-center justify-content-center gap-2 fw-semibold"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/pandhi-vamsi-a7a21a220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient d-flex align-items-center justify-content-center gap-2 fw-semibold"
                  >
                    <FaLinkedin size={24} /> LinkedIn
                  </a>

                  <a
                    href="mailto:pvamsi3010@gmail.com"
                    className="btn btn-gradient d-flex align-items-center justify-content-center gap-2 fw-semibold"
                  >
                    <MdEmail size={24} /> Email
                  </a>
                </div>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col md={5}>
              <Card className="p-4 bg-dark text-white border-0 shadow-lg z-1">
                <h5 className="fw-bold mb-4 text-center">Send a Message</h5>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control bg-transparent text-white border-secondary"
                      placeholder="Your Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-gradient w-100 fw-bold">
                    <IoIosSend/> Send Message
                  </button>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
