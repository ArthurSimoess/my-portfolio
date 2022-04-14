import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/HeaderBar/Header';
import projectsList from '../../data/projectsData';
import './projects.scss';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';

function ProjectPage() {
  const [num, setNum] = useState({
    to: 0,
    from: 3,
  });

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
    <div className="project-page">
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
                        <button type="button">
                          Saiba mais
                        </button>
                      </div>
                    )
                }
                <div className="stacks">
                  {project.stacks.map((stack) => (
                    <img src={stack} alt="" width="30px" />
                  ))}
                </div>
              </div>
            ))
          }
        </main>
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
    </div>
  );
}

export default ProjectPage;
