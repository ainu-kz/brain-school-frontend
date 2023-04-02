import React, { useEffect } from 'react';
import headerBigPath from '../../assets/wallpapers/calculator.jpg';
import Carousel from '../Carousel/Carousel';
import SchoolStat from '../SchoolStat';
import './styles.scss';

export const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = 'Brain School | О Школе';
  });

  return (
    <section className="page__section page__about about">
      <picture>
        <img src={headerBigPath} alt="Header" className="about__cover" />
      </picture>
      <div className="about__content content">
        <article className="content__text">
          <h1 className="content__title">о школе</h1>
          <p className="content__paragraph">
            Brain School - это инновационный образовательный проект, целью которого является обучение студентов с учетом работы и формирования памяти. Проект основан на принципах нейропластичности, которые подчеркивают способность мозга изменяться и адаптироваться на протяжении всей жизни.
          </p>
          <p className="content__paragraph">
            Мы используем эти знания для создания уникального и увлекательного учебного процесса для студентов. Проект предоставляет студентам практические инструменты и техники, которые помогут им лучше запоминать и усваивать информацию.
          </p>
          <p className="content__paragraph">
            Используя сочетание передовых нейробиологических исследований и традиционных методов обучения, мы стремимся помочь студентам стать более эффективными учениками и улучшить свою академическую успеваемость.
          </p>
        </article>
        <Carousel />
        <SchoolStat className="about__info" />
      </div>
    </section>
  );
}
