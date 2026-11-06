import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const Header = () => {
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

            <NavLink className="logo" to="/">
                <p><span>Youssef Barbouch</span></p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
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

export default React.memo(Header);
