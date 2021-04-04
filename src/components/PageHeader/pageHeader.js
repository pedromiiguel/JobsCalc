import React from 'react';
import './pageHeader.css';
import Logo from '../../images/logo.svg';
import Alerta from '../../images/alert-octagon.svg';
import Plus from '../../images/plus-24.svg';
import Button from '../Button/Button';



export default function pageHeader() {
  return (
    <header class="page-header">
      <div class="container">
        <section id="top" class="animate-up">
          <h2 class="sr-only">Homepage</h2>
          <img id="logo" src={Logo} alt="Logo" />
          <span id="notification">
            <img src={Alerta} alt="Alerta" />
            Você tem 2 horas livres no seu dia
          </span>
          <a href="profile.html" id="avatar-profile">
            <p>Jakeliny <span>Ver perfil</span></p>
            <img
              src="https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4"
            />
          </a>
        </section>

        <div class="separator"></div>

        <section id="summary" class="animate-up delay-1">
          <h2 class="sr-only">Sumário</h2>

          <div class="info">
            <div class="total">
              <strong>12</strong>
              Projetos ao total
            </div>
            <div class="in-progress">
              <strong>7</strong>
              Em andamento
            </div>
            <div class="finished">
              <strong>4</strong>
              Encerrados
            </div>
          </div>
          <Button classDescription="button orange" rota="job.html" text="Adicionar novo job">
            <img src={Plus} alt="Novo Job" />
          </Button>
        </section>
      </div>
    </header>
  );
};