import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            alt="MarvelLogo"
          />
        </Link>
        <form>
          <input type="text" placeholder="Nome do personagem" />
          <button type="submit">
            <FaSearch size={12} />
          </button>
        </form>
      </div>
    </Nav>
  );
}
