import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardJobs from '../../components/CardJobs/CardJobs';
import Logo from '../../images/logo.svg';
import Alerta from '../../images/alert-octagon.svg';
import Plus from '../../images/plus-24.svg';
import ModalDelete from '../../components/ModalDelete/ModalDelete';
import api from '../../services/api';

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

  #summary a {
    padding: 0.75rem 1.25rem 0.75rem 0.75rem;
    margin-bottom: 2.5rem;
  }

  #summary a span::before {
    width: 2rem;
    height: 2rem;
    content: ' ';
    background-color: ${(props) => props.theme.colors.colorBackground};
    opacity: 0.16;
    border-radius: 0.313rem; /* 5px of 16px root*/

    position: absolute;
  }

  #summary a span {
    width: 2rem;
    height: 2rem;

    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #summary a span img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .button-add-jobs {
    padding: 0.75rem 3rem;
    border-radius: 0.313rem;
    border: 0;

    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.625rem;
    text-transform: uppercase;

    transition: all 0.2s;

    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme.colors.colorSecondary};
    color: ${(props) => props.theme.colors.colorText};

    &:hover {
      background: ${(props) => props.theme.colors.colorSecondaryHover};
    }
  }
`;

const PageIndex = styled.div``;

PageIndex.Main = styled.main`
  margin-top: -2.825rem;
`;

export default function Index() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState({});
  const [freeHours, setFreeHours] = useState('');
  const [jobs, setJobs] = useState([]);
  const [statusCount, setStatusCount] = useState([]);
  const [deleteId, setDeleteId] = useState('');


  useEffect(() => {
    api.get('index').then((response) => {
      setUser(response.data.profile);
      setFreeHours(response.data.freeHours);
      setJobs(response.data.jobs);
      // setStatusCount(response.data.statusCount);
      setStatusCount(response.data.statusCount);
    });
  }, [isOpenModal]);

  console.log(jobs)


  return (
    <PageIndex className="page-index">
      <Header className="page-header">
        <div className="container">
          <section id="top" className="animate-up">
            <h2 className="sr-only">Homepage</h2>
            <img id="logo" src={Logo} alt="Logo" />
            <span id="notification">
              <img src={Alerta} alt="Alerta" />
              {freeHours <= 0
                ? 'Você não tem horas livres'
                : `Você tem ${freeHours} horas livres no seu dia`}
            </span>
            <div href="profile.html" id="avatar-profile">
              <p>
                {user.name} <Link to="/profiles">Ver perfil</Link>
              </p>
              <img src={user.avatar} alt="Avatar" />
            </div>
          </section>

          <div className="separator"></div>

          <section id="summary" className="animate-up delay-1">
            <h2 className="sr-only">Sumário</h2>

            <div className="info">
              <div className="total">
                <strong>{statusCount.total}</strong>
                Projetos ao total
              </div>
              <div className="in-progress">
                <strong>{statusCount.progress}</strong>
                Em andamento
              </div>
              <div className="finished">
                <strong>{statusCount.done}</strong>
                Encerrados
              </div>
            </div>
            <Link
              to="/add-jobs"
              className="button-add-jobs"
              color="#FCFDFF"
              hover="#FA9C2D"
              background="#F1972C"
            >
              <span>
                <img src={Plus} alt="Novo Job" />
              </span>
              Adicionar novo job
            </Link>
          </section>
        </div>
      </Header>
      <div className="container">
        <PageIndex.Main className="animate-up delay-2">
          <h1 className="sr-only">Trabalhos</h1>
          {jobs.map((job, index) => (
            <CardJobs
              key={job.id}
              data-id={job.id}
              title={job.name}
              status={job.status}
              budget={job.budget}
              id={job.id}
              remainingDays={job.remaining}
              setIsOpenModal={setIsOpenModal}
              setDeleteId={setDeleteId}
            />
          ))}
        </PageIndex.Main>
      </div>
      {isOpenModal && (
        <ModalDelete setIsOpenModal={setIsOpenModal} id={deleteId} />
      )}
    </PageIndex>
  );
}
