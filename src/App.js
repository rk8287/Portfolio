import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Parallex from './components/Parallex/Parallex';
import Service from './components/Services/Service';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Home />
      </section>
      
      <section id='services'>
        <Parallex type={"services"} />
        </section>

      <section>
        <Service/>
      </section>
      <section id='Portfolio'><Parallex type={"portfolio"} /></section>
      <Portfolio/>
      <section>Contact</section>
    </div>
  );
}

export default App;
