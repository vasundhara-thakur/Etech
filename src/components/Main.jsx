import React from 'react'
import Navbar from './section/Navbar'
import Home from './section/Home'
import Course from './section/Course'
import Popcourse from './section/Popcourse'
import Instructor from './section/Instructor'
import Footer from './section/Footer'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Course />
      <Popcourse />
      <Instructor />
      <Footer />
    </div>
  )
}

export default Main
