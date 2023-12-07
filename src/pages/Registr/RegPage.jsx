import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './RegPage.css';
import RegBlock from '../../components/Registration/RegBlock';

const RegPage = () => {
  return (
    <div className="container">
      <LogoBlock />
      <RegBlock />
    </div>
  );
};

export default RegPage;
