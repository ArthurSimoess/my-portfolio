import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import home from '../../assets/images/home.svg';

function Header() {
  const navigate = useNavigate();

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
    <header className="header">
      <MenuBar />
      <div className="nav-bar">
        <button
          type="button"
          name="home"
          onClick={handleClick}
        >
          <img src={home} alt="home icon" width="40px" />
        </button>
        <button
          className="nav-button"
          type="button"
          name="about"
          onClick={handleClick}
        >
          Sobre
        </button>
        <button
          className="nav-button"
          type="button"
          name="projects"
          onClick={handleClick}
        >
          Projetos
        </button>
        <button
          className="nav-button"
          type="button"
          name="skills"
          onClick={handleClick}
        >
          Habilidades
        </button>
        <button
          className="nav-button"
          type="button"
          name="contact"
          onClick={handleClick}
        >
          Contato
        </button>
      </div>
    </header>
  );
}

export default Header;
