import React from 'react';
import Back from '../../images/back.svg';
import './PageHeader.css';

export default function pageHeader({title}) {
  return (
    <header className="page-header inner">
      <div className="container animate-up">
        <a href="index.html" className="back">
          <img src={Back} alt="Voltar" />
        </a>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
