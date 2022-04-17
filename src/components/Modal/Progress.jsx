/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import './modal.scss';

function Progress({ page }) {
  return (
    <div className="modal-progress">
      <div className={page === 0 ? 'ball-dark' : 'ball-light'} />
      <div className={page === 3 ? 'ball-dark' : 'ball-light'} />
    </div>
  );
}

Progress.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Progress;
