import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Card, TextCard, CardFlex } from './styled';
import { Container, Title } from '../../styles/GlobalStyles';
import axios, { keysApi } from '../../services/axios';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(
        `/characters?ts=${keysApi.ts}&apikey=${keysApi.publicKey}&hash=${keysApi.createHash}&limit=9`
      );
      setCharacters(response.data.data.results);
    }
    getCharacters();
  }, []);

  return (
    <Container>
      <Title>Marvel Characters</Title>
      <CardFlex>
        {characters.map((character) => (
          <Link key={character.id} to={`/${character.id}`}>
            {console.log(character)}
            <Card>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="aa"
              />
              <TextCard>
                <p>{character.name}</p>
              </TextCard>
            </Card>
          </Link>
        ))}
      </CardFlex>
    </Container>
  );
}
