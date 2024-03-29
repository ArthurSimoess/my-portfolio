/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import projectsList from '../../data/projectsData';
import './projects.scss';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
import Modal from '../../components/Modal/Modal';
import Progress from '../../components/Modal/Progress';

function ProjectPage() {
  const [num, setNum] = useState({
    to: 0,
    from: 3,
  });
  const [open, setOpen] = useState(false);

  function showModal() {
    setOpen(!open);
  }

  const projects = projectsList.slice(num.to, num.from);

  function changeNum({ target }) {
    const { name } = target;
    if (name === 'previous') {
      setNum({
        to: 0,
        from: 3,
      });
    } else {
      setNum({
        to: 3,
        from: 6,
      });
    }
  }

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {
        open && <Modal showModal={showModal} />
      }
      <div className="header">
        <Header />
      </div>
      <div className="button-card">
        <main className="project-container">
          {
            projects.map((project) => (
              <div className="card-project" key={project.id}>
                <h1>{project.title}</h1>
                <img src={project.image} alt="Recipe app login page" width="100%" height="200px" />
                {
                  project.title !== 'Bamin'
                    ? (
                      <nav className="nav-projects">
                        <a href={project.linkSite} target="_blank" rel="noreferrer">Site</a>
                        <a href={project.linkCode} target="_blank" rel="noreferrer">
                          Repositório github
                        </a>
                      </nav>
                    )
                    : (
                      <div className="bamin-options">
                        <div>Profissional</div>
                        <button
                          type="button"
                          onClick={showModal}
                        >
                          Saiba mais
                        </button>
                      </div>
                    )
                }
                <div className="stacks">
                  {project.stacks.map((stack) => (
                    <img src={stack} alt="" width="30px" key={uuidv4()} />
                  ))}
                </div>
              </div>
            ))
          }
        </main>
        <Progress page={num.to} />
        <div className="buttons-arrow">
          <input
            name="previous"
            type="image"
            id="previous"
            src={leftArrow}
            disabled={num.to === 0}
            alt="left arrow"
            onClick={changeNum}
          />
          <input
            name="next"
            type="image"
            id="right"
            src={rightArrow}
            disabled={num.to === 3}
            alt="right arrow"
            onClick={changeNum}
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default ProjectPage;
