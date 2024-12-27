import React from 'react';
import { useNavigate } from 'react-router-dom';
import { generateRandomId } from '../utils/helper';
import './layout.css'; // Import the CSS file for styling
import { ROUTE } from '../utils/constant';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <h1 className="header-logo">Historical Places</h1>
      <button
        className="btn btn-primary header-button"
        onClick={() => navigate(ROUTE.DETAIL.replace(':id', generateRandomId()))}
        title="Fun: randomly generated place for you"
      >
        Random Place
      </button>
    </header>
  );
};

export default Header;
