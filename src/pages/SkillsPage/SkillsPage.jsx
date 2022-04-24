import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import skillsList from '../../data/skillsData';
import './skill.scss';

function SkillsPage() {
  return (
    <motion.div
      className="skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main className="skills-container">
        {
          skillsList.map((skill) => (
            <img src={skill.image} alt={skill.text} className="skills-img" key={skill.id} />
          ))
        }
      </main>
      <Footer />
    </motion.div>
  );
}

export default SkillsPage;
