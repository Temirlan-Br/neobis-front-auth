import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './Reg.css';
import RegBlock from '../../components/Registration/RegBlock';

const Reg = () => {
  return (
    <div className="container">
      <LogoBlock />
      <RegBlock />
    </div>
  );
};

export default Reg;
