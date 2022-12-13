import React from 'react';
import './EducationCss.css'
import AOS from 'aos';

const Education = () => {
    AOS.init();
    return (
        <div>
            <h2 id="Education">Образование</h2>
        <div className='Education'>
            <div className="Education_left" data-aos="fade-right">
               <span>
                Средне-специальное
               </span>
            </div>
            <div className='Education_right' data-aos="fade-left">
                    <span> 
                        <strong> Специальность:</strong>
                       Техническое обслуживание средств вычислительной техники и компьютерных сетей (ТОСВТ9-1-19)
                    </span>
                    <span>Киргизский государственный технический университет имени И. Раззакова (КГТУ)</span>
            </div>
        </div>
        </div>
    );
};

export default Education;