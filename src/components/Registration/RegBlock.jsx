import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './RegBlock.css';

const RegBlock = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const switchVisibility = (e) => {
    if (e.target.id === 'password1') {
      setPasswordVisible(!passwordVisible);
    } else if (e.target.id === 'password2') {
      setPasswordVisible2(!passwordVisible2);
    }
  };

  return (
    <div>
      <div className="form__block">
        <h3 className="form__title">Создать аккаунт</h3>
        <form className="form">
          <input
            type="email"
            placeholder="Введи адрес почты"
            className="form__input"
          />

          <input
            type="text"
            placeholder="Придумай логин"
            className="form__input"
          />
          <div className="password__block">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Создай пароль"
              className="form__input"
            />
            <img
              onClick={switchVisibility}
              id="password1"
              src={passwordVisible ? publicPassword : hiddenPassword}
              alt="eye"
            />
          </div>
          <div className="password__block">
            <input
              type={passwordVisible2 ? 'text' : 'password'}
              placeholder="Повтори пароль"
              className="form__input"
            />
            <img
              onClick={switchVisibility}
              id="password2"
              src={passwordVisible2 ? publicPassword : hiddenPassword}
              alt="eye"
            />
          </div>

          <button className="btn-to-log">Войти</button>
        </form>

        <div className="link-to-log">
          <Link to={'/'} className="link-to-log">
            У меня есть аккаунт
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegBlock;
