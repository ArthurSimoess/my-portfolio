/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import './progressBar.scss';
import profile from '../../assets/images/mepicture.png';
import work from '../../assets/images/work.png';
import walking from '../../assets/images/walking.svg';
import shake from '../../assets/images/shake.svg';

function ProgressBar({ step }) {
  return (
    <div className="progress-container">
      <div className="full-progress">
        <img src={profile} alt="Dark skin male" />
      </div>
      <div className={step > 0 ? 'full-border' : 'empty-border'} />
      <div className={step > 0 ? 'full-progress' : 'empty-progress'}>
        <img src={work} alt="" width="50px" />
      </div>
      <div className={step > 1 ? 'full-border' : 'empty-border'} />
      <div className={step > 1 ? 'full-progress' : 'empty-progress'}>
        <img src={walking} alt="A man walking" width="50px" className="walking" />
      </div>
      <div className={step > 2 ? 'full-border' : 'empty-border'} />
      <div className={step > 2 ? 'full-progress' : 'empty-progress'}>
        <img src={shake} alt="Two peoples shake hands" width="50px" />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
};

export default ProgressBar;
