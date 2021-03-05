import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {frameworks, languages, software, projects} from './components/data'


function App() {
  return (
    <div>
      <Header/>
      <Skills frameworks={frameworks} languages={languages} software={software}/>
      <Projects projects={projects}/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
