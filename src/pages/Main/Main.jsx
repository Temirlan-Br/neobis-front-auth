import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './Main.css';
import LoginBlock from '../../components/Login/LoginBlock';

const Main = () => {
  return (
    <div className="container">
      <LogoBlock />
      <LoginBlock />
    </div>
  );
};

export default Main;
