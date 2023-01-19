import React from 'react';

import { Title, Card, TextCard, CardFlex } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  return (
    <Container>
      <Title>Marvel Characters</Title>
      <CardFlex>
        <Card>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            alt="aa"
          />
          <TextCard>
            <p>Nome do personagem</p>
          </TextCard>
        </Card>
        <Card>
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
            alt="aa"
          />
          <TextCard>
            <p>Nome do personagem</p>
          </TextCard>
        </Card>
        <Card>
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg"
            alt="aa"
          />
          <TextCard>
            <p>Nome do personagem</p>
          </TextCard>
        </Card>
      </CardFlex>
    </Container>
  );
}
