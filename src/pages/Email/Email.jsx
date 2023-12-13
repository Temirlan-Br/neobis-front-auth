import { React } from 'react';
import { Link } from 'react-router-dom';
import LogoBlock from '../../components/Logo/LogoBlock';
import './Email.css';

const Email = () => {
  return (
    <div className="container">
      <LogoBlock />
      <div className="email__block">
        <div className="email__info">
          <h3 className="email__title">
            Выслали письмо со ссылкой для завершения регистрации на почту
          </h3>
          <p className="email__subtitle">
            Если письмо не пришло, не спеши ждать совиную почту - лучше проверь
            ящик “Спам”
          </p>
          <p className="email__signs">(´｡• ω •｡`)</p>
          <Link to={'/'}>
            <button className="email__btn">Пройти авторизацию</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Email;
