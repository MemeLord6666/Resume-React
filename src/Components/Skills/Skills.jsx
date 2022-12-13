import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div>
            <div className='section' id="skills">
        <div className='skills'>
            <h2>Навыки</h2></div>
        <div className='diagram'>
            <div class="skillBlock">
                <div className='column'>
                    <span>85%</span>
                </div>
                <span className='name'>Html</span>
            </div>
            <div className='skillBlock'>
                <div className='column'>
                    <span>90%</span>
                </div>
                <span className='name'>Css</span>
            </div>
            <div className='skillBlock'>
                <div className='column'>
                    <span>90%</span>
                </div>
                <span className='name'>Photoshop</span>
            </div>
        </div>
   </div>
        </div>
    );
};

export default Skills;