import React, { useState } from 'react';
import './aboutpage.scss';
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
    <div className="about-container">
      <div className="header">
        <Header />
      </div>
      <ProgressBar
        step={step}
      />
      <div className="card-container">
        <input
          name="previous"
          type="image"
          id="previous"
          src={leftArrow}
          disabled={step === 0}
          alt="left arrow"
          onClick={stepProgress}
        />
        <main className="about-card">
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
    </div>
  );
}

export default AboutPage;
