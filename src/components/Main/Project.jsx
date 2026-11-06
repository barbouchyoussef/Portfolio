import React from 'react';
import { FormattedMessage } from 'react-intl';

const projects = [
    ['BMUSIC', 'E-commerce musical', "Une expérience de boutique dédiée à l’équipement DJ et à la musique.", "Capture décran 2023-12-07 152947.webp", ['React', 'JavaScript', 'CSS', 'Stripe']],
    ['EY Studio — Free CX Audit', 'Audit d’expérience client', 'Une landing page immersive pour comprendre, mesurer et améliorer l’expérience client.', "Capture décran 2026-06-04 202844.webp", ['React', 'TypeScript', 'Tailwind CSS', 'UX/UI']],
    ['Maison Ondine', 'Bijouterie fine', 'Une direction artistique premium pour présenter une collection de bijoux et son univers.', "Capture décran 2026-11-06 044931.webp", ['HTML5', 'CSS', 'JavaScript', 'GSAP']],
    ['Regard', 'Opticien indépendant', 'Une vitrine éditoriale pour une maison d’optique, avec prise de rendez-vous et catalogue.', "Capture décran 2026-11-06 044948.webp", ['React', 'JavaScript', 'CSS', 'Responsive UI']],
    ['TuniTrAIde', 'Analyse boursière', 'Un dashboard financier pour suivre le marché tunisien, les indices et le sentiment du marché.', "Capture décran 2026-11-06 045734.webp", ['React', 'Node.js', 'Charts', 'API']],
    ['UX/UI auditor', 'Audit UX/UI', 'Une présentation d’audit qui synthétise l’évaluation de l’expérience et de l’interface.', "Capture décran 2026-11-06 050343.webp", ['Figma', 'UX Research', 'UI Design', 'Accessibility']]
].map(([name, type, description, image, technologies]) => ({ name, type, description, image, technologies, demo: '', repo: '' }));

const projectContent = {
    bmusic: {
        typeId: 'project-bmusic-type',
        descriptionId: 'project-bmusic-description',
        technologies: ['React', 'JavaScript', 'CSS', 'Stripe'],
        repo: 'https://github.com/barbouchyoussef/BMUSIC'
    },
    tunitraide: {
        typeId: 'project-tunitraide-type',
        descriptionId: 'project-tunitraide-description',
        technologies: ['Python', 'FastAPI', 'React', 'Machine Learning', 'PostgreSQL'],
        demo: 'https://drive.google.com/file/d/1GxraFICIdIV8jYPsC7WAsGViTXNNuuiL/view?usp=sharing',
        repo: 'https://github.com/barbouchyoussef/Tunisian-Trade-Assistant'
    },
    ey: {
        typeId: 'project-ey-type',
        descriptionId: 'project-ey-description',
        technologies: ['React 19', 'FastAPI', 'Python', 'Vite', 'PostgreSQL'],
        demo: 'https://drive.google.com/file/u/1/d/1VcirydNiYWovHkBa5g0GcS7dbmsfoYjp/view?usp=sharing',
        repo: 'https://github.com/barbouchyoussef/EY-CX-Studio'
    },
    glasses: {
        name: 'Regard',
        typeId: 'project-glasses-type',
        descriptionId: 'project-glasses-description',
        technologies: ['Next.js', 'React', 'GSAP', 'Lenis', 'Zustand'],
        demo: 'https://glasses-portfolio.vercel.app/',
        repo: 'https://github.com/barbouchyoussef/glassesshop'
    },
    jewelry: {
        typeId: 'project-jewelry-type',
        descriptionId: 'project-jewelry-description',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Three.js'],
        demo: 'https://ondine-silk.vercel.app/',
        repo: 'https://github.com/barbouchyoussef/Jewelry-STORE'
    },
    weefizz: {
        typeId: 'project-weefizz-type',
        descriptionId: 'project-weefizz-description',
        technologies: ['Figma', 'UX Research', 'UI Design', 'Accessibility'],
        repo: 'https://github.com/barbouchyoussef/UX-UI'
    }
};

const enhancedProjects = projects.map(project => {
    const key = project.name === 'BMUSIC'
        ? 'bmusic'
        : project.name === 'TuniTrAIde'
            ? 'tunitraide'
        : project.name.startsWith('EY Studio')
            ? 'ey'
            : project.name === 'Regard'
                ? 'glasses'
                    : project.name === 'Maison Ondine'
                        ? 'jewelry'
                        : project.name === 'UX/UI auditor'
                            ? 'weefizz'
                            : null;
    return key ? { ...project, ...projectContent[key] } : project;
});

const Project = () => (
    <section className="proyectos" id="proyectos">
        <header className="section-heading projects-heading">
            <span className="section-kicker">
                <FormattedMessage id="projects-kicker" defaultMessage="What I've built" />
            </span>
            <h2 className="heading"><FormattedMessage id="projects" defaultMessage="Projects" /></h2>
            <p className="section-description">
                <FormattedMessage
                    id="projects-intro"
                    defaultMessage="Selected work across product interfaces, e-commerce, automation, and UX."
                />
            </p>
        </header>
        <div className="project-cards" aria-label="Project showcase carousel">
            <div className="project-card-track">
            {[...enhancedProjects, ...enhancedProjects].map((project, index) => (
                <article className="project-card" key={`${project.name}-${index}`} aria-hidden={index >= projects.length}>
                    <div className="project-card-image-wrap">
                        <img src={`${process.env.PUBLIC_URL}/projects/${encodeURIComponent(project.image)}`} alt={`${project.name} project preview`} className="project-card-image" loading="lazy" decoding="async" width="1280" height="720" />
                        <span className="project-card-number">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="project-card-content">
                        <p className="project-card-type">{project.typeId ? <FormattedMessage id={project.typeId} defaultMessage={project.type} /> : project.type}</p>
                        <h3>{project.name}</h3>
                        <p className="project-card-description">{project.descriptionId ? <FormattedMessage id={project.descriptionId} defaultMessage={project.description} /> : project.description}</p>
                        <div className="project-card-badges" aria-label="Technologies used">
                            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                        </div>
                        <div className="project-card-actions">
                            <a className={`project-card-button${project.demo ? '' : ' is-disabled'}`} href={project.demo || undefined} target={project.demo ? '_blank' : undefined} rel="noopener noreferrer" aria-disabled={!project.demo} onClick={(event) => !project.demo && event.preventDefault()}>
                                <i className="fas fa-external-link-alt" aria-hidden="true"></i> Live demo
                            </a>
                            <a className={`project-card-button project-card-button-secondary${project.repo ? '' : ' is-disabled'}`} href={project.repo || undefined} target={project.repo ? '_blank' : undefined} rel="noopener noreferrer" aria-disabled={!project.repo} onClick={(event) => !project.repo && event.preventDefault()}>
                                <i className="fab fa-github" aria-hidden="true"></i> Repository
                            </a>
                        </div>
                    </div>
                </article>
            ))}
            </div>
        </div>
    </section>
);

export default React.memo(Project);
