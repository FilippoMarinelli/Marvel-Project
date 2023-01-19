import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: ${colors.primaryColor};
    color: ${colors.primaryColor};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;
    font-weight: 700;
  }

  button:hover{
    background: #790427;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 120rem;
  background: #fff;
  margin: 11rem auto 3rem auto;
  padding: 5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem rgb(0, 0, 0, 0.4);
  color: black;
`;
