import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './LoginBlock.css';

const LoginBlock = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const switchVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form__block">
      <h3 className="form__title">Велком бэк!</h3>
      <form className="form">
        <input
          type="text"
          placeholder="Введи туда-сюда логин"
          className="form__input"
        />
        <div className="password__block">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Пароль (тоже введи)"
            className="form__input"
          />
          <img
            onClick={switchVisibility}
            src={passwordVisible ? publicPassword : hiddenPassword}
            alt="eye"
          />
        </div>
        <button className="btn-to-log">Войти</button>
      </form>

      <div className="link-to-reg">
        <Link to={'/login'} className="link-to-reg">
          У меня еще нет аккаунта
        </Link>
      </div>
    </div>
  );
};

export default LoginBlock;
