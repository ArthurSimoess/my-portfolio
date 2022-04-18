import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import './contact.scss';

// https://www.emailjs.com/
// https://www.youtube.com/watch?v=NgWGllOjkbs

function ContactPage() {
  return (
    <div className="contact-page">
      <Header />
      <main className="contact-container">
        <h1>Contato</h1>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
