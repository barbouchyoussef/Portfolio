import React, { useEffect, useState } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';
import './components/DarkMode/DarkMode.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import Services from "./pages/Service/ServicesPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = window.setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => window.clearTimeout(loadingTimer);
    }, []);

    return (
        <>
            <RouterScrollTop />
            {loading ? (
                <div className="loading-pag" aria-label="Loading" />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/service" element={<Services />}></Route>
                    <Route exact path="/project/app" element={<ProjectApp />} />
                    <Route exact path="/project/game" element={<ProjectGame />} />
                </Routes>
            )}

        </>
    )
}

export default App
