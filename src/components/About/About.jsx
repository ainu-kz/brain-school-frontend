import React, { useEffect } from 'react';
import headerBigPath from '../../assets/wallpapers/calculator.jpg';
import Carousel from '../Carousel/Carousel';
import MonksStat from '../MonksStat/MonksStat';
import './styles.scss';

function About() {
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
            Образование является важной частью жизни. Быть образованным — есть умение разбираться в окружающем мире, иметь свое мнение, приобретать уникальный опыт. Для любого человека смысл данного понятия индивидуален. Образовательный центр Траектория обеспечивает образовательную площадку, где вы можете проявить свой потенциал и приобрести новые знания.
          </p>
          <p className="content__paragraph">
            Для желающих повысить эффективность работы с компьютером проводятся спецкурсы по работе с компьютером.
          </p>
          <p className="content__paragraph">
            На занятиях делается акцент на то, чтобы ученик совершенствовал произношение, корректно применял правила грамматики, понимал речь носителя, мог верно формировать предложения и вести диалог, всё время обогащал запас лексики.
          </p>
        </article>
        <Carousel />
        <MonksStat className="about__info" />
      </div>
    </section>
  );
}

export default About;
