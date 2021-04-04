import React from 'react';

import MoneyGray from '../../images/money-gray.svg';
import Trash from '../../images/trash-24.svg';

import './Job.css';

export default function Job() {
  return (
    <div id="page-job">
      <header className="page-header inner">
        <div className="container animate-up">
          <a href="index.html" className="back">
            <img src="./images/back.svg" alt="" />
          </a>
          <h1>Adicionar Novo Job</h1>
        </div>
      </header>

      <div className="container flex animate-up delay-2">
        <main>
          <form id="form-job">
            <fieldset>
              <legend>Dados do Job</legend>
              <div className="separator light"></div>

              <div className="input-wrapper">
                <label htmlFor="name">Nome do Job</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="daily-hours">
                    Quantas horas <br />
                    por dia vai dedicar ao job?
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="daily-hours"
                    name="daily-hours"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="total-hours">
                    Estimativa de <br />
                    horas para esse Job?
                  </label>
                  <input type="number" id="total-hours" name="total-hours" />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
        <aside className="card">
          <img src={MoneyGray} alt="Imagem de Dinheiro" />
          <p>Preencha os dados ao lado para ver o valor do projeto</p>
          <div className="button-group">
            <button
              className="button green"
              form="form-job"
              type="submit"
              title="Salvar Dados"
            >
              Salvar
            </button>
            <a href="index.html" className="button gray">
              <img
                src={Trash}
                alt="Cancelar cadastro"
                title="Cancelar cadastro"
              />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
