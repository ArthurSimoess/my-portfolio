/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import './contact.scss';
import Form from '../../components/ContactsComponent/Form';
import wpp from '../../assets/images/whatsapp.svg';
import github from '../../assets/images/gitlight.png';
import linkedin from '../../assets/images/linkedin.svg';
import gmail from '../../assets/images/gmail.svg';
import FloatBtn from '../../components/FloatBtn/FloatBtn';

// https://www.emailjs.com/
// https://www.youtube.com/watch?v=NgWGllOjkbs
// Maps google -> https://www.youtube.com/watch?v=yc8L7llaYKo

function ContactPage() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  function handleClick() {
    navigator.clipboard.writeText('arthursimoes155@gmail.com');
    setShow(!show);
  }

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main className="contact-container">
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
          <button
            type="button"
            ref={target}
            onClick={handleClick}
          >
            <img src={gmail} alt="Gmail logo" />
          </button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Email copiado
              </Tooltip>
            )}
          </Overlay>
        </div>
        <Form />
      </main>
      <FloatBtn />
      <Footer />
    </motion.div>
  );
}

export default ContactPage;
