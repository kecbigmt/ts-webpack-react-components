import React, { FC } from 'react';

export type ButtonProps = {
  label: string;
}

const style = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: '0',
  borderRadius: '.25rem',
  fontSize: '1rem',
}

const Button: FC<ButtonProps> = ({ label }) => (
  <button style={style}>{label}</button>
);

export default Button;