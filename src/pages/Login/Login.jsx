import React from 'react';
import LogoBlock from '../../components/Logo/LogoBlock';
import './Login.css';
import RegBlock from '../../components/Registration/RegBlock';

const Login = () => {
  return (
    <div className="container">
      <LogoBlock />
      <RegBlock />
    </div>
  );
};

export default Login;
