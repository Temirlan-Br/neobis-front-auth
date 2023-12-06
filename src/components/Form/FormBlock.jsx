import { React, useState } from 'react';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './FormBlock.css';

const FormBlock = () => {
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
        <button className="login__btn">Войти</button>
      </form>

      <div className="login__link">
        <p>У меня еще нет аккаунта</p>
      </div>
    </div>
  );
};

export default FormBlock;
