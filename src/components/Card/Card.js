import React from 'react';
import Button from '../Button/Button';
import Edit from '../../images/edit-24.svg'
import Trash from '../../images/trash-24.svg'


import './Card.css';

export default function Card({style, text}) {
  return (
    <div class="cards">
      <div class={`card ${style}`} data-id="1">
        <div class="id column">1</div>
        <div class="name column">Pizzaria Guloso</div>
        <div class="deadline column">
          <span>Prazo</span>
          <p>3 dias para a entrega</p>
        </div>
        <div class="amount column">
          <span>Valor</span>
          <p>R$ 4500,00</p>
        </div>
        <div class="status badge column">{text}</div>
        <div class="actions column flex">
          <p class="sr-only">Ações</p>
          <Button
            classDescription="button white edit"
            // title="Editar Job"
          >
            <img src={Edit} alt="Editar Job" />
          </Button>
          <Button
            classDescription="delete button white"
            // title="Excluir Job"
          >
            <img src={Trash} alt="Excluir Job" />
          </Button>
        </div>
      </div>


    </div>
  );
}
