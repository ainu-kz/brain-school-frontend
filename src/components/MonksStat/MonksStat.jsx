import React from 'react';

function MonksStat(props) {
  return (
    <section className={`monks-stat ${props.className}`}>
      <ul className="monks-stat__data data">
        <li className="data__item item">
          <span className="item__title">Основано</span>
          <span className="item__value">2021</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Учеников</span>
          <span className="item__value">2000+</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Курсов</span>
          <span className="item__value">24</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Классов</span>
          <span className="item__value">131</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Скачиваний</span>
          <span className="item__value">250+</span>
        </li>
      </ul>
    </section>
  );
}

export default MonksStat;
