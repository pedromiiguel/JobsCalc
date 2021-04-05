import React from 'react';
import './ModalDelete.css';

import Trash from '../../images/trash-48.svg';

export default function ModalDelete() {
  return (
    <div className="modal-wrapper on">
      <div className="modal">
        <img
          src={Trash}
          alt="Excluir Job"
          title="Excluir Job"
        />
        <h3>Excluir Job</h3>
        <p>
          Quer mesmo excluir esse job? <br />
          Ele será apagado para sempre.
        </p>
        <footer>
          <a className="button gray" >
            Cancelar
          </a>
          <button className="button red" type="submit" form="delete-job">
            Excluir Job
          </button>
        </footer>
      </div>
      <form method="post" action="/job/delete/{JOBID}" id="delete-job"></form>
    </div>
  );
}
