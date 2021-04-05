import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import Trash from '../../images/trash-24.svg';
import Money from '../../images/money-color.svg';
import './EditJob.css';

export default function EditJob() {
  return (
    <div id="page-job-edit">
      <PageHeader title="Editar Job" />
      <div className="container flex animate-up delay-2">
        <main>
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
            <Button
              classDescription="button green"
              form="form-job"
              type="submit"
              text="Salvar"
            />

            <Button href="#" classDescription="button gray open-modal">
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
