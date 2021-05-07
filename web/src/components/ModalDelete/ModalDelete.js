import React from 'react';
import styled from 'styled-components';
import Trash from '../../images/trash-48.svg';
import Button from '../Button/Button';
import api from '../../services/api';
import { Link, Redirect } from 'react-router-dom';

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

  footer a + button {
    margin-left: 0.5rem;
  }

  a {
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

  footer a {
    color: ${(props) => props.theme.colors.colorCardContent};
    background: ${(props) => props.theme.colors.colorCancel};
  }

  footer a:hover {
    background: #eceef0;
  }

  footer button {
    background: ${(props) => props.theme.colors.colorDelete};
    color: ${(props) => props.theme.colors.colorText};
  }

  footer button:hover {
    background: #fa3f38;
  }
`;

export default function ModalDelete({ setIsOpenModal, id }) {


  async function handleSubmit(event) {
    event.preventDefault();

    await api.delete(`/job/delete/${id}`);

    setIsOpenModal(false);
    return <Redirect to="/"/>

  }

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
          <Link
            to="/"
            className="button gray"
            onClick={() => setIsOpenModal(false)}
          >
            Cancelar
          </Link>
          <Button
            type="submit"
            className="button red"
            onClick={handleSubmit}
            form="delete-job"
          >
            Excluir Job
          </Button>
        </footer>
      </Modal>
      {/* <form method="get" action={`/profile`} id="delete-job"></form> */}
    </ModalWrapper>
  );
}
