/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ControlledCarousel from './Carrousel';
import './modal.scss';

function Modal({ showModal }) {
  function closeModal(e) {
    if (e.target.id === 'modal') {
      showModal();
    }
  }

  return (
    <div id="modal" className="modal-cover" onClick={closeModal} role="button" tabIndex={0} aria-hidden="true">
      <div className="modal-card">
        <div className="modal-title">
          <h1>Sobre o projeto</h1>
          <CloseButton variant="white" onClick={showModal} />
        </div>
        <ControlledCarousel />
        <p>
          Primeiro projeto profissional que estou realizando.
          O site tem como função auxiliar a empresa Bamin no
          controle interno do escoamente e recebimento de minério,
          controlando o fluxo de viagens(Rodoviárias e Ferroviárias) e
          agilizando os processos de registro de minério.
          Sou o responsável pelo desenvolvimento front-end do site utilizando ReactJs e
          meu amigo Eduardo Temponi, que me convidou para ajudá-lo, está responsável pelo back-end.
          Entre em
          {' '}
          <Link to="/contact">contato</Link>
          {' '}
          para saber mais sobre este e outros projetos.
        </p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Modal;
