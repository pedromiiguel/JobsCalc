import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader/PageHeader';
import Cards from '../../components/Card/Card';
import MoneyGray from '../../images/money-gray.svg';

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
  return (
    <PageJob id="page-job">
      <PageHeader title="Adicionar Novo Job" />

      <div className="container flex ">
        <main>
          <Form id="form-job">
            <Form.Fieldset>
              <Form.Legend>Dados do Job</Form.Legend>
              <div className="separator light"></div>

              <div className="input-wrapper">
                <Form.Label htmlFor="name">Nome do Job</Form.Label>
                <Form.Input type="text" id="name" name="name" />
              </div>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="daily-hours">
                    Quantas horas <br />
                    por dia vai dedicar ao job?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    step="0.1"
                    id="daily-hours"
                    name="daily-hours"
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="total-hours">
                    Estimativa de <br />
                    horas para esse Job?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="total-hours"
                    name="total-hours"
                  />
                </div>
              </Form.InputGroup>
            </Form.Fieldset>
          </Form>
        </main>
        <Cards>
          <img src={MoneyGray} alt="Imagem de Dinheiro" />
        </Cards>
      </div>
    </PageJob>
  );
}
