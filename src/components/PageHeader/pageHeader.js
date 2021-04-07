import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Back from '../../images/back.svg';
// import './PageHeader.css';

const PageHeader = styled.header`
  background: ${(props) => props.theme.colors.colorPrimary};
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 3rem;
  

  height: 5.5rem;
  margin-bottom: 4rem;
`;

PageHeader.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

PageHeader.Title = styled.h1`
    margin: 0 auto;

    font-family: Inter;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme.colors.colorHeaderInnerTitle};
`;

export default function pageHeader({ title }) {
  return (
    <PageHeader>
      <PageHeader.Container className="container animate-up">
        <Link to="/" className="back">
          <img src={Back} alt="Voltar" />
        </Link>
        <PageHeader.Title>{title}</PageHeader.Title>
      </PageHeader.Container>
    </PageHeader>
  );
}
