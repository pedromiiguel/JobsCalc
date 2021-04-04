import React from 'react';
import PageHeader from '../../components/PageHeader/pageHeader';
import Card from '../../components/Card/Card';
import './landing.css';

export default function Landing() {
  return (
    <div className="page-index">
      <PageHeader />
      <div class="container">
        <main class="animate-up delay-2">
          <h1 class="sr-only">Trabalhos</h1>
          <Card style="progress" text="Em andamento"/>
          <Card style="done" text="Encerrado"/>
        </main>
      </div>
    </div>
  );
}
