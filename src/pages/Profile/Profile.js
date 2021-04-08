import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import styled from 'styled-components';

const PageProfile = styled.div`
  width: 100vw;
  height: 100vh;
`;

PageProfile.Container = styled.div`
  display: flex;
`;

PageProfile.Main = styled.main`
  flex: 1;
`;

const Card = styled.aside`
  background: ${(props) => props.theme.colors.colorCardBackground};
  color: ${(props) => props.theme.colors.colorCardTitle};

  border: 1px solid #e1e3e6;
  border-radius: 0.313rem;

  width: 22rem;

  margin-right: 8rem;

  text-align: center;

  padding: 3.875rem 4.625rem;

  img {
    border-radius: 50%;

    border: 0.25rem ${(props) => props.theme.colors.colorSecondary} solid;

    width: 11.25rem;
    height: 11.25rem;

    margin-bottom: 1.5rem;
  }

  h2 {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.875rem;

    margin-bottom: 3.875rem;
  }

  p {
    margin-bottom: 1.75rem;

    font-family: Inter;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

const Form = styled.form``;

Form.Fieldset = styled.fieldset`
  border: none;
  margin-top: 1.5rem;
`;

Form.Legend = styled.legend`
  color: ${(props) => props.theme.colors.colorCardTitle};
  font-family: IBM Plex Sans;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.625rem;
`;

Form.Separator = styled.div`
  margin-bottom: 2rem;
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

export default function Profile() {
  return (
    <PageProfile id="page-profile">
      <PageHeader title="Meu perfil" />

      <PageProfile.Container className="container animate-up delay-2">
        <Card>
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
            color="#FCFDFF"
            background="#36B336"
            hover="#3cc73c"
            form="form-profile"
            type="submit"
            text="Salvar dados"
          />
        </Card>

        <PageProfile.Main>
          <Form id="form-profile">
            <Form.Fieldset>
              <Form.Legend>Dados do perfil</Form.Legend>
              <Form.Separator className="separator light"></Form.Separator>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="name">Nome</Form.Label>
                  <Form.Input type="text" id="name" name="name" />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="avatar">Link da foto</Form.Label>
                  <Form.Input
                    placeholder="https://"
                    type="url"
                    id="avatar"
                    name="avatar"
                  />
                </div>
              </Form.InputGroup>
            </Form.Fieldset>

            <Form.Fieldset>
              <Form.Legend>Planejamento</Form.Legend>
              <Form.Separator className="separator light"> </Form.Separator>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="monthly-budget">
                    Quanto eu <br />
                    quero ganhar por mês?
                  </Form.Label>
                  <Form.Input
                    type="amount"
                    step="0.1"
                    id="monthly-budget"
                    name="monthly-budget"
                    placeholder="R$"
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="hours-per-day">
                    Quantas horas <br />
                    quero trabalhar por dia?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="hours-per-day"
                    name="hours-per-day"
                  />
                </div>
              </Form.InputGroup>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="days-per-week">
                    Quantos dias <br />
                    quero trabalhar por semana?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="days-per-week"
                    name="days-per-week"
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="vacation-per-year">
                    Quantas semanas <br />
                    por ano você quer tirar férias?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="vacation-per-year"
                    name="vacation-per-year"
                  />
                </div>
              </Form.InputGroup>
            </Form.Fieldset>
          </Form>
        </PageProfile.Main>
      </PageProfile.Container>
    </PageProfile>
  );
}
