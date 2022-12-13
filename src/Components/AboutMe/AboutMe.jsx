import React from 'react';
import './AboutMe.css'
import AOS from 'aos';


const AboutMe = () => {
  AOS.init();
    return (
        <div>
         <div className='About' id="About" data-aos="zoom-in-up">
        <div className='About_content'>
            <div>
                <h3>Обо мне</h3>
               <p>
                Привет! Я Карыпов Эртур Озгорбекович, в настоящее время являюсь студентом Политехнического универитета КГТУ им.И.Раззакова. <br/>
                Мои личные качества: целеустремленность, амбициозность, самостоятельность, стрессоустойчивость. 
                Увлекаюсь боевыми единоборствами, футболом, просмором кино и чтением фантэзи книг.
               </p>
            </div>
            <div>
                <h3>Основная информация</h3>
                <div className="About_content-text">
                    <div>
                        <p><strong>Возраст:</strong></p>
                        <p><strong>Email:</strong></p>
                        <p><strong>Телефон:</strong></p>
                        <p><strong>Адрес:</strong></p>
                        <p><strong>Языки:</strong></p>
                    </div>
                    <div>
                        <p>19</p>
                        <p>karypov.ertur19@gmail.com</p>
                        <p>0708-19-06-03</p>
                        <p>Мкр.Тунгуч, д 67, кв 21</p>
                        <p>кыргызский, русский, английский</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
        </div>
    );
};


export default AboutMe;