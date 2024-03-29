import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/Portfolio'
// import Services from './components/services/Services'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App