import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Parallex from './components/Parallex/Parallex';
import Service from './components/Services/Service';

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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
