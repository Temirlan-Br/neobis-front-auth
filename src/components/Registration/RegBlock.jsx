import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './RegBlock.css';
import { register } from '../../api/api';

const RegBlock = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();

  const switchVisibility = (e) => {
    if (e.target.id === 'password1') {
      setPasswordVisible(!passwordVisible);
    } else if (e.target.id === 'password2') {
      setPasswordVisible2(!passwordVisible2);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: userName,
      email: email,
      password: password,
      password_check: checkPassword,
    };
    register(payload)
      .then((response) => {
        if (response.status === 201) {
          navigate('/mail');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="form__block">
        <h3 className="form__title">Создать аккаунт</h3>
        <div className="form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Введи адрес почты"
            className="form__input"
          />

          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
            placeholder="Придумай логин"
            className="form__input"
          />
          <div className="password__block">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
              onChange={(e) => setCheckPassword(e.target.value)}
              value={checkPassword}
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

          <button onClick={onSubmit} className="btn-to-log">
            Создать
          </button>
        </div>

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
