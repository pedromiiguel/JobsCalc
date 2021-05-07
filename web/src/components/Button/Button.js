import React from 'react';
import styled from 'styled-components';

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
`;

export default function Buttons({
  children,
  text,
  color,
  background,
  hover,
  ...rest
}) {
  return (
    <Button color={color} background={background} hover={hover} {...rest}>
      <span>{children}</span>
      {text}
    </Button>
  );
}
