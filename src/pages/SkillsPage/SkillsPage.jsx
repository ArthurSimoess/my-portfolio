/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import skillsList from '../../data/skillsData';
import './skill.scss';

function SkillsPage() {
  const [showText, setShowText] = useState(false);
  const [skillText, setSkillText] = useState('');

  function mouseOver({ target }) {
    const { name } = target;
    setShowText(true);
    setSkillText(name);
  }

  function mouseOut() {
    setShowText(false);
    setSkillText('');
  }

  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main className="skill-text">
        <div className="skills-container">
          {
            skillsList.map((skill) => (
              <img
                src={skill.image}
                alt={skill.text}
                name={skill.text}
                className="skills-img"
                key={skill.id}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              />
            ))
            }
        </div>
        { showText ? <p>{skillText}</p> : <p className="transparent">i</p> }
      </main>
      <Footer />
    </motion.div>
  );
}

export default SkillsPage;
