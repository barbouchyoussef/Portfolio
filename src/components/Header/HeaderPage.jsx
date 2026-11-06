import React, { useContext } from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    const idioma = useContext(langContext);
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/" >
                <p><span>Youssef Barbouch</span></p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>
                <div id="buttons">
                    <button type="button" className="language-option" onClick={() => idioma.selectLanguage('en-US')} aria-label="Switch to English">🇺🇸 <span>EN</span></button>
                    <button type="button" className="language-option" onClick={() => idioma.selectLanguage('fr-FR')} aria-label="Passer au français">🇫🇷 <span>FR</span></button>
                </div>
            </nav>
            <button
                type="button"
                className="language-selector"
                onClick={() => idioma.selectLanguage(idioma.locale === 'fr-FR' ? 'en-US' : 'fr-FR')}
                aria-label="Change language"
                title={idioma.locale === 'fr-FR' ? 'English' : 'Français'}
            >
                {idioma.locale === 'fr-FR' ? 'EN' : 'FR'}
            </button>
        </header>
    )
}

export default React.memo(HeaderPage);
