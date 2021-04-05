import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import MoneyGray from '../../images/money-gray.svg';
import Trash from '../../images/trash-24.svg';

import './Job.css';

export default function Job() {
  return (
    <div id="page-job">
      <PageHeader title="Adicionar Novo Job" />

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
            <Button
              classDescription="button green"
              form="form-job"
              type="submit"
              text="Salvar"
            />

            <Button href="index.html" classDescription="button gray">
              <img
                src={Trash}
                alt="Cancelar cadastro"
                title="Cancelar cadastro"
              />
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
