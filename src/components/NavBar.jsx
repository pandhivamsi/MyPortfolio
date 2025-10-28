import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Hero.css'; // Make sure to import the CSS
import { FaLessThan ,FaGreaterThan} from "react-icons/fa6";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? "bg-dark navbar-dark" : "bg-transparent navbar-dark"}>
  <Container>
    <Navbar.Brand href="#home" className='gradient-text fw-bold'>
      <FaLessThan className='gradient-text'/> Vamsi P <FaGreaterThan className='gradient-text'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
