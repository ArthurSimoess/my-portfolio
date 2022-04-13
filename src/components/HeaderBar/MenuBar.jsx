import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '../../assets/images/menu.png';
import home from '../../assets/images/homeIcon.png';
import about from '../../assets/images/aboutIcon.png';
import projects from '../../assets/images/projectsIcon.svg';
import skills from '../../assets/images/skills.svg';
import contact from '../../assets/images/contact.svg';

function MenuBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick({ target }) {
    const { name } = target;
    switch (name) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'skills':
        navigate('/skills');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="menu-button"
      >
        <img src={menu} alt="menu bar" width="100px" />
      </button>

      <Offcanvas show={show} onHide={handleClose} className="off-canvas">
        <Offcanvas.Header closeButton className="off-canvas-header">
          <Offcanvas.Title><span className="off-canvas-title">MENU</span></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="off-canvas-body">
          <button
            className="nav-button"
            type="button"
            name="home"
            id="home"
            onClick={handleClick}
          >
            <img src={home} alt="homeIcon" name="home" id="home" width="70px" />
            Home
          </button>
          <button
            className="nav-button"
            type="button"
            name="about"
            id="about"
            onClick={handleClick}
          >
            <img src={about} alt="aboutIcon" name="about" id="about" width="70px" />
            Sobre
          </button>
          <button
            className="nav-button"
            type="button"
            name="projects"
            id="projects"
            onClick={handleClick}
          >
            <img
              src={projects}
              alt="aboutIcon"
              name="projects"
              id="projects"
              width="70px"
            />
            Projetos
          </button>
          <button
            className="nav-button"
            type="button"
            name="skills"
            id="skills"
            onClick={handleClick}
          >
            <img src={skills} alt="aboutIcon" name="skills" id="skills" width="70px" />
            Habilidades
          </button>
          <button
            className="nav-button"
            type="button"
            name="contact"
            id="contact"
            onClick={handleClick}
          >
            <img src={contact} alt="aboutIcon" name="contact" id="contact" width="70px" />
            Contato
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuBar;
