import styled from 'styled-components';
import { primaryDarkColor, primaryColor } from '../../config/colors';

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  position: relative;
  width: 30%;
  background-color: ${primaryDarkColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  height: 45rem;
  margin-bottom: 3rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: ${primaryColor};
    top: -7px;
    left: -5px;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
export const TextCard = styled.div`
  padding: 1rem 2rem;
  color: #fff;
  font-size: 2rem;
  height: 12rem;

  p {
    max-width: 100%;
    text-align: center;
  }
`;

export const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
