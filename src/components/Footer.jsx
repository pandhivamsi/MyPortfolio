import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-light d-flex flex-column flex-md-row justify-content-between align-items-center px-4">
      <div className='fw-bold' style={{marginLeft: "300px"}}>
        © {new Date().getFullYear()} — Pandhi Vamsi
      </div>
      <div className="d-flex gap-3 mt-2 mt-md-0 fw-bold" style={{marginRight: "300px"}}>
        <a
          href="https://github.com/pandhivamsi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-light fs-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pandhi-vamsi-a7a21a220/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-light fs-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:pvamsi3010@gmail.com"
          aria-label="Email"
          className="text-light fs-4"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
