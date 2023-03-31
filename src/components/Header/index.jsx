import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuToggle } from "../MenuToggle";
import Puzzle from '../../assets/icons/puzzle.svg';
import cn from 'classnames';
import './styles.scss';

const ELEMENT_START = 6;

function Header() {
  const [isMain, setIsMain] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const logo = useRef(null);

  const closeMenu = () => setIsActive(false);
  const openMenu = () => setIsActive(true);

  const handleMenuButton = () => isActive ? closeMenu() : openMenu();

  const onLinkClick = () => {
    setIsMain(false);
    closeMenu();
  };

  const onHomeClick = () => {
    setIsMain(true);
  };

  const onScroll = () => {
    const elementHeight = logo.current.offsetHeight;
    const elementPoint = elementHeight / ELEMENT_START;

    setIsScroll(window.pageYOffset > elementPoint);
  };

  useEffect(() => {
    window.onscroll = () => onScroll();

    return () => window.onscroll = null;
  }, []);

  return (
    <header className="page__section page__header header">
      <div
        className={cn('menu header__menu', {['header__menu_active']: isScroll})}
      >
        <button
          type="button"
          onClick={handleMenuButton}
          className={`menu__icon${isActive ? ' menu__icon_active' : ''}`}
        >
          <span />
        </button>
        <div className={`menu__body${isActive ? ' menu__body_active' : ''}`}>
          <ul className="menu__list">
            <li className={cn('menu__toggle-container', {['_hidden']: isMain})}>
              <NavLink
                onClick={onHomeClick}
                to="/"
                className="menu__toggle-link"
              >
                <MenuToggle />
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink onClick={onLinkClick} to="/about" className="menu__link">
                о школе
              </NavLink>
            </li>
            {/* Add later */}
            {/*<li className="menu__item">*/}
            {/*  <NavLink*/}
            {/*    onClick={onLinkClick}*/}
            {/*    to="/careers"*/}
            {/*    className="menu__link"*/}
            {/*  >*/}
            {/*    расписание*/}
            {/*  </NavLink>*/}
            {/*</li>*/}
            <li className="menu__item">
              <NavLink
                onClick={onLinkClick}
                to="/contact"
                className="menu__link"
              >
                контакты
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink onClick={e => e.preventDefault()} to="#" className="menu__link menu__link_disabled" disabled>
                блог (скоро)
              </NavLink>
            </li>
            {/* Add later */}
            {/*<li className="menu__item">*/}
            {/*  <a*/}
            {/*    href="https://www.youtube.com/watch?v=JNU8DhMKryI&ab_channel=MediaMonks"*/}
            {/*    target="blank"*/}
            {/*    className="menu__link"*/}
            {/*  >*/}
            {/*    программа*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
        <div className="menu__body_background" />
      </div>
      <img
        ref={logo}
        src={Puzzle}
        alt="brain school logo"
        className={cn('header__logo', {['header__logo_active']: isScroll})}
      />
    </header>
  );
}

export default Header;
