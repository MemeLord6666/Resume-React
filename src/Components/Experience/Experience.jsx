import React from 'react';
import AOS from 'aos';

const Experience = () => {
    AOS.init();
    return (
        <div>
            <h2 class="ww">Опыт работы</h2>
     <div data-aos="flip-left" data-aos-duration="1000" class="Experience" id="Experience">
        <img src="https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82-%D0%BD%D0%B5%D1%82-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%B2%D1%83%D1%8E-%D0%B6%D0%B5%D1%81%D1%82%D1%83%D1%80%D1%83-%D1%81-%D0%BD%D0%B0%D0%B4%D0%BF%D0%B8%D1%81%D1%8C%D1%8E-158760073.jpg" alt=""/></div>
        </div>
    );
};

export default Experience;