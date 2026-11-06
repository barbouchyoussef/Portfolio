import React from 'react';

import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Service from '../../components/Main/Service';

const Services = () => (
    <div className="services-page-layout">
        <HeaderPage />
        <main className="service-page">
            <Service fullPage />
        </main>
        <ScrollToTop />
        <Footer />
    </div>
);

export default Services;
