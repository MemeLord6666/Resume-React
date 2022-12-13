import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCreate from './Components/Navbar/Navbar';
import Card2 from './Components/Card/Card';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import 'aos';
import Education from './Components/Education/Education';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarCreate/>
      <Card2/>
      <MainRoutes/>
      </BrowserRouter>
    </div>
  );
};

export default App;