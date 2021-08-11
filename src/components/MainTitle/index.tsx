import React from 'react';

import { Title } from './styles';

type TitleProps = {
  value: string;
};

const MainTitle = ({ value }: TitleProps) => {
  return <Title>{value}</Title>;
};

export default MainTitle;
