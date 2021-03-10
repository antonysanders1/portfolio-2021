import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll'
import {frameworks, languages, software, projects, bio} from './components/data'


function App() {
  return (
    <div>
      <Scroll showBelow={250} />
      <Header/>
      <Skills frameworks={frameworks} languages={languages} software={software}/>
      <Projects projects={projects}/>
      <About bio={bio}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
