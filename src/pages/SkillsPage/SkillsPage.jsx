import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import skillsList from '../../data/skillsData';
import './skill.scss';

function SkillsPage() {
  return (
    <div className="skills-page">
      <Header />
      <main className="skills-container">
        {
          skillsList.map((skill) => (
            <img src={skill.image} alt={skill.text} className="skills-img" />
          ))
        }
      </main>
      <Footer />
    </div>
  );
}

export default SkillsPage;
