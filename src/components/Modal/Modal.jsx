/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { CloseButton } from 'react-bootstrap';
import ControlledCarousel from './Carrousel';
import './modal.scss';

function Modal({ showModal }) {
  return (
    <div className="modal-cover">
      <div className="modal-card">
        <CloseButton variant="white" onClick={showModal} />
        <ControlledCarousel />
        <p>
          Primeiro projeto profissional que estou realizando.
          O site tem como função auxiliar a empresa Bamin no
          controle interno do escoamente e recebimento de minério,
          controlando o fluxo de viagens(Rodoviárias e Ferroviárias) e
          agilizando os processos de registro de minério.
          Sou o responsável pelo desenvolvimento front-end do site e
          meu amigo Eduardo Temponi, que me convidou para ajudá-lo está responsável pelo back-end.
        </p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Modal;
