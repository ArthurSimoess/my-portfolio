import React from 'react';
import './header.scss';
import MenuBar from './MenuBar';
import home from '../../assets/images/home.png';

function Header() {
  return (
    <header className="header">
      <MenuBar />
      <div className="nav-bar">
        <button
          type="button"
          name="home"
          onClick={() => {}}
        >
          <img src={home} alt="home icon" />
        </button>
        <button
          className="nav-button"
          type="button"
          name="home"
          onClick={() => {}}
        >
          Sobre
        </button>
        <button
          className="nav-button"
          type="button"
          name="projects"
          onClick={() => {}}
        >
          Projetos
        </button>
        <button
          className="nav-button"
          type="button"
          name="skills"
          onClick={() => {}}
        >
          Habilidades
        </button>
        <button
          className="nav-button"
          type="button"
          name="contact"
          onClick={() => {}}
        >
          Contato
        </button>
      </div>
    </header>
  );
}

export default Header;
