import React from 'react';

import { Form_input, Label } from './styles';

type InputProps = {
  value: string;
};

const Input = ({ value }: InputProps) => {
  return (
    <>
      <Label htmlFor={value} />
      <Form_input id={value} placeholder={value} />
    </>
  );
};

export default Input;
