import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cards from '../../components/Card/Card';
import Logo from '../../images/logo.svg';
import Alerta from '../../images/alert-octagon.svg';
import Plus from '../../images/plus-24.svg';
import Button from '../../components/Button/Button';
// import './Index.css';

const Header = styled.header`
  background: ${(props) => props.theme.colors.colorPrimary};
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 3rem;

  #top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #logo {
    width: 13rem;
    height: 3rem;
  }

  #notification {
    display: flex;
    align-items: center;

    font-family: Inter;
    font-weight: 500;
    font-size: 1rem;
  }

  #notification img {
    margin-right: 0.5rem; /* 8px of 16px root*/
  }

  #avatar-profile {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.colorText};
    text-decoration: none;

    font-family: IBM Plex Sans;
    text-align: right;
  }

  #avatar-profile p {
    font-size: 1.25rem; /* 20px of 16px root*/
    line-height: 1.875rem; /*30px of 16px root*/
    margin-right: 1.25rem;

    font-weight: 600;
  }

  #avatar-profile a {
    display: block;

    font-weight: normal;
    font-size: 0.875rem; /* 14px of 16px root*/
    line-height: 1.5rem; /* 24px of 16px root*/

    font-weight: 400;
    color: ${(props) => props.theme.colors.colorText};
  }

  #avatar-profile p a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.colorSecondary};
  }

  #avatar-profile img {
    width: 4rem; /* 64px of 16px root*/
    height: 4rem; /* 64px of 16px root*/
    border-radius: 50%;
    border: 0.156rem solid #f1972c; /* 2.5px of 16px root*/
  }

  #summary {
    display: flex;
    justify-content: space-between;
  }

  #summary .info {
    display: flex;
    font-family: Inter;

    margin-bottom: 2rem;
  }

  .info > div {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;

    margin-right: 2.5rem; /* 40px of 16px root*/
  }

  .info > div > strong {
    display: block;

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.625rem; /* 26px of 16px root*/
  }

  #summary button {
    padding: 0.75rem 1.25rem 0.75rem 0.75rem;
    margin-bottom: 2.5rem;
  }

  #summary button span::before {
    width: 2rem;
    height: 2rem;
    content: ' ';
    background-color: ${(props) => props.theme.colors.colorBackground};
    opacity: 0.16;
    border-radius: 0.313rem; /* 5px of 16px root*/

    position: absolute;
  }

  #summary button span {
    width: 2rem;
    height: 2rem;

    margin-right: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #summary button span img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const PageIndex = styled.div``;

PageIndex.Main = styled.main`
  margin-top: -2.825rem;
`;



export default function Landing() {
  return (
    <PageIndex className="page-index">
      <Header className="page-header">
        <div className="container">
          <section id="top" className="animate-up">
            <h2 className="sr-only">Homepage</h2>
            <img id="logo" src={Logo} alt="Logo" />
            <span id="notification">
              <img src={Alerta} alt="Alerta" />
              Você tem 2 horas livres no seu dia
            </span>
            <a href="profile.html" id="avatar-profile">
              <p>
                Jakeliny <Link to="/profiles">Ver perfil</Link>
              </p>
              <img src="https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4" />
            </a>
          </section>

          <div className="separator"></div>

          <section id="summary" className="animate-up delay-1">
            <h2 className="sr-only">Sumário</h2>

            <div className="info">
              <div className="total">
                <strong>12</strong>
                Projetos ao total
              </div>
              <div className="in-progress">
                <strong>7</strong>
                Em andamento
              </div>
              <div className="finished">
                <strong>4</strong>
                Encerrados
              </div>
            </div>
            <Link to="/add-jobs">
              <Button
                color="#FCFDFF"
                hover="#FA9C2D"
                background="#F1972C"
                text="Adicionar novo job"
              >
                <img src={Plus} alt="Novo Job" />
              </Button>
            </Link>
          </section>
        </div>
      </Header>
      <div className="container">
        <PageIndex.Main className="animate-up delay-2">
          <h1 className="sr-only">Trabalhos</h1>
          <Cards style="progress" text="Em andamento" />
          <Cards style="done" text="Encerrado" />
          <Cards style="progress" text="Em andamento" />
        </PageIndex.Main>
      </div>
    </PageIndex>
  );
}
