import React from 'react';
import './EditJob.css';
import Trash from '../../images/trash-24.svg';
import Money from '../../images/money-color.svg';


export default function EditJob() {
  return (
    <div id="page-job-edit">
      <header className="page-header inner">
        <div className="container animate-up">
          <a href="index.html" className="back">
            <img src="./images/back.svg" alt="" />
          </a>
          <h1>Editar Job</h1>
        </div>
      </header>

    <div className="container flex animate-up delay-2">
      <main >
        <form id="form-job">
          <fieldset>
            <legend>Dados do Job</legend>
            <div className="separator light"></div>

            <div className="input-wrapper">
              <label htmlFor="name">Nome do Job</label>
              <input
                type="text"
                id="name"
                name="name"
                value="Pizzaria Guloso"
              />
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
                  value="2"
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="total-hours">
                  Estimativa de <br />
                  horas para esse Job?
                </label>
                <input
                  type="number"
                  id="total-hours"
                  name="total-hours"
                  value="40"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </main>
      <aside className="card">
        <img src={Money} alt="Imagem de Dinheiro" />
        <p>
          O valor do projeto ficou em <strong>R$ 4576,00</strong>
        </p>
        <div className="button-group">
          <button
            className="button green"
            form="form-job"
            type="submit"
            title="Salvar Dados"
          >
            Salvar
          </button>
          <a href="#" className="button gray open-modal">
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
