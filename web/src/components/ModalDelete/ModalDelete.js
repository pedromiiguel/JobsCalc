import React from 'react';
import styled from 'styled-components';
import Trash from '../../images/trash-48.svg';

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: visible;
  opacity: 1;
`;

const Modal = styled.div`

  background: #f0f2f5;
  border-radius: 0.313rem;
  padding: 2.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.colorCardContent};

  img {
    margin-bottom: 1rem;
  }

  h3 {
    color: ${(props) => props.theme.colors.colorCardTitle};

    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.625rem;

    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
  }

  footer button {
    padding: 0.75rem 3rem;
    border-radius: 0.313rem;

    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.625rem;
    text-transform: uppercase;

    transition: all 0.2s;

    cursor: pointer;
  }

  footer button + button {
    margin-left: 0.5rem;
  }

  button {
    padding: 0.75rem 3rem;
    border-radius: 0.313rem;
    border: 0;

    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.625rem;
    text-transform: uppercase;

    transition: all 0.2s;

    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  footer button:nth-child(1) {
    color: ${(props) => props.theme.colors.colorCardContent};
    background: ${(props) => props.theme.colors.colorCancel};
  }

  footer button:nth-child(1):hover {
    background: #eceef0;
  }

  footer button:nth-child(2) {
    background: ${(props) => props.theme.colors.colorDelete};
    color: ${(props) => props.theme.colors.colorText};
  }

  footer button:nth-child(2):hover {
    background: #fa3f38;
  }
`;

export default function ModalDelete({ setIsOpenModal }) {
  return (
    <ModalWrapper className="modal-wrapper on">
      <Modal className="modal">
        <img src={Trash} alt="Excluir Job" title="Excluir Job" />
        <h3>Excluir Job</h3>
        <p>
          Quer mesmo excluir esse job? <br />
          Ele será apagado para sempre.
        </p>
        <footer>
          <button className="button gray" onClick={ () => setIsOpenModal(false)} >Cancelar</button>
          <button className="button red" onClick={ () => setIsOpenModal(false)} type="submit" form="delete-job">
            Excluir Job
          </button>
        </footer>
      </Modal>
      <form method="post" action="/job/delete/{JOBID}" id="delete-job"></form>
    </ModalWrapper>
  );
}
