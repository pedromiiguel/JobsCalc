import React, { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader/PageHeader';
import Card from '../../components/Card/Card';
import MoneyGray from '../../images/money-gray.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const PageJob = styled.div``;

const Form = styled.form`
  fieldset + fieldset {
    margin-top: 3.5rem;
  }

  .separator {
    margin-bottom: 2rem;
  }
`;

Form.Fieldset = styled.fieldset`
  border: none;
`;

Form.Legend = styled.legend`
  color: ${(props) => props.theme.colors.colorCardTitle};

  font-family: IBM Plex Sans;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.625rem;
`;

Form.InputGroup = styled.div`
  display: flex;
  margin-top: 1.5rem;

  .input-wrapper + .input-wrapper {
    margin-left: 1.5rem;
  }
`;

Form.Label = styled.label`
  display: inline-block;

  font-family: IBM Plex Sans;
  font-weight: 500;
  color: #787880;

  margin-bottom: 1rem;
`;

Form.Input = styled.input`
  font-family: IBM Plex Sans;
  font-weight: 500;

  background: white;

  border: 1px solid #e1e3e6;
  border-radius: 0.313rem;

  padding: 0.75rem 1.5rem;

  width: 100%;

  color: ${(props) => props.theme.colors.colorCardTitle};

  ::placeholder {
    color: #bfbfcc;
  }
`;

export default function Job() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [dailyHours, setDailyHours] = useState('');
  const [totalHours, setTotalHours] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,
      daily_hours: dailyHours,
      total_hours: totalHours,
    };

    await api.post('job', data);
  
    history.push('/');
  }

  return (
    <PageJob id="page-job">
      <PageHeader title="Adicionar Novo Job" />

      <div className="container flex ">
        <main>
          <Form id="form-job" onSubmit={handleSubmit}>
            <Form.Fieldset>
              <Form.Legend>Dados do Job</Form.Legend>
              <div className="separator light"></div>

              <div className="input-wrapper">
                <Form.Label htmlFor="name">Nome do Job</Form.Label>
                <Form.Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="daily_hours">
                    Quantas horas <br />
                    por dia vai dedicar ao job?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    step="0.1"
                    id="daily_hours"
                    name="daily-hours"
                    onChange={(event) => setDailyHours(event.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="total_hours">
                    Estimativa de <br />
                    horas para esse Job?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="total_hours"
                    name="total_hours"
                    onChange={(event) => setTotalHours(event.target.value)}
                  />
                </div>
              </Form.InputGroup>
            </Form.Fieldset>
          </Form>
        </main>
        <Card form="form-job">
          <img src={MoneyGray} alt="Imagem de Dinheiro" />
        </Card>
      </div>
    </PageJob>
  );
}
