import React from 'react';
import '../../pages/Contact/ContactPage.css'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const contactMethods = ['Gmail', 'WhatsApp', 'Instagram', 'LinkedIn', 'GitHub'];

const RotatingContactMethod = () => {
    const [methodIndex, setMethodIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = window.setInterval(() => {
            setMethodIndex((currentIndex) => (currentIndex + 1) % contactMethods.length);
        }, 1500);

        return () => window.clearInterval(interval);
    }, []);

    return <b key={methodIndex} className="site-contacto" aria-live="polite">{contactMethods[methodIndex]}</b>;
};

const Contact = () => (

    <section className="contactos" id="contactos">

        <header className="section-heading contact-heading">
            <span className="section-kicker">
                <FormattedMessage id="contact-kicker" defaultMessage="Let's connect" />
            </span>
            <h2 className="heading">
                <FormattedMessage id='contact' defaultMessage='Contact' />
            </h2>
            <p className="section-description">
                <FormattedMessage
                    id="contact-intro"
                    defaultMessage="Have a project in mind? Let's talk about how I can help."
                />
            </p>
        </header>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <RotatingContactMethod />

        </h3>

        <div className="icons">
            <a href="mailto:barbouchyoussef34@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=29535083" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">
                    WhatsApp
                </div>
            </a>
            
            <a href="https://www.instagram.com/yousseffbarbouch/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">
                    Instagram
                </div>
            </a>
            
            <a href="https://www.linkedin.com/in/youssefbarbouch/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/barbouchyoussef/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);
