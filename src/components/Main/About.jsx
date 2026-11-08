import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import '../../pages/About/AboutPage.css'
import cv from '../../cv/cv.pdf';
import vscodeLogo from '../../img/vscode.svg';
import aboutPhoto from '../../img/photo.webp';
import awsLogo from '../../img/aws.svg';
import { FormattedMessage } from 'react-intl';

const Lanyard = lazy(() => import('../Lanyard/Lanyard'));

const DeferredLanyard = (props) => {
    const hostRef = useRef(null);
    const [ready, setReady] = useState(false);
    const [assetsReady, setAssetsReady] = useState(false);

    useEffect(() => {
        const imageUrls = [props.frontImage, props.backImage].filter(Boolean);
        let cancelled = false;
        Promise.all(imageUrls.map((url) => new Promise((resolve) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = resolve;
            image.src = url;
        }))).then(() => {
            if (!cancelled) setAssetsReady(true);
        });
        return () => { cancelled = true; };
    }, [props.frontImage, props.backImage]);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        if (!('IntersectionObserver' in window)) {
            setReady(true);
            return undefined;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setReady(true);
                observer.disconnect();
            }
        }, { rootMargin: '320px 0px' });
        observer.observe(host);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={hostRef} className="lanyard-deferred" aria-label="Interactive profile card">
            {ready && assetsReady ? <Suspense fallback={null}><Lanyard {...props} /></Suspense> : null}
        </div>
    );
};

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <header className="section-heading about-heading">
            <span className="section-kicker">
                <FormattedMessage id="about-kicker" defaultMessage="Profile" />
            </span>
            <h2 className="heading">
                <FormattedMessage id="about" defaultMessage="About me" />
            </h2>
            <p className="section-description">
                <FormattedMessage
                    id="about-intro"
                    defaultMessage="A practical, full-stack approach to building useful digital products."
                />
            </p>
        </header>

        <div className="row container">
            <div className="about-photo-slot">
                <DeferredLanyard
                    frontImage={aboutPhoto}
                    backImage={`${process.env.PUBLIC_URL || ''}/motto-card.svg`}
                    imageFit="cover"
                    cardColor="#111318"
                    orientation="portrait"
                    finish="matte"
                    anchor="center"
                    interactive
                    intro
                    className="about-lanyard"
                />
            </div>
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Youssef Barbouch and I am a full stack developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id="my-description"
                        defaultMessage="I am a <b>full-stack web developer</b> with 2+ years of freelance experience building scalable applications. I focus on <b>API development</b>, <b>system integrations</b>, and shipping end-to-end features that are reliable, fast, and <b>production-ready</b>. I'm self-learning, always improving through hands-on work, and currently building projects that blend engineering with <b>smart automation ideas</b>."
                        values={{ b: (chunks) => <strong>{chunks}</strong> }}
                    />
                </p>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <i className="fas fa-download" aria-hidden="true"></i>
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                </div>
            </div>
            <div className="experience-timeline" data-aos="fade-up">
                <div className="experience-heading">
                    <h3><FormattedMessage id="experience-title" defaultMessage="Professional experience" /></h3>
                    <p><FormattedMessage id="experience-description" defaultMessage="A timeline of the work and projects shaping my journey as a developer." /></p>
                </div>
                <div className="experience-list legacy-experience-list">
                    <article className="experience-entry">
                        <span className="experience-dot"></span>
                        <div><span className="experience-period">2024 â€” Present</span><h4>Freelance Full-Stack Developer</h4><p>Building scalable web applications, APIs and integrations from idea to production.</p></div>
                    </article>
                    <article className="experience-entry">
                        <span className="experience-dot"></span>
                        <div><span className="experience-period">2022 â€” 2024</span><h4>Web Development Projects</h4><p>Creating responsive interfaces and complete web experiences for different project needs.</p></div>
                    </article>
                    <article className="experience-entry">
                        <span className="experience-dot"></span>
                        <div><span className="experience-period">Ongoing</span><h4>Continuous Learning</h4><p>Exploring new technologies, automation ideas and better engineering practices.</p></div>
                    </article>
                </div>
                <div className="experience-list localized-experience-list">
                    <article className="experience-entry"><span className="experience-dot"></span><div><span className="experience-period"><FormattedMessage id="experience-current-period" defaultMessage="2024 â€” Present" /></span><h4><FormattedMessage id="experience-current-title" defaultMessage="Freelance Full-Stack Developer" /></h4><p><FormattedMessage id="experience-current-description" defaultMessage="Building scalable web applications, APIs and integrations from idea to production." /></p></div></article>
                    <article className="experience-entry"><span className="experience-dot"></span><div><span className="experience-period"><FormattedMessage id="experience-projects-period" defaultMessage="2022 â€” 2024" /></span><h4><FormattedMessage id="experience-projects-title" defaultMessage="Web Development Projects" /></h4><p><FormattedMessage id="experience-projects-description" defaultMessage="Creating responsive interfaces and complete web experiences for different project needs." /></p></div></article>
                    <article className="experience-entry"><span className="experience-dot"></span><div><span className="experience-period"><FormattedMessage id="experience-learning-period" defaultMessage="Ongoing" /></span><h4><FormattedMessage id="experience-learning-title" defaultMessage="Continuous Learning" /></h4><p><FormattedMessage id="experience-learning-description" defaultMessage="Exploring new technologies, automation ideas and better engineering practices." /></p></div></article>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="350">
                <h3><FormattedMessage id="skills-title" defaultMessage="Skills" /></h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Next.js" className="icons-skils next-logo" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" />
                        <h5>Next.js</h5>
                    </div>
                    <div>
                        <img alt="Tailwind CSS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                        <h5>Tailwind CSS</h5>
                    </div>
                    <div>
                        <img alt="Angular" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                        <h5>Angular</h5>
                    </div>
                    <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>Typescript</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="FastAPI" className="icons-skils fastapi-logo" src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" />
                        <h5>FastAPI</h5>
                    </div>
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                    <div>
                        <img alt="laravel" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                        <h5>Laravel</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <img alt="postgresql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="Amazon Web Services" className="icons-skils aws-logo" src={awsLogo} />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="photoshop" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Photoshop" />
                        <h5>Photoshop</h5>
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src={vscodeLogo} title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);

