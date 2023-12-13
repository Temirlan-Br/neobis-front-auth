import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import publicPassword from '../../assets/eye.png';
import hiddenPassword from '../../assets/blind.png';
import './LoginBlock.css';
import { login } from '../../api/api';

const LoginBlock = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: userName,
      password: password,
    };
    login(payload)
      .then((response) => {
        if (response.status === 200) {
          navigate('/welc');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const switchVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form__block">
      <h3 className="form__title">Велком бэк!</h3>
      <div className="form">
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Введи туда-сюда логин"
          className="form__input"
        />
        <div className="password__block">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
        <button onClick={onSubmit} className="btn-to-log">
          Войти
        </button>
      </div>

      <div className="link-to-reg">
        <Link to={'/reg'} className="link-to-reg">
          У меня еще нет аккаунта
        </Link>
      </div>
    </div>
  );
};

export default LoginBlock;
