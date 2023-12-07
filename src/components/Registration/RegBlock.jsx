import React from 'react';
import { Link } from 'react-router-dom';
import './RegBlock.css';

const RegBlock = () => {
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
              type="password"
              placeholder="Создай пароль"
              className="form__input"
            />
          </div>
          <div className="password__block">
            <input
              type="password"
              placeholder="Повтори пароль"
              className="form__input"
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
