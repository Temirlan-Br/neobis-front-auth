import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './Main.css';
import FormBlock from '../../components/Form/FormBlock';

const Main = () => {
  return (
    <div className="container">
      <LogoBlock />
      <FormBlock />
    </div>
  );
};

export default Main;
