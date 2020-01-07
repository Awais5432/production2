import React from 'react';
import './App.css';
import About from './About';
import Shop from './Shop';
import LeftMenu from './nav';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Vision from './components/About-us/Vision';
import Company from './components/About-us/Company';
import Team from './components/About-us/Team';
import Portfolio from './components/About-us/Portfolio';
import Drone from './components/Products/Hardware/drone-tech';
import Gaming from './components/Products/Hardware/gaming';
import Firmware from './components/Products/Software/drone-firm-soft';
import Alladin from './components/Products/Software/Alladin-pay-hmis';
import Pay from './components/Products/Software/pay-alladin';
import Aero_Space from './components/What we offer/aero-space-sol';
import Automobile from './components/What we offer/automobile-sol';
import Energy from './components/What we offer/energy-sol';
import Corporate from './components/What we offer/corporate-sol';
import E_Governace from './components/What we offer/e-governance-sol';
import Fintech from './components/What we offer/fintech-sol';



function App() {
  return (
    <Router>
    <div className="App">
      <LeftMenu />
      <switch>

       
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/shop' component={Shop} />
      <Route path='/vision' component={Vision} />
      <Route path='/company' component={Company} />
      <Route path='/team' component={Team} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/drone' component={Drone} />
      <Route path='/gaming' component={Gaming} />
      <Route path='/firmware' component={Firmware} />
      <Route path='/pay' component={Pay} />
      <Route path='/alladin' component={Alladin} />

      <Route path='/aeropace-solutions' component={Aero_Space} />
      <Route path='/automobile-solutions' component={Automobile} />
      <Route path='/energy-solutions' component={Energy} />
      <Route path='/corporate-solutions' component={Corporate} />
      <Route path='/e-governance-solutions' component={E_Governace} />
      <Route path='/fintech-solutions' component={Fintech} />

      </switch>
    </div>
    </Router>
  );
}

const Home = ()=>(
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;


