import React, { lazy, Suspense } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import './components/DarkMode/DarkMode.css';

/* Pages */
import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"

const Home = lazy(() => import('./pages/Home/HomePage'));
const Services = lazy(() => import('./pages/Service/ServicesPage'));
const ProjectApp = lazy(() => import('./pages/Project/ProjectApp'));
const ProjectGame = lazy(() => import('./pages/Project/ProjectGame'));


function App() {
    return (
        <>
            <RouterScrollTop />
            <Suspense fallback={<div className="loading-pag" aria-label="Loading" />}> 
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/service" element={<Services />}></Route>
                    <Route exact path="/project/app" element={<ProjectApp />} />
                    <Route exact path="/project/game" element={<ProjectGame />} />
                </Routes>
            </Suspense>

        </>
    )
}

export default App
