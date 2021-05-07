import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const [user, setUser] = useState({});
  const [editUser, setEditUser] = useState({});

  useEffect(() => {
    api.get('profile').then((response) => {
      // response.data.user['value-hour'].toFixed(2).replace('.', ',')
      setUser({
        name: response.data.name,
        avatar: response.data.avatar,
        monthly_budget: response.data.monthly_budget,
        days_per_week: response.data.days_per_week,
        hours_per_day: response.data.hours_per_day,
        vacation_per_year: response.data.vacation_per_year,
        value_hour: response.data.value_hour.toFixed(2).replace('.', ','),
      });
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = editUser;

    await api.post('profile', data);

    history.push('/');
  }

  return (
    <PageProfile id="page-profile">
      <PageHeader title="Meu perfil" />

      <PageProfile.Container className="container animate-up delay-2">
        <Card>
          <img src={user.avatar} alt="Imagem do perfil" />
          <h2>{user.name}</h2>
          <p>
            O valor da sua hora é <br />
            <strong>R$ {user.value_hour}</strong>
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
          <Form id="form-profile" onSubmit={handleSubmit}>
            <Form.Fieldset>
              <Form.Legend>Dados do perfil</Form.Legend>
              <Form.Separator className="separator light"></Form.Separator>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="name">Nome</Form.Label>
                  <Form.Input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={user.name}
                    onChange={(event) => {
                      setEditUser((prevUser) => {
                        return { ...prevUser, name: event.target.value };
                      });
                    }}
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="avatar">Link da foto</Form.Label>
                  <Form.Input
                    placeholder="https://"
                    type="url"
                    id="avatar"
                    name="avatar"
                    defaultValue={user.avatar}
                    onChange={(event) =>
                      setEditUser((prevUser) => {
                        return { ...prevUser, avatar: event.target.value };
                      })
                    }
                  />
                </div>
              </Form.InputGroup>
            </Form.Fieldset>

            <Form.Fieldset>
              <Form.Legend>Planejamento</Form.Legend>
              <Form.Separator className="separator light"> </Form.Separator>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="monthly_budget">
                    Quanto eu <br />
                    quero ganhar por mês?
                  </Form.Label>
                  <Form.Input
                    type="amount"
                    step="0.1"
                    id="monthly_budget"
                    name="monthly_budget"
                    placeholder="R$"
                    defaultValue={user.monthly_budget}
                    onChange={(event) =>
                      setEditUser((prevUser) => {
                        return {
                          ...prevUser,
                          monthly_budget: event.target.value,
                        };
                      })
                    }
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="hours_per_day">
                    Quantas horas <br />
                    quero trabalhar por dia?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="hours_per_day"
                    name="hours_per_day"
                    defaultValue={user.hours_per_day}
                    onChange={(event) =>
                      setEditUser((prevUser) => {
                        return {
                          ...prevUser,
                          hours_per_day: event.target.value,
                        };
                      })
                    }
                  />
                </div>
              </Form.InputGroup>

              <Form.InputGroup className="input-group">
                <div className="input-wrapper">
                  <Form.Label htmlFor="days_per_week">
                    Quantos dias <br />
                    quero trabalhar por semana?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="days_per_week"
                    name="days_per_week"
                    defaultValue={user.days_per_week}
                    onChange={(event) =>
                      setEditUser((prevUser) => {
                        return {
                          ...prevUser,
                          days_per_week: event.target.value,
                        };
                      })
                    }
                  />
                </div>

                <div className="input-wrapper">
                  <Form.Label htmlFor="vacation_per_year">
                    Quantas semanas <br />
                    por ano você quer tirar férias?
                  </Form.Label>
                  <Form.Input
                    type="number"
                    id="vacation_per_year"
                    name="vacation_per_year"
                    defaultValue={user.vacation_per_year}
                    onChange={(event) =>
                      setEditUser((prevUser) => {
                        return {
                          ...prevUser,
                          vacation_per_year: event.target.value,
                        };
                      })
                    }
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
