import React from 'react';

import { Container, Title } from '../../styles/GlobalStyles';
import { Div } from './styled';

export default function Details() {
  return (
    <Container>
      <Title>3-D Man</Title>
      <Div>
        <img
          src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt="dasdas"
        />

        <p>
          Rick Jones has been Hulk&apos;s best bud since day
          one,dasdasdadadsases it like a giant bowling ball of destruction!
        </p>
      </Div>
    </Container>
  );
}
