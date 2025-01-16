import About from '@/components/about/about'
import Clients from '@/components/clients/Clients'
import Contact from '@/components/contact/Contact'
import Experience from '@/components/experience/experience'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/header/Navbar'
import Headline from '@/components/headline/Headline'
import Hero from '@/components/hero/Hero'
import Portfolio from '@/components/Portfolio/Portfolio'
import Services from '@/components/services/services'
import Skills from '@/components/skills/Skills'
import React from 'react'

export default function Aryr() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Experience/>
      <Services/>
      <Headline/>
      <Portfolio/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}
