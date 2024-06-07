import { useState } from 'react'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import About from './components/Navbar/About/About'
import Contact from './components/Navbar/contactUs/contactUs'
import { Projects } from './components/Navbar/Projects/Projects'

import Services from './components/Navbar/services/Services'
import Collections from './components/Navbar/collection/collection'
import Myteam from './components/Navbar/ourTeam/team'
import Footer from './components/Navbar/footer/footer'

function App() {
  
  return (
  <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <Services/>
     <Collections/>
     <About/>
     <Myteam/>
     
     {/* <Projects/> */}
           
     <Contact/>
     <Footer/>
  </div>
  )
}

export default App;
