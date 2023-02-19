import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    const [isMain, setIsMain] = useState(true);
    const [isScroll, setIsScroll] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const logo = useRef(null);

    useEffect(() => {
      window.onscroll = () => {
        onScroll()
      }
    }, []);

    const handleMenuButton = () => {
        isActive ? handleCloseMenu() : handleOpenMenu()
    }

    const handleCloseMenu = () => {
        setIsActive(false);
    }

    const handleOpenMenu = () => {
        setIsActive(true);
    }

    const onLinkClick = () => {
        setIsMain(false);
        handleCloseMenu();
    }

    const onHomeClick = () => {
        setIsMain(true);
    }

    const onScroll = () => {
        const elementHeight = logo.current.offsetHeight;
        const elementStart = 6;
        let elementPoint = elementHeight / elementStart;
        window.pageYOffset > elementPoint ? setIsScroll(true) : setIsScroll(false)
    };

    return (
        <header className="page__section page__header header">
            <div className={`menu header__menu ${isScroll ? "header__menu_active" : ""}`}>
                <button onClick={handleMenuButton} className={ `menu__icon${isActive ? " menu__icon_active" : ""}` }>
                    <span />
                </button>
                <div className={ `menu__body${isActive ? " menu__body_active" : ""}` }>
                    <ul className="menu__list">
                        <li className={`menu__toggle-container ${isMain ? "_hidden" : ""}`}>
                            <NavLink onClick={onHomeClick} to="/" className="menu__toggle-link">
                                <div className="menu__toggle">
                                    <div className="menu__toggle-top">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="menu__toggle-bottom">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={onLinkClick} to="/about" className="menu__link">about</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={onLinkClick} to="/careers" className="menu__link">careers</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={onLinkClick} to="/contact" className="menu__link">contact</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink onClick={onLinkClick} to="#" className="menu__link">blog (coming soon ...)</NavLink>
                        </li>
                        <li className="menu__item">
                            <a href="https://www.youtube.com/watch?v=JNU8DhMKryI&ab_channel=MediaMonks" target="blank" className="menu__link">watch our mixtape</a>
                        </li>
                    </ul>
                </div>
                <div className="menu__body_background" />
            </div>
            <div ref={logo} className={`header__logo ${isScroll ? 'header__logo_active' : ''}`}>
                media monks
            </div>
        </header>
    )
}
