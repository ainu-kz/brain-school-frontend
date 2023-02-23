import React from 'react';

function MonksStat(props) {
  return (
    <section className={`monks-stat ${props.className}`}>
      <ul className="monks-stat__data data">
        <li className="data__item item">
          <span className="item__title">Founded in</span>
          <span className="item__value">2001</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Monks</span>
          <span className="item__value">2000+</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Offices</span>
          <span className="item__value">24</span>
        </li>
        <li className="data__item item">
          <span className="item__title">Cannes Lions</span>
          <span className="item__value">131</span>
        </li>
        <li className="data__item item">
          <span className="item__title">FWAs</span>
          <span className="item__value">250+</span>
        </li>
      </ul>
    </section>
  );
}

export default MonksStat;
