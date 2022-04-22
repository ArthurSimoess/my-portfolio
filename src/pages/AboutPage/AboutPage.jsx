import React, { useState } from 'react';
import './aboutpage.scss';
import { motion } from 'framer-motion';
import Header from '../../components/HeaderBar/Header';
import Footer from '../../components/Footer/Footer';
import historyList from '../../data/aboutData';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
import ProgressBar from '../../components/AboutSteps/ProgressBar';

function AboutPage() {
  const [step, setStep] = useState(0);

  function stepProgress({ target }) {
    const { name } = target;
    if (name === 'next') {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  }

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="header">
        <Header />
      </div>
      <ProgressBar
        step={step}
      />
      <div className="card-container">
        <div>
          <input
            name="previous"
            type="image"
            id="previous"
            src={leftArrow}
            disabled={step === 0}
            alt="left arrow"
            onClick={stepProgress}
          />
          <input
            name="next"
            className="arrow-phone"
            type="image"
            id="right"
            src={rightArrow}
            disabled={step === 3}
            alt="right arrow"
            onClick={stepProgress}
          />
        </div>
        <main className="about-card" id="style-7">
          <div className="title">{historyList[step].title}</div>
          <div className="paragraph">{historyList[step].paragraph}</div>
        </main>
        <input
          name="next"
          type="image"
          id="right"
          src={rightArrow}
          disabled={step === 3}
          alt="right arrow"
          onClick={stepProgress}
        />
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutPage;
