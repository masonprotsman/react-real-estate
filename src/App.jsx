import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}
export default App;