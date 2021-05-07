import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Edit from '../../images/edit-24.svg';
import Trash from '../../images/trash-24.svg';
import theme from '../../styles/theme';

const Card = styled.div`
  .card {
    display: grid;
    grid-template-columns: 5% 35% 20% 15% 15% 10%;
    align-items: center;

    margin-bottom: 0.5rem;

    position: relative;

    transition: all 0.2s;
  }

  .card:hover {
    background: linear-gradient(
        90deg,
        rgba(250, 156, 45, 0.1) 0.45%,
        rgba(252, 253, 255, 0.1) 31.4%
      ),
      white;
  }

  .card::before {
    content: ' ';

    width: 0.25rem;
    height: 0%;
    background-color: ${(props) => props.theme.colors.colorSecondary};

    border-radius: 0.313rem 0 0 0.313rem;

    position: absolute;
    top: 0;
    left: -1px;

    transition: all 0.2s;
  }

  .card:hover::before {
    height: 100%;
  }

  .card .column:last-child {
    justify-self: flex-end;
  }

  .card .column > span {
    display: block;

    font-family: Inter;
    font-weight: 600;
    font-size: 0.75rem; /* 12px of 16px root*/
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.colorCardLabel};
  }

  .progress .column p {
    font-weight: 600;
  }

  .column.id {
    font-family: IBM Plex Sans;
    font-weight: 600;
    color: ${(props) => props.theme.colors.colorCardLabel};
  }

  .column.name {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  .column.actions a img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 1390px) {
    .card {
      grid-template-columns: 5% 30% 20% 15% 17.25% 12.25%;
    }
  }

  @media (max-width: 970px) {
    .card {
      grid-template-columns: 31% 23% 13% 20.25% 12.25%;
    }

    .column.id {
      display: none;
    }
  }

  @media (max-width: 770px) {
    .card {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'lt rt'
        'lm rm'
        'lb rb';
      gap: 0.5rem;
    }

    .column.id {
      display: none;
    }

    .column.name {
      grid-area: lt;
    }
    .column.deadline {
      grid-area: lm;
    }
    .column.amount {
      grid-area: lb;
    }
    .column.status {
      justify-self: end;
      grid-area: rt;
    }
    .column.actions {
      grid-area: rb;
    }
  }

  .card {
    background: ${(props) => props.theme.colors.colorText};
    border-radius: 0.313rem;
    border: 1px solid #e1e3e6;
    color: #5a5a66;

    padding: 1.5rem;

    text-align: left;
  }

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    border-radius: 2.5rem;
    padding: 0.5rem 1.5rem;

    font-weight: 500;
    font-size: 0.875rem; /* 14px of 16px root*/
    line-height: 1.625rem; /* 26px of 16px root*/

    background-color: rgb(237, 237, 237);
  }

  .progress .badge {
    background: ${(props) => props.theme.colors.colorBadgeProgressBackground};
    color: ${(props) => props.theme.colors.colorBadgeProgressText};
  }

  .done .badge {
    background: ${(props) => props.theme.colors.colorBadgeDoneBackground};
    color: ${(props) => props.theme.colors.colorBadgeDoneText};
  }

  a {
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

    background: ${(props) => theme.colors.colorCardBackground};
    border: 1px solid #e1e3e6;

    line-height: 1.5rem;

    &:hover {
      background: ${(props) => theme.colors.colorBackground};
    }
  }

  .actions a {
    width: 2.5rem;
    height: 2.5rem;

    padding: 0;
  }

  .actions a + a {
    margin-left: 0.5rem;
  }
`;

export default function CardJobs({
  status,
  setIsOpenModal,
  title,
  remainingDays,
  budget,
  id,
  setDeleteId,
}) {
  return (
    <Card className="cards">
      <div className={`card ${status}`} data-id={id}>
        <div className="id column">{id}</div>
        <div className="name column">{title}</div>
        <div className="deadline column">
          <span>Prazo</span>

          {status === 'progress' ? (
            <p> {remainingDays} dias para a entrega</p>
          ) : (
            <p>Prazo Encerrado</p>
          )}
        </div>
        <div className="amount column">
          <span>Valor</span>
          <p>R$ {budget.toFixed(2).replace('.', ',')}</p>
        </div>
        <div className="status badge column">
          {status === 'progress' ? 'Em andamento' : 'Encerrado'}
        </div>
        <div className="actions column flex">
          <p className="sr-only">Ações</p>
          <Link to={`/edit-jobs/${id}`} title="Editar Job">
            <img src={Edit} alt="Editar Job" />
          </Link>

          <Link
            to=""
            title="Excluir Job"
            onClick={() => {
              setIsOpenModal(true);
              setDeleteId(id);
            }}
          >
            <img src={Trash} alt="Excluir Job" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
