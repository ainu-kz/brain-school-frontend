import React from 'react';
import facebookPath from '../../assets/images/facebook.svg';
import twitterPath from '../../assets/images/twitter.svg';
import linkedinPath from '../../assets/images/linkedin.svg';
import './styles.scss';

const Index = () => (
    <footer className="page__section page__footer footer">
      <div className="footer__social social">
        <a
            href="https://www.instagram.com/brainschool.kz/"
            target="blank"
            className="social__item"
        >
          <img src={facebookPath} alt='social icon' className='footer__icon' />
          <span />
        </a>
        <a
            href="https://twitter.com/brainschool.kz"
            target="blank"
            className="social__item"
        >
          <img src={twitterPath} alt='social icon' className='footer__icon' />
        </a>
        <a
            href="https://www.facebook.com/brainscoolkz"
            target="blank"
            className="social__item"
        >
          <img src={linkedinPath} alt='social icon' className='footer__icon' />
          <span />
        </a>
      </div>
      <p className="footer__privacy">
        © BrainSchool | 2023
      </p>
    </footer>
);

export default Index;
