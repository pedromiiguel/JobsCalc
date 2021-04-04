import React from 'react';
import './Button.css';

export default function Buttons({classDescription, children, rota, text}) {
  return (
    <a class={classDescription} href={rota}>
      <span>
        {children}
      </span>
      {text}
    </a>
  );
}
