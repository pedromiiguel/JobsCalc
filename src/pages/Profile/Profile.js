import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import './Profile.css';

export default function Profile() {
  return (
    <div id="page-profile">
      <PageHeader title="Meu perfil" />

      <div className="container animate-up delay-2">
        <aside className="card">
          <img
            src="https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4"
            alt="Jakeliny"
          />
          <h2>Jakeliny</h2>
          <p>
            O valor da sua hora é <br />
            <strong>R$ 75,00</strong>
          </p>
          <Button
            classDescription="button green"
            form="form-profile"
            type="submit"
            text="Salvar dados"
          />
        </aside>
        <main>
          <form id="form-profile">
            <fieldset>
              <legend>Dados do perfil</legend>
              <div className="separator light"></div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="avatar">Link da foto</label>
                  <input
                    placeholder="https://"
                    type="url"
                    id="avatar"
                    name="avatar"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Planejamento</legend>
              <div className="separator light"> </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="monthly-budget">
                    Quanto eu <br />
                    quero ganhar por mês?
                  </label>
                  <input
                    type="amount"
                    step="0.1"
                    id="monthly-budget"
                    name="monthly-budget"
                    placeholder="R$"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="hours-per-day">
                    Quantas horas <br />
                    quero trabalhar por dia?
                  </label>
                  <input
                    type="number"
                    id="hours-per-day"
                    name="hours-per-day"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="days-per-week">
                    Quantos dias <br />
                    quero trabalhar por semana?
                  </label>
                  <input
                    type="number"
                    id="days-per-week"
                    name="days-per-week"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="vacation-per-year">
                    Quantas semanas <br />
                    por ano você quer tirar férias?
                  </label>
                  <input
                    type="number"
                    id="vacation-per-year"
                    name="vacation-per-year"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
}
