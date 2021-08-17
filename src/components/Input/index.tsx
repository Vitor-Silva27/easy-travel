import React from 'react';

import { Form_input, Input_wrapper, Label, Input_icon } from './styles';

type InputProps = {
  value: string;
  img_path: string;
  type: string;
};

const Input = ({ value, img_path, type }: InputProps) => {
  return (
    <Input_wrapper>
      <Input_icon src={img_path} alt={value} />
      <Label htmlFor={value}>{value}</Label>
      <Form_input id={value} type={type} name={value} placeholder={value} />
    </Input_wrapper>
  );
};

export default Input;
