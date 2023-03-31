import React from 'react';
import './styles.scss'

function SchoolStat(props) {
  return (
    <section className={`monks-stat ${props.className}`}>
      <ul className="monks-stat__data data">
        <li className="data__item item">
          <span className="item__title">Основано</span>
          <span className="item__value">2021</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Заданий</span>
          <span className="item__value">250+</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Курсов</span>
          <span className="item__value">12</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Учеников</span>
          <span className="item__value">400+</span>
        </li>
      </ul>
    </section>
  );
}

export default SchoolStat;
