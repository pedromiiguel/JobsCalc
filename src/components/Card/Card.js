import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Trash from '../../images/trash-24.svg';

const Cards = styled.aside`
  background: ${(props) => props.theme.colors.colorText};
  border-radius: 0.313rem;
  border: 1px solid #e1e3e6;
  color: #5a5a66;

  padding: 1.5rem;

  text-align: left;

  width: 22rem;

  margin-left: 8rem;

  text-align: center;

  padding: 2.5rem 3.375rem;

  img {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.75rem;

    font-family: Inter;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }

  .button-group {
    display: flex;
    align-items: center;
  }

  button span {
    margin-top: 1.5rem;
  }

  button img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  button + button {
    padding: 0;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }
`;

export default function Card({children}) {
  return (
    <Cards className="card">
      {children}
      <p>Preencha os dados ao lado para ver o valor do projeto</p>
      <div className="button-group">
        <Button
          color="#FCFDFF"
          background="#36B336"
          hover="#3cc73c"
          form="form-job"
          type="submit"
          text="Salvar"
        />

        <Button
          href="index.html"
          color="#FCFDFF"
          background="#E1E3E5"
          hover="#ECEEF0"
        >
          <img src={Trash} alt="Cancelar cadastro" title="Cancelar cadastro" />
        </Button>
      </div>
    </Cards>
  );
}
