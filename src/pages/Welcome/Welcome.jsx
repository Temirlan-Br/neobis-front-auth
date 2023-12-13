import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import logo from '../../assets/logo.svg';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Добро пожаловать!</h1>
      <div className="logo">
        <p className="logo__subtitle">Lorby - твой личный репетитор</p>
        <img src={logo} alt="" />
      </div>
      <Link to={'/'} className="logout">
        Выйти
      </Link>
    </div>
  );
};

export default Welcome;
