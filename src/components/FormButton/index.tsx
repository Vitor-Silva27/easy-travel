import React from 'react';

import { Button } from './styles';

type ButtonProps = {
  value: string;
};

const FormButton = ({ value }: ButtonProps) => {
  return <Button type="button">{value}</Button>;
};

export default FormButton;
