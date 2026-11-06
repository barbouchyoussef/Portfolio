import React from 'react';
import '../../pages/Service/ServicesPage.css';

import { FormattedMessage } from 'react-intl';

const services = [
    { icon: 'fa-drafting-compass', titleId: 'design', descriptionId: 'design-info' },
    { icon: 'fa-laptop-code', titleId: 'development', descriptionId: 'development-info' },
    { icon: 'fa-bullhorn', titleId: 'marketing', descriptionId: 'marketing-info' },
    { icon: 'fa-wrench', titleId: 'maintenance', descriptionId: 'maintenance-info' },
    { icon: 'fa-search', titleId: 'seo', descriptionId: 'seo-info' },
    { icon: 'fa-tachometer-alt', titleId: 'optimization', descriptionId: 'optimization-info' }
];

const Service = ({ fullPage = false }) => (
    <section
        className={`servicios${fullPage ? ' servicios--page' : ''}`}
        id="servicios"
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-duration="800"
    >
        <div className="services-shell">
            <header className="section-heading services-heading">
                <span className="section-kicker">
                    <FormattedMessage id="services-kicker" defaultMessage="What I do" />
                </span>
                <h2 className="heading">
                    <FormattedMessage id="services" defaultMessage="Services" />
                </h2>
                <p className="section-description">
                    <FormattedMessage
                        id="services-intro"
                        defaultMessage="Practical digital services that turn ideas into clear, reliable, and useful web experiences."
                    />
                </p>
            </header>

            <div className="services-grid">
                {services.map((service, index) => (
                    <article className="service-card" key={service.titleId}>
                        <div className="service-card-header">
                            <span className="service-card-number">{String(index + 1).padStart(2, '0')}</span>
                            <span className="service-icon" aria-hidden="true">
                                <i className={`fas ${service.icon}`}></i>
                            </span>
                        </div>
                        <h3>
                            <FormattedMessage id={service.titleId} />
                        </h3>
                        <p>
                            <FormattedMessage id={service.descriptionId} />
                        </p>
                        <span className="service-card-arrow" aria-hidden="true">↗</span>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default React.memo(Service);
