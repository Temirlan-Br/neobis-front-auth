import './LogoBlock.css';
import React from 'react';
import logo from '../../assets/logo.svg';

const Welcome = () => {
  return (
    <div className="logo__block">
      <img src={logo} alt="" />
      <h1 className="logo__title">Lorby</h1>
      <p className="logo__subtitle">Твой личный репетитор</p>
    </div>
  );
};

export default Welcome;
