import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './MainPage.css';
import LoginBlock from '../../components/Login/LoginBlock';

const MainPage = () => {
  return (
    <div className="container">
      <LogoBlock />
      <LoginBlock />
    </div>
  );
};

export default MainPage;
