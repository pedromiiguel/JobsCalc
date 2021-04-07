import React from 'react';
import styled from 'styled-components';

// import './Button.css';

const Button = styled.button`
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

  background: ${(props) => props.background};
  color: ${(props) => props.color};

  line-height: 1.5rem;

  &:hover {
    background: ${(props) => props.hover};
  }

  /* .button {
    line-height: 1.5rem;
  }

  .button.orange {
    background: ${(props) => props.theme.colors.colorSecondary};
    color: ${(props) => props.theme.colors.colorText};
  }

  .button.orange:hover {
    background: #fa9c2d;
  }

  
  .button.green {
    background: ${(props) => props.theme.colors.colorSave};
    color: ${(props) => props.theme.colors.colorText};
  }

  .button.green:hover {
    background: #3cc73c;
  }

  .button.gray {
    color: ${(props) => props.theme.colors.colorCardContent};
    background: ${(props) => props.theme.colors.colorCancel};
  }

  .button.gray:hover {
    background: #eceef0;
  }

  .button.red {
    background: ${(props) => props.theme.colors.colorDelete};
    color: ${(props) => props.theme.colors.colorText};
  }

  .button.red:hover {
    background: #fa3f38;
  }

  .button.white {
    background: #fcfdff;
    border: 1px solid #e1e3e6;
  }

  .button.white:hover {
    background: #f0f2f5;
  }

  .button-group {
    display: flex;
    align-items: center;
  }

  .button + .button {
    margin-left: 1rem;
  }

  .actions .button {
    width: 2.5rem;
    height: 2.5rem;

    padding: 0;
  }

  .actions .button + button {
    margin-left: 0.5rem;
  } */
`;

export default function Buttons({
  children,
  rota,
  text,
  color,
  background,
  hover,
}) {
  return (
    <Button color={color} background={background} hover={hover} href={rota}>
      <span>{children}</span>
      {text}
    </Button>
  );
}
