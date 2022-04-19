import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import './contact.scss';
import Form from '../../components/ContactsComponent/Form';
import wpp from '../../assets/images/whatsapp.svg';
import github from '../../assets/images/gitlight.png';
import linkedin from '../../assets/images/linkedin.svg';
import gmail from '../../assets/images/gmail.svg';

// https://www.emailjs.com/
// https://www.youtube.com/watch?v=NgWGllOjkbs
// Maps google -> https://www.youtube.com/watch?v=yc8L7llaYKo

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <main className="contact-container">
        <Form />
        <div className="social-media">
          <a href="https://github.com/ArthurSimoess" target="_blank" rel="noreferrer">
            <img src={github} alt="Github logo" />
          </a>
          <a href="https://www.linkedin.com/in/arthurrsim%C3%B5es" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Github logo" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5531985756888&text=Ol%C3%A1%2C%20sou%20Arthur%20Sim%C3%B5es" target="_blank" rel="noreferrer">
            <img src={wpp} alt="Github logo" />
          </a>
          <buttom
            type="button"
            onClick={() => { navigator.clipboard.writeText('arthursimoes155@gmail.com'); }}
          >
            <img src={gmail} alt="Gmail logo" />
          </buttom>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
