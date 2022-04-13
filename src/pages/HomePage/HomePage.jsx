import React from 'react';
import Header from '../../components/HeaderBar/Header';
import './homepage.scss';
import logo from '../../assets/images/logo.svg';
import nodejs from '../../assets/images/nodejs.svg';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-container">
        <section className="home-title">
          <h1>Arthur Simões</h1>
          <h2>DESENVOLVEDOR FRONT-END</h2>
          <div>
            <button
              type="button"
            >
              Currículo
            </button>
            <button
              type="button"
            >
              Linkedin
            </button>
            <button
              type="button"
            >
              Github
            </button>
          </div>
        </section>
        <section className="photo-container">
          <div className="photo" />
          <div className="logo-container">
            <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">
              <img src={logo} alt="React logo" className="logo-react" />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <img src={nodejs} alt="Nodejs logo" className="logo-node" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
