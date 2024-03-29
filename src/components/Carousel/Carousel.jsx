import React, { useState } from 'react';
import './styles.scss';

import slide1Path from '../../assets/wallpapers/study.jpg';
import slide2Path from '../../assets/wallpapers/numbers.jpg';
import slide3Path from '../../assets/wallpapers/classroom.jpg';
import slide4Path from '../../assets/wallpapers/pencils.jpg';
import nextPath from '../../assets/icons/next.ico';
import prevPath from '../../assets/icons/prev.ico';

const slidesData = [slide1Path, slide2Path, slide3Path, slide4Path];

const Carousel = () => {
  const { length } = slidesData;
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(length - 1);
  const [next, setNext] = useState(1);

  const nextSlide = () => {
    setPrev(current);
    setCurrent(current === length - 1 ? 0 : current + 1);
    setNext(next === length - 1 ? 0 : next + 1);
  };

  const prevSlide = () => {
    setPrev(prev === 0 ? length - 1 : prev - 1);
    setCurrent(current === 0 ? length - 1 : current - 1);
    setNext(current);
  };

  return (
    <section className="carousel">
      <div
        onClick={prevSlide}
        className="carousel__button carousel__button_prev"
      >
        <img src={prevPath} alt="prev" className="carousel__button-img" />
      </div>
      <div
        onClick={nextSlide}
        className="carousel__button carousel__button_next"
      >
        <img src={nextPath} alt="next" className="carousel__button-img" />
      </div>
      <div className="carousel__slider">
        {slidesData.map((slide, index) => (
          <img
            src={slide}
            alt="slide"
            key={index}
            className={`${
              current === index
                ? 'carousel__image _center'
                : prev === index
                  ? 'carousel__image _left'
                  : next === index
                    ? 'carousel__image _right'
                    : 'carousel__image'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
