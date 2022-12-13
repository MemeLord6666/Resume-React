import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AboutMe/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
        </div>
    );
};

export default MainRoutes;